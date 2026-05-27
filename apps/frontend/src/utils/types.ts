import type { TransactionReceipt } from "viem";

export interface MintTxStatus {
  txHash: string;
  receipt: TransactionReceipt | null;
}
export type ModalState = "minting" | "success" | "error";
