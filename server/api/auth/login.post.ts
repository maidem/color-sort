export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.password || !checkPassword(body.password)) {
    throw createError({ statusCode: 401, message: "Falsches Passwort" });
  }

  const { token, expiresAt } = createSession();

  setCookie(event, "session", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(expiresAt),
    path: "/",
  });

  return { ok: true };
});
