import { Elysia } from "elysia";
import { DuneQueryModel } from "./model";
import { DuneQuery } from "./service";

export const dune_query = new Elysia({ prefix: "/dune" })
  .get(
    "/meter-tokens-by-owner/:owner",
    async ({ params }) => {
      const response = await DuneQuery.getMeterTokensByOwner({
        owner: params.owner,
      });
      return response;
    },
    {
      params: DuneQueryModel.getMeterTokensByOwnerParams,
      response: {
        200: DuneQueryModel.MeterTokensByOwnerResponse,
        500: DuneQueryModel.ServerError,
        400: DuneQueryModel.paramsInvalid,
      },
    },
  )
  .get(
    "/meter-bonds-by-owner/:owner",
    async ({ params }) => {
      const response = await DuneQuery.getMeterBondsByOwner({
        owner: params.owner,
      });
      return response;
    },
    {
      params: DuneQueryModel.getMeterBondsByOwnerParams,
      response: {
        200: DuneQueryModel.MeterBondsByOwnerResponse,
        500: DuneQueryModel.ServerError,
        400: DuneQueryModel.paramsInvalid,
      },
    },
  );
