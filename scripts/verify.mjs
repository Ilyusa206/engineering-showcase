import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const ignored = new Set([".git", "node_modules"]);
const textExtensions = new Set([".md", ".ts", ".mjs", ".yml", ".yaml", ".conf", ".json"]);
const files = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    if (ignored.has(entry)) continue;
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (textExtensions.has(extname(path)) || entry === "README.md") files.push(path);
  }
}

walk(root);
const failures = [];
const privateAddress = /\b(?:10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})\b/g;
const credentialSignatures = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\b(?:ghp|github_pat)_[A-Za-z0-9_]{20,}\b/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /(?:password|secret|token)\s*[=:]\s*["'][^"']{8,}["']/i,
];

for (const file of files) {
  const display = relative(root, file);
  const content = readFileSync(file, "utf8");
  const addresses = [...content.matchAll(privateAddress)].map((match) => match[0]);
  if (addresses.length) failures.push(`${display}: private address pattern: ${addresses.join(", ")}`);
  for (const signature of credentialSignatures) {
    if (signature.test(content)) failures.push(`${display}: possible credential signature`);
  }

  if (extname(file) !== ".md") continue;
  for (const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = match[1].split("#")[0];
    if (!target || /^(?:https?:|mailto:)/.test(target)) continue;
    const resolved = normalize(resolve(dirname(file), target));
    if (!resolved.startsWith(root) || !existsSync(resolved)) {
      failures.push(`${display}: broken relative link: ${match[1]}`);
    }
  }
}

const caseRoot = join(root, "cases");
const requiredSections = [
  "# Problem",
  "# Constraints",
  "# Architecture / approach",
  "# My implementation",
  "# Interesting engineering decisions",
  "# Reliability / security / testing",
  "# Result",
  "# What this case demonstrates",
];

for (const caseName of readdirSync(caseRoot)) {
  const readme = join(caseRoot, caseName, "README.md");
  if (!existsSync(readme)) continue;
  const content = readFileSync(readme, "utf8");
  for (const heading of requiredSections) {
    if (!content.includes(`\n${heading}\n`)) failures.push(`${relative(root, readme)}: missing ${heading}`);
  }
}

for (const file of files.filter((item) => extname(item) === ".ts")) {
  const result = spawnSync(process.execPath, ["--experimental-transform-types", file], {
    encoding: "utf8",
    env: { ...process.env, NODE_NO_WARNINGS: "1" },
  });
  if (result.status !== 0) {
    failures.push(`${relative(root, file)}: TypeScript syntax/load failed\n${result.stderr.trim()}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

const typeScriptCount = files.filter((item) => extname(item) === ".ts").length;
console.log(
  `Verified ${files.length} text files and ${typeScriptCount} TypeScript samples: ` +
    "links, case structure, syntax, and security patterns are clean.",
);
