import { Hono } from "hono";
import { cors } from "hono/cors";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "@m3trs/trpc/router";

const app = new Hono();
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/trpc/*", trpcServer({ router: appRouter }));

export default {
  port: 3000,
  fetch: app.fetch,
};
