import { t, type UnwrapSchema } from "elysia";
import { ResultsResponse } from "@duneanalytics/client-sdk";

export const DuneQueryModel = {
  getMeterTokensByOwnerParams: t.Object({
    owner: t.String(),
  }),
  MeterTokensByOwnerResponse: t.Unsafe<ResultsResponse>(
    t.Object({
      result: t.Object({
        rows: t.Array(t.Any()), // Validates that at least 'result.rows' exists
      }),
    }),
  ),
  getMeterBondsByOwnerParams: t.Object({
    owner: t.String(),
  }),
  MeterBondsByOwnerResponse: t.Unsafe<ResultsResponse>(
    t.Object({
      result: t.Object({
        rows: t.Array(t.Any()), // Validates that at least 'result.rows' exists
      }),
    }),
  ),
  ServerError: t.Literal("Interal Server Error"),
  paramsInvalid: t.Literal("Invalid request parameters"),
} as const;

export type DuneQueryModel = {
  [k in keyof typeof DuneQueryModel]: UnwrapSchema<(typeof DuneQueryModel)[k]>;
};
