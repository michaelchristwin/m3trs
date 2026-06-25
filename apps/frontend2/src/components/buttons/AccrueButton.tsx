import { TRS } from '#/config/smart-contracts/TRS/TRS'
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'

interface AccrueButtonProps {
  tokenId: string
  className: string
  innerText: string
}
export function AccrueButton({
  tokenId,
  className,
  innerText,
}: AccrueButtonProps) {
  const { mutateAsync, isPending, data: txHash } = useWriteContract()

  const accrueRevenue = async () => {
    await mutateAsync({
      ...TRS,
      functionName: 'accrueRevenue',
      args: [BigInt(tokenId)],
    })
  }

  const { isLoading: isConfirming } = useWaitForTransactionReceipt({
    hash: txHash,
  })
  return (
    <button
      disabled={isPending || isConfirming}
      onClick={async (e) => {
        e.stopPropagation()
        e.preventDefault()
        await accrueRevenue()
      }}
      className={className}
    >
      {innerText}
    </button>
  )
}
