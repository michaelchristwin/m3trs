import { t, type UnwrapSchema } from "elysia";

export const DuneQueryModel = {
  getMeterTokensByOwnerBody: t.Object({
    owner: t.String(),
  }),
} as const;

export type DuneQueryModel = {
  [k in keyof typeof DuneQueryModel]: UnwrapSchema<(typeof DuneQueryModel)[k]>;
};
