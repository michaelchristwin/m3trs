import { formatDistanceToNow } from 'date-fns'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useReadContract } from 'wagmi'
import { TRS } from '#/config/smart-contracts/TRS/TRS'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#/components/ui/tooltip'
import { writeContract, waitForTransactionReceipt } from '@wagmi/core'
import { wagmiConfig } from '#/integrations/wagmi/config'

import { collections } from '#/config/opensea/collections'
import type { Bond } from './utils/types'

import { useMemo } from 'react'
import { trpc } from '#/config/trpc-client'

interface BondCardProps {
  bond: Bond
}

export function BondCard({ bond }: BondCardProps) {
  const { data: tokenId } = useReadContract({
    ...TRS,
    functionName: 'tokenByM3ter',
    args: [BigInt(bond.identifier)],
  })
  const { data: totalAccrued } = useReadContract({
    ...TRS,
    functionName: 'accRevenuePerToken',
    args: [BigInt(bond.identifier)],
  })
  const {
    data: token,
    isLoading: isTokenLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['getBond', bond.identifier],
    queryFn: () =>
      trpc.opensea.getNftMetadata.query({
        contractAddress: TRS.address,
        tokenId: String(tokenId),
      }),
    enabled: !!tokenId,
  })
  const { data: m3terMetadata } = useQuery({
    queryKey: ['getM3ter', bond.identifier],
    queryFn: () =>
      trpc.opensea.getNftMetadata.query({
        contractAddress: collections.nouns,
        tokenId: bond.identifier,
        chain: 'base',
      }),
    enabled: !!bond.identifier,
  })
  const stopTime = useMemo(() => {
    if (!token) return null
    const trait = token.traits.find((t) => t.traitType === 'stop_time')
    if (!trait) return null
    return trait.value as number
  }, [token])

  const status = useMemo(() => {
    if (!stopTime) return null

    const remaining = stopTime - Math.floor(Date.now() / 1000)

    return {
      isActive: remaining > 0,
      isMoreThanAWeekAway: remaining > 7 * 24 * 60 * 60,
      remaining,
    }
  }, [stopTime])

  const isMetadataLoading = !tokenId || isTokenLoading

  const redeem = async (id: number) => {
    try {
      const hash = await writeContract(wagmiConfig, {
        ...TRS,
        functionName: 'redeem',
        args: [BigInt(id)],
      })
      const reciept = await waitForTransactionReceipt(wagmiConfig, { hash })
      if (reciept.status === 'reverted') {
        throw Error('Transaction reverted')
      }
      await refetch()
    } catch (err) {
      console.error(err)
    }
  }
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['redeem'],
    mutationFn: redeem,
  })

  const buttonText = useMemo(() => {
    if (isPending) return '[SUBMITTING...]'
    else {
      return '[REDEEM]'
    }
  }, [isPending])
  const isInactive = status && !status.isActive
  const buttonProps = {
    onClick: () => mutateAsync(Number(bond.identifier)),
    disabled: status?.isActive || isPending,
    className:
      'w-full py-3 bg-primary-container text-on-primary-container font-headline font-bold text-sm rounded transition-all duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-container-highest disabled:text-on-surface-variant',
  }
  if (isMetadataLoading)
    return (
      <article className="bg-surface-container-low rounded-lg p-6 flex flex-col animate-pulse">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="h-3 w-20 rounded bg-surface-container-highest mb-2" />
            <div className="h-7 w-24 rounded bg-surface-container-highest" />
          </div>

          <div className="h-6 w-24 rounded-full bg-surface-container-highest" />
        </div>

        <div className="h-24 rounded bg-surface-container-highest mb-6" />

        <div className="h-12 rounded bg-surface-container-highest mt-auto" />
      </article>
    )
  else if (isError)
    return (
      <article className="bg-surface-container-low rounded-lg p-6">
        <p className="text-sm text-error">Failed to load bond metadata.</p>
      </article>
    )
  else
    return (
      <article className="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden">
        {m3terMetadata && (
          <>
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-15"
              style={{ backgroundImage: `url(${m3terMetadata.image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-30% to-surface-container-low to-70%" />
          </>
        )}

        {status && (
          <div
            className={`
        absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-mono font-bold border z-10
        ${
          status.isActive
            ? status.isMoreThanAWeekAway
              ? 'bg-secondary/15 text-secondary border-secondary/30'
              : 'bg-[#00FF41]/15 text-[#00FF41] border-[#00FF41]/30'
            : 'bg-primary-container/15 text-primary-container border-primary-container/30'
        }
      `}
          >
            {status.isActive ? 'PENDING' : 'REDEEMABLE'}
          </div>
        )}

        <div className="mb-6">
          <p className="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1 z-10">
            METER_ID
          </p>

          <p className="font-mono text-xl text-on-surface">
            #{Number(bond.identifier)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 z-10">
          <div>
            <p className="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1">
              STOP_TIME
            </p>

            {stopTime ? (
              <p className="font-mono text-sm text-on-surface">
                {new Date(stopTime * 1000).toISOString().split('T')[0]}
              </p>
            ) : (
              <p v-else className="font-mono text-sm text-on-surface-variant">
                Unknown
              </p>
            )}
          </div>

          <div>
            <p className="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1">
              ACCRUED
            </p>

            {totalAccrued !== undefined ? (
              <p className="font-mono text-sm text-on-surface">
                ${Number(totalAccrued).toFixed(2)}
              </p>
            ) : (
              <div className="h-5 w-20 rounded bg-surface-container-highest animate-pulse" />
            )}
          </div>
        </div>

        {status && stopTime && (
          <div
            className={`bg-surface-container-high rounded p-4 mb-6 border-l-2 z-10 ${status.isMoreThanAWeekAway ? 'border-secondary-container' : 'border-primary-container'}`}
          >
            <p className="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1">
              REDEEMABLE
            </p>

            <p
              className={`font-mono text-2xl uppercase
          ${
            status.isMoreThanAWeekAway
              ? 'text-secondary-container'
              : 'text-primary-container'
          }`}
            >
              {formatDistanceToNow(stopTime * 1000, {
                addSuffix: true,
              })}
            </p>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-outline-variant/20 z-10">
          {isInactive ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <button {...buttonProps}>{buttonText}</button>
              </TooltipTrigger>

              <TooltipContent className="w-75" side="top">
                <p className="font-mono text-sm">
                  Stop time has passed. Manual redeem execution is required to
                  finalize state.
                </p>
                <p className="font-mono text-xs text-yellow-600 mt-1">
                  Warning: This action is irreversible and halts all revenue
                  accrual.
                </p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <button {...buttonProps}>{buttonText}</button>
          )}
        </div>
      </article>
    )
}
