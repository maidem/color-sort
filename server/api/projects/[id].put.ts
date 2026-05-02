export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  if (!id || body?.id !== id) {
    throw createError({ statusCode: 400, message: "Invalid project id" });
  }
  const db = getDb();
  const info = db
    .prepare("UPDATE projects SET data = ? WHERE id = ?")
    .run(JSON.stringify(body), id);
  if (info.changes === 0) {
    throw createError({ statusCode: 404, message: "Project not found" });
  }
  return body;
});
