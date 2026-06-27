import { readContracts } from '@wagmi/core'
import { AccrueButton } from './buttons/AccrueButton'
import { CollectButton } from './buttons/CollectButton'
import { useQuery } from '@tanstack/react-query'
import { wagmiConfig } from '#/integrations/wagmi/config'
import { formatDistanceToNow } from 'date-fns'
import { TRS } from '#/config/smart-contracts/TRS/TRS'
import { useNavigate } from '@tanstack/react-router'
import { useMemo } from 'react'
import { encodeBase62 } from '#/utils/base62-parser'

interface HoldingItemProps {
  tokenId: string
  metadataUrl: string
  contract: string
  name: string
}
const address = '0xb2403f83C23748b26B06173db7527383482E8c5a'

export function HoldingItem({
  tokenId,
  name,
  contract,
  metadataUrl,
}: HoldingItemProps) {
  const navigate = useNavigate()

  const {
    data: metadata,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['getNftByIdentifier', tokenId],
    queryFn: async () => {
      const result = await readContracts(wagmiConfig, {
        contracts: [
          {
            ...TRS,
            functionName: 'revenue',
            args: [address, BigInt(tokenId)],
          },
          {
            ...TRS,
            functionName: 'token',
            args: [BigInt(tokenId)],
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
      const metadataRaw = result[1].result

      return {
        stopTime: Number(metadataRaw[3]),
        supply: metadataRaw[1],
        revenue,
        contract: contract,
        name: name,
      }
    },
    enabled: !!contract && !!tokenId && !!metadataUrl,
  })

  const statusPillClasses: Record<string, string> = {
    Active:
      'text-primary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold',
    Expiring:
      'text-secondary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold',
  }
  const status = useMemo(() => {
    if (!metadata)
      return {
        isActive: true,
        isMoreThanAWeekAway: true,
      }
    const now = Math.floor(Date.now() / 1000)
    const oneWeek = 7 * 24 * 60 * 60
    const difference = Number(metadata.stopTime) - now
    return {
      isActive: difference > 0,
      isMoreThanAWeekAway: difference > oneWeek,
    }
  }, [metadata])

  return (
    <div
      onClick={() =>
        navigate({
          to: '/token/$tokenId',
          params: { tokenId: encodeBase62(tokenId) },
        })
      }
      aria-label="Open token details"
      className="relative grid grid-cols-1 md:grid-cols-11 gap-3 md:gap-4 px-4 md:px-6 py-4 cursor-pointer bg-surface-container-low rounded group hover:bg-surface-container transition-colors items-center"
    >
      {!status.isMoreThanAWeekAway && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container/50"></div>
      )}

      <div className="md:col-span-2 text-sm text-on-surface">
        <span className="md:hidden text-on-surface-variant">Token Name: </span>
        <span className="font-mono-data">{name}</span>
      </div>
      <div className="col-span-1 font-mono-data text-sm text-on-surface md:text-right">
        <span className="md:hidden text-on-surface-variant">Balance: </span>
        {isLoading && (
          <div className="inline-block h-4 w-10 rounded bg-surface-container-highest animate-pulse"></div>
        )}
        {isSuccess && (
          <span className="font-mono-data">{Number(metadata.supply)}</span>
        )}
      </div>
      <div className="md:col-span-2 text-sm text-primary md:text-right">
        <span className="md:hidden text-on-surface-variant">Claimable: </span>
        {isLoading && (
          <div className="inline-block h-4 w-20 rounded bg-surface-container-highest animate-pulse"></div>
        )}
        {isSuccess && <span>${Number(metadata.revenue).toFixed(2)}</span>}
      </div>
      <div className="md:col-span-2 text-sm text-on-surface md:text-right">
        <span className="md:hidden text-on-surface-variant">Stop Time: </span>
        {isLoading && (
          <div className="inline-block h-4 w-20 rounded bg-surface-container-highest animate-pulse"></div>
        )}
        {isSuccess && (
          <span>
            {formatDistanceToNow(new Date(Number(metadata.stopTime) * 1000), {
              addSuffix: true,
            })}
          </span>
        )}
      </div>
      <div className="md:col-span-2 md:flex md:justify-center">
        <span
          className={statusPillClasses[status.isActive ? 'Active' : 'Expiring']}
        >
          {status.isActive ? 'Active' : 'Expiring'}
        </span>
      </div>
      <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-2">
        <AccrueButton
          innerText="Accrue"
          tokenId={BigInt(tokenId)}
          className="md:block hidden px-3 py-1.5 rounded-[30px] border border-primary/50 text-on-surface transition-colors text-xs font-headline uppercase tracking-wider hover:bg-sky-500/10 hover:border-sky-500 hover:text-sky-400"
        />
        <CollectButton
          innerText="Collect"
          tokenId={BigInt(tokenId)}
          className="md:block hidden px-3 py-1.5 rounded-[30px] border border-primary/50 text-on-surface transition-colors text-xs font-headline uppercase tracking-wider hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-400"
        />
      </div>
    </div>
  )
}
