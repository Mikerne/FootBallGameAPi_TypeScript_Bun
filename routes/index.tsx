import { Elysia } from "elysia";

export default new Elysia().get("/", () => "Welcome to the API!");
