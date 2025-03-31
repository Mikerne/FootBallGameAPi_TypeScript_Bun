import { serve } from "bun";
import indexRoute from "./routes/index";
import usersRoute from "./routes/users";

const server = serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") return indexRoute(req);
    if (url.pathname === "/api/users") return usersRoute(req);

    return new Response("Not found", { status: 404 });
  },
});

console.log(`Server listening on http://localhost:${server.port}`);
