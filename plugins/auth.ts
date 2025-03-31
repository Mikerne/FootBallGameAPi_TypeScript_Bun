import { jwt } from "@elysiajs/jwt";
import { Elysia } from "elysia";

export const authPlugin = new Elysia()
    .use(jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET!,
        exp: "7d",
    }));
