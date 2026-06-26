import {
  UserRejectedRequestError,
  ContractFunctionRevertedError,
  TransactionExecutionError,
  isAddressEqual,
  encodeFunctionData,
} from 'viem'
import { TRS } from '@/config/smart-contracts/TRS/TRS'
import { MyToken } from '@/config/smart-contracts/MyToken/MyToken'
import {
  simulateContract,
  writeContract,
  readContract,
  waitForTransactionReceipt,
  sendCalls,
  waitForCallsStatus,
} from '@wagmi/core'
import { wagmiConfig } from '#/integrations/wagmi/config'

export async function approve(
  id: bigint,
): Promise<{ status: 'success' } | { status: 'error'; error: string }> {
  try {
    const approvedAddress = await readContract(wagmiConfig, {
      ...MyToken,
      functionName: 'getApproved',
      args: [id],
    })

    if (isAddressEqual(approvedAddress, TRS.address))
      return { status: 'success' }
    console.log('Running approval')
    const { request: approveReq } = await simulateContract(wagmiConfig, {
      ...MyToken,
      functionName: 'approve',
      args: [TRS.address, id],
    })

    const approveTxHash = await writeContract(wagmiConfig, approveReq)

    await waitForTransactionReceipt(wagmiConfig, { hash: approveTxHash })

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

export async function mint(mintArgs: {
  supply: bigint
  m3terId: bigint
  stopTime: bigint
  uri: string
}): Promise<
  | { status: 'success'; txHash: `0x${string}` }
  | { status: 'error'; error: string }
> {
  try {
    const { request: mintReq } = await simulateContract(wagmiConfig, {
      ...TRS,
      functionName: 'create',
      args: [
        mintArgs.supply,
        mintArgs.m3terId,
        mintArgs.stopTime,
        mintArgs.uri,
      ],
    })

    const txHash = await writeContract(wagmiConfig, mintReq)

    await waitForTransactionReceipt(wagmiConfig, { hash: txHash })

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

interface ApproveAndMintParams {
  id: bigint
  supply: bigint
  m3terId: bigint
  stopTime: bigint
  uri: string
}

export async function atomicApproveAndMint({
  id,
  supply,
  m3terId,
  stopTime,
  uri,
}: ApproveAndMintParams): Promise<
  | { status: 'success'; txHash: `0x${string}` }
  | { status: 'error'; error: string }
> {
  try {
    const { id: txId } = await sendCalls(wagmiConfig, {
      calls: [
        {
          to: MyToken.address,
          data: encodeFunctionData({
            abi: MyToken.abi,
            functionName: 'approve',
            args: [TRS.address, id],
          }),
        },
        {
          to: TRS.address,
          data: encodeFunctionData({
            abi: TRS.abi,
            functionName: 'create',
            args: [supply, m3terId, stopTime, uri],
          }),
        },
      ],
    })
    const result = await waitForCallsStatus(wagmiConfig, {
      id: txId,
      pollingInterval: 1000,
    })
    return {
      status: 'success',
      txHash: result.receipts?.[1].transactionHash as `0x${string}`,
    }
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
