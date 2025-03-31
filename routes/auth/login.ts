import { createRoute } from "../../utils/createRoute";

export default createRoute({ prefix: "/api/auth" })
  .post("/login", async ({ body, jwt, cookie }) => {
    const { username, password } = body as { username: string; password: string };

    const token = await jwt.sign({ id: 1, username });
    if (!cookie.auth) {
      return new Response("Cookie system not initialized", { status: 500 });
    }
    // 👇 Sæt cookie korrekt med .set()
    cookie.auth!.set({
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return { success: true };
  });
