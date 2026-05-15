import { z } from "zod";
import { publicProcedure, router } from "..";
import { ArweaveUpload } from "../modules/arweave-upload/service";

export const arweaveRouter = router({
  uplodMetadata: publicProcedure
    .input(
      z.object({
        name: z.string(),
        stopTime: z.number(),
        description: z.string(),
      }),
    )
    .mutation(async (opts) => {
      const { input } = opts;
      return await ArweaveUpload.uploadMetadata({ uploadBody: input });
    }),
});
