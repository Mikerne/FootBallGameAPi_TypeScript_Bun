import { Elysia } from "elysia";
import { cookie } from "@elysiajs/cookie";
import { authPlugin } from "./plugins/auth";

//Utils
import swagger from "@elysiajs/swagger";

// Routes
import indexRoute from "./routes/index";
import userRoutes from "./routes/users/index";
import loginRoute from "./routes/auth/login";
import profileRoute from "./routes/auth/profile";
import testAuth from "./routes/auth/test";
const app = new Elysia()
  .use(swagger()) // Opretter Automatisk Swagger Dokumentation over api endpoints.
  .use(cookie())
  .use(authPlugin)
  .use(indexRoute)
  .use(userRoutes)
  .use(loginRoute)
  .use(profileRoute)
  .use(testAuth)
  .listen(3000);

console.log(`✅ Server listening on http://localhost:${app.server?.port}`);
