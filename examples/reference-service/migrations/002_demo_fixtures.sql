-- Санитизированная реконструкция на основе реализованных систем.
-- Вымышленные fixtures нужны только для ручной проверки standalone demo.

INSERT INTO spaces(id, name)
VALUES ('space-alpha', 'Alpha'), ('space-beta', 'Beta');

INSERT INTO memberships(space_id, user_id, role)
VALUES
  ('space-alpha', 'user-owner', 'owner'),
  ('space-beta', 'user-outsider', 'owner');
