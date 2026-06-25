import {
  UserRejectedRequestError,
  ContractFunctionRevertedError,
  TransactionExecutionError,
  isAddressEqual,
} from 'viem'
import type { Address, WalletClient } from 'viem'
import { TRS } from '@/config/smart-contracts/TRS/TRS'
import { publicClient } from '@/config/viem-clients'
import { MyToken } from '@/config/smart-contracts/MyToken/MyToken'

export async function approve(
  account: Address,
  id: bigint,
  walletClient: WalletClient,
): Promise<{ status: 'success' } | { status: 'error'; error: string }> {
  try {
    const approvedAddress = await publicClient.readContract({
      ...MyToken,
      functionName: 'getApproved',
      args: [id],
    })

    if (isAddressEqual(approvedAddress, TRS.address))
      return { status: 'success' }
    console.log('Running approval')
    const { request: approveReq } = await publicClient.simulateContract({
      ...MyToken,
      account,
      functionName: 'approve',
      args: [TRS.address, id],
    })

    const approveTxHash = await walletClient.writeContract(approveReq)

    await publicClient.waitForTransactionReceipt({ hash: approveTxHash })

    return { status: 'success' }
  } catch (err) {
    console.error(err)
    if (err instanceof UserRejectedRequestError) {
      return { status: 'error', error: 'You rejected the transaction.' }
    }
    if (err instanceof ContractFunctionRevertedError) {
      return { status: 'error', error: err.shortMessage }
    }
    if (err instanceof TransactionExecutionError) {
      return { status: 'error', error: err.shortMessage }
    }
    return { status: 'error', error: 'An unexpected error occurred.' }
  }
}

export async function mint(
  mintArgs: {
    supply: bigint
    m3terId: bigint
    stopTime: bigint
    uri: string
  },
  account: Address,
  walletClient: WalletClient,
): Promise<
  | { status: 'success'; txHash: `0x${string}` }
  | { status: 'error'; error: string }
> {
  try {
    const { request: mintReq } = await publicClient.simulateContract({
      ...TRS,
      account,
      functionName: 'create',
      args: [
        mintArgs.supply,
        mintArgs.m3terId,
        mintArgs.stopTime,
        mintArgs.uri,
      ],
    })

    const txHash = await walletClient.writeContract(mintReq)

    await publicClient.waitForTransactionReceipt({ hash: txHash })

    return { status: 'success', txHash }
  } catch (err) {
    if (err instanceof UserRejectedRequestError) {
      return { status: 'error', error: 'You rejected the transaction.' }
    }
    if (err instanceof ContractFunctionRevertedError) {
      return { status: 'error', error: err.shortMessage }
    }
    if (err instanceof TransactionExecutionError) {
      return { status: 'error', error: err.shortMessage }
    }
    return { status: 'error', error: 'An unexpected error occurred.' }
  }
}
