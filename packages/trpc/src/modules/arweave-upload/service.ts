import Arweave from "arweave";
import { ArweaveSigner, TurboFactory } from "@ardrive/turbo-sdk";
import type { UploadModel } from "./model";

export abstract class ArweaveUpload {
  static async uploadMetadata({ uploadBody }: UploadModel) {
    const arweave = Arweave.init({
      host: "arweave.net",
      protocol: "https",
      port: 443,
    });
    const key = await arweave.wallets.generate();
    const signer = new ArweaveSigner(key);
    const turbo = TurboFactory.authenticated({ signer });
    const result = await turbo.upload({
      data: JSON.stringify(uploadBody),
      dataItemOpts: {
        tags: [
          { name: "Content-Type", value: "application/json" },
          { name: "App-Name", value: "M3trs" },
          { name: "Title", value: uploadBody.name },
        ],
      },
    });

    return `https://arweave.net/${result.id}`;
  }
}
