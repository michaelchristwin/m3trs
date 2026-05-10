import { Elysia } from "elysia";
import { DuneQueryModel } from "./model";
import { DuneQuery } from "./service";
import { ValidatedResultsResponse } from "./types";

export const dune_query = new Elysia({ prefix: "/dune" }).get(
  "meter-token-by-owner/:owner",
  async ({ params }) => {
    const response = await DuneQuery.getMeterTokensByOwner({
      owner: params.owner,
    });
    return response as ValidatedResultsResponse;
  },
  {
    params: DuneQueryModel.getMeterTokensByOwnerParams,
    response: {
      200: DuneQueryModel.MeterTokensByOwnerResponse,
      500: DuneQueryModel.ServerError,
    },
  },
);
