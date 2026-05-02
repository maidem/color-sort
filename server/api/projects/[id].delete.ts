export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: "Missing id" });
  const db = getDb();
  db.prepare("DELETE FROM projects WHERE id = ?").run(id);
  return { ok: true };
});
