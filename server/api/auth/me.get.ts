export default defineEventHandler((event) => {
  const token = getCookie(event, "session");
  if (!validateSession(token)) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  return { ok: true };
});
