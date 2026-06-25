import { formatEther } from 'viem'
import { readContracts } from '@wagmi/core'
import { formatDistanceToNow } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import { TRS } from '#/config/smart-contracts/TRS/TRS'
import { wagmiNewConfig } from '#/integrations/wagmi/config'
import { Link } from '@tanstack/react-router'
import { ListingSkeleton } from './ListingSkeleton'
import type { Listing } from '@m3trs/opensea-sdk'
import { trpc } from '#/config/trpc-client'
import { useMemo } from 'react'

interface ListingItemProps {
  listing: Listing
}
const address = '0xb2403f83C23748b26B06173db7527383482E8c5a'
export function ListingItem({ listing }: ListingItemProps) {
  const tokenId =
    listing.protocolData?.parameters.offer[0]?.identifierOrCriteria

  const {
    data: metadata,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['getNftByIdentifier', tokenId],
    queryFn: async () => {
      const result = await readContracts(wagmiNewConfig, {
        contracts: [
          {
            ...TRS,
            functionName: 'revenue',
            args: [address, BigInt(tokenId!)],
          },
          {
            ...TRS,
            functionName: 'token',
            args: [BigInt(tokenId!)],
          },
        ],
      })
      if (result[0].error) {
        throw result[0].error
      }
      if (result[1].error) {
        throw result[1].error
      }

      const revenue = Number(result[0].result)
      const total_supply = result[1].result[1]
      const stopTime = result[1].result[3]
      const nft_metadata = await trpc.opensea.getNftMetadata.query({
        contractAddress: TRS.address,
        tokenId: tokenId!,
      })
      return {
        revenue,

        total_supply,
        stopTime,
        image: nft_metadata.image,
        name: nft_metadata.name || '',
      }
    },
    enabled: !!tokenId,
  })
  const isActive = useMemo(
    () => Number(metadata?.stopTime) * 1000 > Date.now(),
    [metadata],
  )
  if (isLoading) return <ListingSkeleton />
  if (isSuccess && isActive)
    return (
      <Link
        to="/discover/$tokenId"
        params={{
          tokenId: tokenId!,
        }}
        className="relative bg-surface-container-low rounded p-4"
      >
        <div className="flex gap-4 md:hidden">
          {metadata.image && (
            <img
              src={metadata.image}
              alt={metadata.name}
              className="w-20 h-30 rounded object-cover shrink-0"
            />
          )}

          <div className="min-w-0 flex-1 space-y-1 text-sm">
            <div className="font-mono-data text-on-surface truncate">
              {metadata.name}
            </div>

            <div>
              <span className="text-on-surface-variant">Accrued:</span>
              <span className="text-primary">
                ${Number(metadata.revenue).toFixed(2)}
              </span>
            </div>

            <div>
              <span className="text-on-surface-variant">Stop:</span>
              {formatDistanceToNow(new Date(Number(metadata.stopTime) * 1000), {
                addSuffix: true,
              })}
            </div>

            <div>
              <span className="text-on-surface-variant">Supply:</span>
              {listing.remainingQuantity} of
              {Number(metadata.total_supply)}
            </div>

            <div>
              <span className="text-on-surface-variant">Price:</span>
              {formatEther(BigInt(listing.price.current.value))} Ξ
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()

                window.open(
                  `https://opensea.io/item/zora/${TRS.address}/${tokenId!}`,
                  '_blank',
                  'noopener,noreferrer',
                )
              }}
              className="inline-block mt-2 px-4 py-1.5 w-full text-center rounded-[30px] bg-primary-container text-neutral-800 text-xs font-headline tracking-wider"
            >
              Buy
            </button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-13 md:gap-4 md:items-center">
          <div className="md:col-span-3 text-sm text-on-surface md:flex md:items-center md:space-x-1">
            <span className="md:hidden text-on-surface-variant">
              Token Name:{' '}
            </span>
            {metadata.image && (
              <img
                src={metadata.image}
                className="w-6 h-6"
                alt={metadata.name}
              />
            )}
            <span className="font-mono-data">{metadata.name}</span>
          </div>
          <div className="md:col-span-2 text-sm text-primary md:text-center">
            <span className="md:hidden text-on-surface-variant">
              Total Accrued:{' '}
            </span>

            <span>${Number(metadata.revenue).toFixed(2)}</span>
          </div>

          <div className="md:col-span-2 text-sm text-on-surface md:text-right">
            <span className="md:hidden text-on-surface-variant">
              Stop Time:{' '}
            </span>

            <span>
              {formatDistanceToNow(new Date(Number(metadata.stopTime) * 1000), {
                addSuffix: true,
              })}
            </span>
          </div>
          <div className="md:col-span-2 font-mono-data text-sm text-on-surface md:text-right">
            <span className="md:hidden text-on-surface-variant">Supply: </span>
            <span>
              {listing.remainingQuantity} of {Number(metadata.total_supply)}
            </span>
          </div>
          <div className="md:col-span-2 md:flex md:justify-end">
            <span className="md:hidden text-on-surface-variant">Price: </span>
            <span> {formatEther(BigInt(listing.price.current.value))} Ξ </span>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()

                window.open(
                  `https://opensea.io/item/zora/${TRS.address}/${tokenId!}`,
                  '_blank',
                  'noopener,noreferrer',
                )
              }}
              className="block px-4 text-center py-1.5 rounded-[30px] bg-primary-container text-neutral-800 transition-colors text-xs font-headline tracking-wider hover:bg-primary-container/80"
            >
              Buy
            </button>
          </div>
        </div>
      </Link>
    )
}
