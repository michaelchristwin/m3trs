import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { CORSHandlerPlugin } from "@orpc/server/plugins";
import { router } from "./router";

const exact = new Set(["https://m3trs.pages.dev", "https://m3trs-1.pages.dev"]);
const patterns = [/^https:\/\/[a-z0-9-]+\.m3ter\.ing$/];

const handler = new RPCHandler(router, {
  plugins: [
    new CORSHandlerPlugin({
      origin: (origin) =>
        exact.has(origin) || patterns.some((re) => re.test(origin))
          ? origin
          : null,
      allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH", "QUERY"],
    }),
  ],
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export default {
  async fetch(request, env, ctx) {
    const { matched, response } = await handler.handle(request, {
      prefix: "/rpc",
      context: { env, ctx }, // Provide initial context if needed, can be an async function
    });

    if (matched) {
      return response;
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
