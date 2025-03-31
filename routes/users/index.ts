import { Elysia } from "elysia";
import { sql } from "../../db/connection";

export default new Elysia({ prefix: "/api/users" })
    .get("/", async () => {
        const users = await sql`SELECT * FROM users LIMIT 10`;
        return { users };
    });
