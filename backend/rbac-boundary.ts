/**
 * Sanitized reconstruction based on an implemented system.
 * Not verbatim production code.
 */

type SpaceRole = "viewer" | "member" | "editor" | "admin" | "owner";
type RequiredAccess = "read" | "write" | "admin" | "manage";

interface Principal {
  userId: string;
  status: "active" | "suspended";
}

interface Membership {
  spaceId: string;
  userId: string;
  role: SpaceRole;
  active: boolean;
}

interface MembershipRepository {
  findActive(spaceId: string, userId: string): Promise<Membership | null>;
}

const accessByRole: Record<SpaceRole, ReadonlySet<RequiredAccess>> = {
  viewer: new Set(["read"]),
  member: new Set(["read", "write"]),
  editor: new Set(["read", "write", "admin"]),
  admin: new Set(["read", "write", "admin"]),
  owner: new Set(["read", "write", "admin", "manage"]),
};

export class AuthorizationError extends Error {
  constructor(
    readonly status: 401 | 403 | 404,
    readonly code: string,
  ) {
    super(code);
  }
}

export async function requireSpaceAccess(
  repository: MembershipRepository,
  principal: Principal | null,
  spaceId: string,
  required: RequiredAccess,
): Promise<Membership> {
  if (!principal) throw new AuthorizationError(401, "unauthorized");
  if (principal.status !== "active") {
    throw new AuthorizationError(403, "principal_inactive");
  }

  const membership = await repository.findActive(spaceId, principal.userId);

  // A missing membership is returned as 404 so callers cannot enumerate spaces.
  if (!membership?.active) throw new AuthorizationError(404, "space_not_found");
  if (!accessByRole[membership.role].has(required)) {
    throw new AuthorizationError(403, "permission_denied");
  }

  return membership;
}

// Important: a global tenant/family role is intentionally not accepted here.
// Access must be proven for the exact space named by the request.

