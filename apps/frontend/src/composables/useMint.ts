import { trpc } from "@/config/trpc-client";
import { wagmiAdapter } from "@/config/wagmi";
import { approve, mint } from "@/smart-contracts/actions";
import { createTokenMetadata } from "@/utils/token-metadata";
import type { MintTokensParams, MintTxStatus } from "@/utils/types";
import { getWalletClient } from "@wagmi/core";
import { ref } from "vue";

export function useMint() {
  const currentStep = ref("");
  const mintTxStatus = ref<MintTxStatus>({
    status: "idle",
  });
  const mintTokens = async ({
    supply,
    tokenId,
    stopTime,
    description,
    walletAddress,
  }: MintTokensParams) => {
    try {
      currentStep.value = "Approving M3ter for transaction...";
      const walletClient = await getWalletClient(wagmiAdapter.wagmiConfig);
      const approveResult = await approve(walletAddress, tokenId, walletClient);
      if (approveResult.status === "error") {
        mintTxStatus.value = approveResult;
        return approveResult;
      }

      currentStep.value = "Preparing metadata...";
      const { svgString, metadataPart } = createTokenMetadata({
        creator: walletAddress,
        description,
        stopTime,
        supply,
        tokenId,
      });
      currentStep.value = "Uploading NFT image to arweave...";
      const image_url = await trpc.arweave.uploadSvg.mutate({
        name: metadataPart.name,
        image: svgString,
      });
      const metadata = {
        ...metadataPart,
        image: image_url,
      };

      currentStep.value = "Uploading metadata to arweave...";
      const url = await trpc.arweave.uplodMetadata.mutate(metadata);

      currentStep.value = "Minting tokens and bond...";
      const result = await mint(
        {
          supply: BigInt(supply),
          m3terId: tokenId,
          stopTime: BigInt(stopTime),
          uri: url,
        },
        walletAddress,
        walletClient,
      );
      mintTxStatus.value = result;

      return result;
    } catch (err) {
      const result = {
        status: "error" as const,
        error:
          err instanceof Error ? err.message : "An unexpected error occurred.",
      };

      mintTxStatus.value = result;
      return result;
    }
  };

  return {
    mintTokens,
    currentStep,
    mintTxStatus,
  };
}
