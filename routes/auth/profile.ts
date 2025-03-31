import { Elysia } from "elysia";
import { authPlugin } from "../../plugins/auth";
export default new Elysia({ prefix: "/api/auth" })
    .use(authPlugin) // 👈 Tilføjer jwt + typer
    .get("/profile", async ({ jwt, cookie }) => {
        const token = cookie.auth;
        if (!token) return new Response("Unauthorized", { status: 401 });

        const user = await jwt.verify(token.toString()); // Sikre at token er en string og er oprettet før den bliver sat
        if (!user) return new Response("Invalid token", { status: 403 });

        return { user };
    });
