export default defineEventHandler(() => {
  const db = getDb();
  const rows = db
    .prepare(
      "SELECT data FROM projects ORDER BY COALESCE(json_extract(data, '$.position'), 9999999) ASC, created_at DESC",
    )
    .all() as { data: string }[];
  return rows.map((r) => JSON.parse(r.data));
});
