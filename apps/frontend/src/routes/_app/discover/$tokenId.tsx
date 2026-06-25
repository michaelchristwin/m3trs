import { Image, Brackets, ArrowLeft, Wallet } from 'lucide-react'
import { checksumAddress } from 'viem'
import { formatDistanceToNow } from 'date-fns'
import { TRS } from '#/config/smart-contracts/TRS/TRS'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { readContracts } from '@wagmi/core'
import { wagmiNewConfig } from '#/integrations/wagmi/config'
import { useQuery } from '@tanstack/react-query'
import { AccrueButton } from '#/components/buttons/AccrueButton'
import { trpc } from '#/config/trpc-client'

export const Route = createFileRoute('/_app/discover/$tokenId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { tokenId } = Route.useParams()
  const router = useRouter()
  const address = '0xb2403f83C23748b26B06173db7527383482E8c5a'

  const { data, isLoading } = useQuery({
    queryKey: ['getMetadata', tokenId],
    queryFn: async () => {
      const result = await readContracts(wagmiNewConfig, {
        contracts: [
          {
            ...TRS,
            functionName: 'token',
            args: [BigInt(tokenId)],
          },
          {
            ...TRS,
            functionName: 'accRevenuePerToken',
            args: [BigInt(tokenId)],
          },
          {
            ...TRS,
            functionName: 'revenue',
            args: [checksumAddress(address), BigInt(tokenId)],
          },
        ],
      })
      const metadata = await trpc.opensea.getNftMetadata.query({
        contractAddress: TRS.address,
        tokenId,
      })

      if (result[0].error) {
        throw result[0].error
      }
      if (result[1].error) {
        throw result[1].error
      }
      if (result[2].error) {
        throw result[2].error
      }
      return {
        token: result[0].result,
        accRevenuePerToken:
          Number(result[1].result * result[0].result[1]) / 1e18,
        revenue: Number(result[1].result),
        ...metadata,
      }
    },
  })
  const handleBack = () => {
    if (window.history.length > 1) {
      router.history.back()
    } else {
      router.navigate({ to: '/discover' })
    }
  }

  return (
    <>
      <title>Discover {tokenId}</title>
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={handleBack}
            aria-label="Navigate back"
            className="text-on-surface/50 hover:text-primary transition-colors flex items-center gap-1 font-headline text-sm"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>

        {isLoading && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-pulse">
            <div>
              <div className="h-10 md:h-14 w-72 md:w-96 rounded bg-surface-container-highest"></div>
              <div className="h-4 w-56 mt-3 rounded bg-surface-container-highest"></div>
            </div>
            <div className="flex items-center px-4 py-2 rounded-full bg-surface-container-highest self-start md:self-auto">
              <div className="w-2 h-2 rounded-full bg-surface-container-high mr-2"></div>
              <div className="h-4 w-20 rounded bg-surface-container-high"></div>
            </div>
          </div>
        )}

        {data && (
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
            v-else-if="data"
          >
            <div>
              <h1 className="font-headline font-bold text-3xl md:text-5xl text-on-surface tracking-tight">
                Token
                <span className="font-mono text-primary">{data.name}</span>
              </h1>
              <p className="font-mono text-sm text-on-surface/50 mt-2 tracking-widest uppercase">
                Contract Details &amp; Revenue Hub
              </p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {isLoading && (
            <div className="lg:col-span-4 flex flex-col gap-6 animate-pulse">
              <div className="bg-surface-container-low rounded-lg ghost-border-outline overflow-hidden flex flex-col">
                <div className="bg-surface-container-highest px-6 py-4 flex items-center justify-between">
                  <div className="h-4 w-24 rounded bg-surface-container"></div>
                  <div className="h-5 w-5 rounded bg-surface-container"></div>
                </div>
                <div className="p-6 flex flex-col gap-6">
                  <div className="w-45 h-[310.33px] mx-auto rounded bg-surface-container" />
                </div>
              </div>
            </div>
          )}

          {data && (
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-low rounded-xl ghost-border-outline overflow-hidden flex flex-col">
                <div className="bg-surface-container-highest px-6 py-4 flex items-center justify-between">
                  <h3 className="font-headline font-bold text-on-surface text-sm uppercase tracking-wider">
                    Image
                  </h3>
                  <Image size={18} className="text-on-surface/50" />
                </div>
                <div className="p-6">
                  <img
                    src={data.image}
                    alt="TRS image"
                    className="w-100 md:w-80 h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-surface-container-low rounded-xl ghost-border-outline overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="bg-surface-container-highest px-6 py-4 flex items-center justify-between relative z-10">
                <h3 className="font-headline font-bold text-on-surface text-sm uppercase tracking-wider flex items-center gap-2">
                  <Brackets className="text-primary" size={18} />
                  Metadata
                </h3>
              </div>
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 relative z-10">
                {isLoading && (
                  <div className="font-mono text-[3.5rem] leading-none font-light tracking-tight mb-2 animate-pulse">
                    <div className="h-12 w-48 rounded bg-surface-container-highest"></div>
                  </div>
                )}
                {data && (
                  <div className="flex-1 flex flex-col justify-start gap-6">
                    <div>
                      <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1">
                        Description
                      </label>
                      <p className="font-mono text-sm text-primary block tracking-wider mb-1">
                        {data.description}
                      </p>
                    </div>
                    <div>
                      <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1">
                        M3TER ID
                      </label>
                      <div className="font-mono text-2xl text-secondary">
                        #{data.token[2]}
                      </div>
                    </div>
                  </div>
                )}

                <div className="w-px bg-surface-container hidden md:block"></div>
                <div className="w-full h-px bg-surface-container md:hidden"></div>

                <div className="flex-1 flex flex-col justify-center gap-6">
                  {isLoading && (
                    <div className="font-mono text-3xl animate-pulse">
                      <div className="h-8 w-40 rounded bg-surface-container-highest"></div>
                    </div>
                  )}
                  {data && (
                    <div>
                      <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1">
                        Supply
                      </label>
                      <div className="font-mono text-3xl text-on-surface">
                        {data.token[1]}
                      </div>
                    </div>
                  )}

                  {data && (
                    <div>
                      <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1">
                        Stop Time
                      </label>
                      <div className="font-mono text-sm text-on-surface mb-1">
                        {
                          new Date(Number(data.token[3]) * 1000)
                            .toISOString()
                            .split('T')[0]
                        }
                      </div>
                      <div className="font-mono text-xs text-secondary-container bg-secondary-container/10 inline-block px-2 py-0.5 rounded">
                        Expires in
                        {formatDistanceToNow(
                          new Date(Number(data.token[3]) * 1000),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl ghost-border-outline overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="bg-surface-container-highest px-6 py-4 flex items-center justify-between relative z-10">
                <h3 className="font-headline font-bold text-on-surface text-sm uppercase tracking-wider flex items-center gap-2">
                  <Wallet size={18} />
                  Revenue Hub
                </h3>
              </div>
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 relative z-10">
                <div className="flex-1 flex flex-col justify-center">
                  <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-2">
                    Total Accrued
                  </label>
                  {isLoading && (
                    <div className="font-mono text-[3.5rem] leading-none font-light tracking-tight mb-2 animate-pulse">
                      <div className="h-12 w-48 rounded bg-surface-container-highest"></div>
                    </div>
                  )}
                  {data && (
                    <div className="font-mono text-[3.5rem] leading-none text-on-surface font-light tracking-tight mb-2">
                      ${data.accRevenuePerToken.toFixed(2)}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-primary mt-2">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="trending_up"
                    >
                      trending_up
                    </span>
                    <span className="font-mono text-xs">+12.4% this epoch</span>
                  </div>
                </div>

                <div className="w-px bg-surface-container hidden md:block"></div>
                <div className="w-full h-px bg-surface-container md:hidden"></div>

                <div className="flex-1 flex flex-col justify-center">
                  <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-2">
                    Your Claimable
                  </label>
                  {isLoading && (
                    <div className="font-mono text-3xl mb-6 animate-pulse">
                      <div className="h-8 w-40 rounded bg-surface-container-highest"></div>
                    </div>
                  )}
                  {data && (
                    <div className="font-mono text-3xl text-primary mb-6">
                      ${data.revenue.toFixed(2)}
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://opensea.io/item/zora/${TRS.address}/${tokenId}`}
                      className="block md:px-6 font-semibold uppercase px-3 text-center py-1.5 md:py-3 rounded-lg bg-primary-container text-neutral-800 transition-colors text-sm font-headline tracking-wider hover:bg-primary-container/80"
                    >
                      Buy on OpenSea
                    </a>
                    <AccrueButton
                      innerText="Accrue Revenue"
                      tokenId={tokenId}
                      className="flex-1 bg-transparent border-primary/30 border text-primary font-headline font-bold text-sm py-3 px-4 rounded hover:bg-primary/5 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
