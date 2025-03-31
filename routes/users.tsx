import { sql } from "../db/connection";
export default async function usersRoute(_req: Request) {
    const users = await sql`SELECT * FROM users LIMIT 10`;
    return Response.json({ users });
}
