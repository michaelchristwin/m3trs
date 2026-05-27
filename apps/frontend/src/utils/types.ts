export type MintTxStatus =
  | { success: true; txHash: `0x${string}` }
  | { success: false; error: string };
export type ModalState = "minting" | "success" | "error";
