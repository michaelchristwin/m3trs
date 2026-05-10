import Arweave from "arweave";
import { Elysia } from "elysia";
import { ArweaveSigner, TurboFactory } from "@ardrive/turbo-sdk";
import { UploadModel } from "./model";

export const upload = new Elysia().post(
  "/metadata",
  async ({ body }) => {
    const arweave = Arweave.init({
      host: "arweave.net",
      protocol: "https",
      port: 443,
    });
    const key = await arweave.wallets.generate();
    const signer = new ArweaveSigner(key);
    const turbo = TurboFactory.authenticated({ signer });
    const result = await turbo.upload({
      data: JSON.stringify(body),
      dataItemOpts: {
        tags: [
          { name: "Content-Type", value: "application/json" },
          { name: "App-Name", value: "M3trs" },
          { name: "Title", value: body.name },
        ],
      },
    });

    return `https://arweave.net/${result.id}`;
  },
  {
    body: UploadModel.uploadBody,

    response: {
      200: UploadModel.uploadResponse,
      400: UploadModel.uploadInvalid,
    },
  },
);
