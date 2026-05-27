import type { Address } from "viem";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { walletClient, publicClient } from "@/config/viem-clients";
import { MyToken } from "@/config/smart-contracts/MyToken/MyToken";

export async function approve(approveArgs: [account: Address, id: bigint]) {
  const result = await publicClient.readContract({
    ...TRS,
    functionName: "isApprovedForAll",
    args: [approveArgs[0], MyToken.address],
  });
  const isApproved = result.valueOf();
  if (isApproved) return;
  const { request: approveReq } = await publicClient.simulateContract({
    ...MyToken,
    account: approveArgs[0],
    functionName: "approve",
    args: approveArgs,
  });
  const approveTxHash = await walletClient.writeContract(approveReq);
  await publicClient.waitForTransactionReceipt({
    hash: approveTxHash,
  });
}

export async function mint(
  mintArgs: [
    _supply: bigint,
    _m3terId: bigint,
    _stopTime: bigint,
    _uri: string,
  ],
  account: Address,
) {
  const { request: mintReq } = await publicClient.simulateContract({
    ...TRS,
    account: account,
    functionName: "create",
    args: mintArgs,
  });
  const mintTxHash = await walletClient.writeContract(mintReq);
  const txReciept = await publicClient.waitForTransactionReceipt({
    hash: mintTxHash,
  });
  return { txHash: mintTxHash, receipt: txReciept };
}
