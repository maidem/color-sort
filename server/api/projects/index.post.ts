export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body?.id || typeof body.id !== "string") {
    throw createError({ statusCode: 400, message: "Invalid project" });
  }
  const db = getDb();
  db.prepare(
    "INSERT INTO projects (id, data, created_at) VALUES (?, ?, ?)",
  ).run(body.id, JSON.stringify(body), body.createdAt ?? Date.now());
  return body;
});
