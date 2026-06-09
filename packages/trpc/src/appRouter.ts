import { z } from "zod";
import { publicProcedure, router } from ".";
import { arweaveRouter } from "./routers/arweave";
import { openSeaRouter } from "./routers/opensea";

export const appRouter = router({
  opensea: openSeaRouter,
  arweave: arweaveRouter,
  getNounsBase64URL: publicProcedure
    .input(z.object({ imageUrl: z.url() }))
    .query(async (opts) => {
      const { input } = opts;
      const res = await fetch(input.imageUrl);
      const blob = await res.blob();

      const buffer = Buffer.from(await blob.arrayBuffer());

      return `data:${blob.type || "application/octet-stream"};base64,${buffer.toString("base64")}`;
    }),
});
export type AppRouter = typeof appRouter;
