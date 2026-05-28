import {
  type Address,
  UserRejectedRequestError,
  ContractFunctionRevertedError,
  TransactionExecutionError,
  isAddressEqual,
} from "viem";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { walletClient, publicClient } from "@/config/viem-clients";
import { MyToken } from "@/config/smart-contracts/MyToken/MyToken";

export async function approve(
  account: Address,
  id: bigint,
): Promise<{ success: true } | { success: false; error: string }> {
  try {
    const approvedAddress = await publicClient.readContract({
      ...MyToken,
      functionName: "getApproved",
      args: [id],
    });

    if (isAddressEqual(approvedAddress, TRS.address)) return { success: true };
    console.log("Running approval");
    const { request: approveReq } = await publicClient.simulateContract({
      ...MyToken,
      account,
      functionName: "approve",
      args: [TRS.address, id],
    });

    const approveTxHash = await walletClient.writeContract(approveReq);

    await publicClient.waitForTransactionReceipt({ hash: approveTxHash });

    return { success: true };
  } catch (err) {
    if (err instanceof UserRejectedRequestError) {
      return { success: false, error: "You rejected the transaction." };
    }
    if (err instanceof ContractFunctionRevertedError) {
      return { success: false, error: err.shortMessage };
    }
    if (err instanceof TransactionExecutionError) {
      return { success: false, error: err.shortMessage };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function mint(
  mintArgs: {
    supply: bigint;
    m3terId: bigint;
    stopTime: bigint;
    uri: string;
  },
  account: Address,
): Promise<
  { success: true; txHash: `0x${string}` } | { success: false; error: string }
> {
  try {
    const { request: mintReq } = await publicClient.simulateContract({
      ...TRS,
      account,
      functionName: "create",
      args: [
        mintArgs.supply,
        mintArgs.m3terId,
        mintArgs.stopTime,
        mintArgs.uri,
      ],
    });

    const txHash = await walletClient.writeContract(mintReq);

    await publicClient.waitForTransactionReceipt({ hash: txHash });

    return { success: true, txHash };
  } catch (err) {
    if (err instanceof UserRejectedRequestError) {
      return { success: false, error: "You rejected the transaction." };
    }
    if (err instanceof ContractFunctionRevertedError) {
      return { success: false, error: err.shortMessage };
    }
    if (err instanceof TransactionExecutionError) {
      return { success: false, error: err.shortMessage };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}
