import { z } from "zod";
import { publicProcedure, router } from "..";
import { OpenseaQuery } from "../modules/opensea-query/service";

export const openSeaRouter = router({
  getNFTByAccount: publicProcedure
    .input(
      z.object({
        owner: z.string(),
        collection: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return await OpenseaQuery.getNFTByAccount(input);
    }),
  getNFTByOwners: publicProcedure
    .input(
      z.object({
        owner: z.string(),
        identifier: z.string(),
        limit: z.number().positive().optional(),
      }),
    )
    .query(async ({ input }) => {
      return await OpenseaQuery.getNFTByOwners(input);
    }),
  getNFTsByContract: publicProcedure
    .input(
      z.object({
        address: z.string(),
        limit: z.number().positive().optional(),
      }),
    )
    .query(async ({ input }) => {
      return await OpenseaQuery.getNFTsByContract(input);
    }),
  getBestListingsCollection: publicProcedure
    .input(
      z.object({ slug: z.string(), limit: z.number().positive().optional() }),
    )
    .query(async ({ input }) => {
      return await OpenseaQuery.getBestListingsCollection(input);
    }),
  getNftMetadata: publicProcedure
    .input(
      z.object({
        contractAddress: z.string(),
        tokenId: z.string(),
        chain: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      return await OpenseaQuery.getNftMetadata(input);
    }),
});
