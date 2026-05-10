import { t, type UnwrapSchema } from "elysia";
import { ResultsResponseSchema } from "./types";

export const DuneQueryModel = {
  getMeterTokensByOwnerParams: t.Object({
    owner: t.String(),
  }),
  MeterTokensByOwnerResponse: ResultsResponseSchema,
  ServerError: t.Literal("Interal Server Error"),
} as const;

export type DuneQueryModel = {
  [k in keyof typeof DuneQueryModel]: UnwrapSchema<(typeof DuneQueryModel)[k]>;
};
