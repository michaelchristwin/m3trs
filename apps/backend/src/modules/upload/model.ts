import { t, type UnwrapSchema } from "elysia";

export const UploadModel = {
  uploadBody: t.Object({
    name: t.String(),
    stopTime: t.Number(),
    description: t.String(),
  }),
  uploadResponse: t.String(),
  uploadInvalid: t.Literal("Invalid metadata"),
} as const;

export type UploadModel = {
  [k in keyof typeof UploadModel]: UnwrapSchema<(typeof UploadModel)[k]>;
};
