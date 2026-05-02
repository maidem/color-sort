import { randomBytes, timingSafeEqual } from "node:crypto";

const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export function checkPassword(input: string): boolean {
  const expected = process.env.AUTH_PASSWORD;
  if (!expected) return false;
  try {
    return timingSafeEqual(Buffer.from(input), Buffer.from(expected));
  } catch {
    // buffers of different length – definitely wrong
    return false;
  }
}

export function createSession(): { token: string; expiresAt: number } {
  const token = randomBytes(32).toString("hex");
  const expiresAt = Date.now() + SESSION_TTL_MS;
  getDb()
    .prepare(
      "INSERT INTO sessions (token, created_at, expires_at) VALUES (?, ?, ?)",
    )
    .run(token, Date.now(), expiresAt);
  return { token, expiresAt };
}

export function validateSession(token: string | undefined): boolean {
  if (!token) return false;
  const row = getDb()
    .prepare("SELECT expires_at FROM sessions WHERE token = ?")
    .get(token) as { expires_at: number } | undefined;
  if (!row) return false;
  if (row.expires_at < Date.now()) {
    getDb().prepare("DELETE FROM sessions WHERE token = ?").run(token);
    return false;
  }
  return true;
}

export function deleteSession(token: string): void {
  getDb().prepare("DELETE FROM sessions WHERE token = ?").run(token);
}
