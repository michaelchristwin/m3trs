import { TRS } from '@/config/smart-contracts/TRS/TRS'
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'

interface CollectButtonProps {
  tokenId: string
  innerText: string
  className: string
}

export function CollectButton({
  tokenId,
  innerText,
  className,
}: CollectButtonProps) {
  const { mutateAsync, isPending, data: txHash } = useWriteContract()

  const collectRevenue = async () => {
    await mutateAsync({
      ...TRS,
      functionName: 'collectRevenue',
      args: [BigInt(tokenId)],
    })
  }

  const {
    isLoading: isConfirming,
    // isSuccess: isConfirmed
  } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  return (
    <button
      onClick={async (e) => {
        e.stopPropagation()
        e.preventDefault()
        await collectRevenue()
      }}
      disabled={isPending || isConfirming}
      className={className}
    >
      {innerText}
    </button>
  )
}
