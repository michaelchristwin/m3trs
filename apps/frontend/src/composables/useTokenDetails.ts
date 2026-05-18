import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { trpc } from "@/config/trpc-client";
import { publicClient } from "@/config/viem-clients";
import { useQuery } from "@tanstack/vue-query";
import type { Address } from "viem";

export function useTokenDetails(params: {
  contract: Address;
  tokenId: string;
  metadataUrl: string;
  name: string;
  walletAddress: Address;
}) {
  return useQuery({
    queryKey: ["token-details", params.contract, params.tokenId],
    queryFn: async () => {
      const nftByOwners = await trpc.opensea.getNFTByOwners.query({
        owner: params.contract,
        identifier: params.tokenId,
      });

      const supply =
        nftByOwners?.owners.reduce((sum, owner) => sum + owner.quantity, 0) ??
        0;

      const revenue = await publicClient.readContract({
        ...TRS,
        functionName: "revenue",
        args: [params.walletAddress, BigInt(params.tokenId)],
      });

      const metadata: Metadata = await fetch(params.metadataUrl).then((res) =>
        res.json(),
      );

      return {
        ...metadata,
        supply,
        revenue,
        status: "Active",
        contract: params.contract,
        name: params.name,
      };
    },
    enabled: !!params.contract && !!params.tokenId && !!params.metadataUrl,
  });
}

interface Metadata {
  name: string;
  stopTime: number;
  description: string;
}
