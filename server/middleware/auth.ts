export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname;

  // Only protect project API routes
  if (!path.startsWith("/api/projects")) return;

  const token = getCookie(event, "session");
  if (!validateSession(token)) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
});
