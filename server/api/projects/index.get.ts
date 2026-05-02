export default defineEventHandler(() => {
  const db = getDb();
  const rows = db
    .prepare("SELECT data FROM projects ORDER BY created_at DESC")
    .all() as { data: string }[];
  return rows.map((r) => JSON.parse(r.data));
});
