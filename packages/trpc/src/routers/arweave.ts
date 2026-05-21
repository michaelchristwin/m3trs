import { z } from "zod";
import { publicProcedure, router } from "..";
import { ArweaveUpload } from "../modules/arweave-upload/service";
import { Rendering } from "../modules/rendering/service";

export const arweaveRouter = router({
  uplodMetadata: publicProcedure
    .input(
      z.object({
        name: z.string(),
        image: z.string(),
        description: z.string(),
        attributes: z.array(
          z.object({
            display_type: z.optional(z.string()),
            trait_type: z.string(),
            value: z.string().or(z.number()),
          }),
        ),
      }),
    )
    .mutation(async (opts) => {
      const { input } = opts;
      return await ArweaveUpload.uploadMetadata({ uploadBody: input });
    }),
  uploadImage: publicProcedure
    .input(
      z.object({
        name: z.string(),
        width: z.number(),
        height: z.number(),
        url: z.url(),
        id: z.string(),
      }),
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const buffer = await Rendering.snapshot(input);
      return await ArweaveUpload.uploadImage({
        name: input.name,
        image: buffer,
      });
    }),
});
