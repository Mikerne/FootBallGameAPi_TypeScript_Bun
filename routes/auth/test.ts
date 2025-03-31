import { createRoute } from "../../utils/createRoute";

export default createRoute({ prefix: "/api/auth" })
  .get("/test", async ({ cookie, jwt, error }) => {
    const token = cookie.auth?.value;

    if (!token) {
      return error(401, "Not logged in");
    }

    const payload = await jwt.verify(token);

    if (!payload) {
      return error(401, "Invalid token");
    }

    return {
      message: "Logged in!",
      user: payload,
    };
  });
