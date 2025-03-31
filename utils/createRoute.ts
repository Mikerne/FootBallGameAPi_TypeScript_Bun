import { Elysia } from "elysia";
import { cookie } from "@elysiajs/cookie";
import { authPlugin } from "../plugins/auth";

export const createRoute = (opts?: { prefix?: string }) =>
  new Elysia(opts) // 👈 Her!
    .use(cookie()) // 👈 Dette er det vigtige for setCookie
    .use(authPlugin);
