import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@m3trs/trpc/router";

const server = import.meta.env.VITE_BACKEND_URL;

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${server}/trpc`,
    }),
  ],
});
