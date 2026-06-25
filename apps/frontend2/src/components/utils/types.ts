import type { Address } from "viem";

export type ModalState = "minting" | "success" | "error";

export type Bond = {
  collection: string;
  identifier: string;
  contract: string;
  tokenStandard: string;
  openseaUrl: string;
  updatedAt: string;
  isDisabled: boolean;
  isNsfw: boolean;
  traits: {
    traitType: string;
    value?: any;
    displayType?: string | undefined;
    maxValue?: string | undefined;
  }[];
  description?: string | undefined;
  name?: string | undefined;
  imageUrl?: string | undefined;
  displayImageUrl?: string | undefined;
  displayAnimationUrl?: string | undefined;
  metadataUrl?: string | undefined;
  originalImageUrl?: string | undefined;
  originalAnimationUrl?: string | undefined;
};

export type MintTxStatus =
  | { status: "idle" }
  | { status: "pending" }
  | { status: "success"; txHash: `0x${string}` }
  | { status: "error"; error: string };

export interface MintTokensParams {
  supply: bigint;
  tokenId: bigint;
  stopTime: number;
  description: string;
  walletAddress: Address;
}
