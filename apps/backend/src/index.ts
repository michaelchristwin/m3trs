import { Elysia } from "elysia";
import { upload } from "./modules/upload";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(upload)
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
