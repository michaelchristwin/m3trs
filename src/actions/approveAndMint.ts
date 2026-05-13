import type { Address } from "viem";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { account, walletClient, publicClient } from "@/config/viem-clients";
import { MyToken } from "@/config/smart-contracts/MyToken/MyToken";

async function approveAndMint(
  approveArgs: [account: Address, id: bigint],
  mintArgs: [_supply: bigint, _m3terId: bigint, _stopTime: bigint, _uri: string],
) {
  const { request: approveReq } = await publicClient.simulateContract({
    ...MyToken,
    account: account!,
    functionName: "approve",
    args: approveArgs,
  });
  const approveTxHash = await walletClient.writeContract(approveReq);
  await publicClient.waitForTransactionReceipt({
    hash: approveTxHash,
  });

  const { request: mintReq } = await publicClient.simulateContract({
    ...TRS,
    account: account!,
    functionName: "create",
    args: mintArgs,
  });
  const mintTxHash = await walletClient.writeContract(mintReq);
  await publicClient.waitForTransactionReceipt({
    hash: mintTxHash,
  });
}

export { approveAndMint };
