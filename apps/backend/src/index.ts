import { Elysia } from "elysia";
import { cors } from "@elysia/cors";
import { upload } from "./modules/upload";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(cors())
  .use(upload)
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
