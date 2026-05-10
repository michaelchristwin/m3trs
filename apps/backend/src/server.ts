// Server file

import { Elysia } from "elysia";
import { cors } from "@elysia/cors";
import logixlysia from "logixlysia";
import { upload } from "./modules/upload";
import { dune_query } from "./modules/dune-query";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(cors())
  .use(logixlysia())
  .use(upload)
  .use(dune_query)
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
