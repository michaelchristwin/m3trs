import { createFileRoute } from '@tanstack/react-router'
import { BondCard } from '#/components/BondCard'
import { HoldingItem } from '#/components/HoldingItem.tsx'
import { useQueries } from '@tanstack/react-query'
import { collections } from '#/config/opensea/collections'
import { checksumAddress } from 'viem'
import { trpc } from '#/config/trpc-client'

const address = '0xb2403f83C23748b26B06173db7527383482E8c5a'

export const Route = createFileRoute('/_app/portfolio/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [holdings, bonds] = useQueries({
    queries: [
      {
        queryKey: ['getNfts', address, collections.holdings],
        queryFn: async () => {
          const nftsResponse = await trpc.opensea.getNFTByAccount.query({
            owner: checksumAddress(address),
            collection: collections.holdings.toLowerCase(),
          })
          return nftsResponse.nfts.map((nft) => {
            return {
              name: nft.name,
              tokenId: nft.identifier,
              metadataUrl: nft.metadataUrl,
              contract: nft.contract,
            }
          })
        },
      },
      {
        queryKey: ['getBonds', address, collections.bonds],
        queryFn: () =>
          trpc.opensea.getNFTByAccount.query({
            owner: address,
            collection: collections.bonds,
          }),
      },
    ],
  })

  return (
    <>
      <title>Portfolio | M3trs</title>
      <section>
        {bonds.isLoading && (
          <header className="mb-8 md:mb-12 animate-pulse">
            <div className="h-10 md:h-12 w-64 rounded bg-surface-container-highest mb-3"></div>

            <div className="h-4 w-full max-w-2xl rounded bg-surface-container-highest"></div>
          </header>
        )}
        {bonds.isSuccess && bonds.data.nfts.length === 0 && (
          <div className="flex justify-center items-center p-2">
            <p>You have no bonds yet</p>
          </div>
        )}
        {bonds.isSuccess && bonds.data.nfts.length > 0 && (
          <>
            <header className="mb-8 md:mb-12">
              <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-2">
                M3TER BONDS
              </h1>
              <p className="text-on-surface-variant font-mono text-sm max-w-2xl">
                ACTIVE_CONTRACTS:
                <span className="text-primary-container">
                  {bonds.data.nfts.length}
                </span>
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {bonds.data.nfts.map((bond) => (
                <BondCard key={bond.identifier} bond={bond} />
              ))}
            </div>
          </>
        )}
      </section>

      <section>
        {holdings.isLoading && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <article
                  key={i}
                  className="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden animate-pulse"
                >
                  <div className="absolute top-6 right-6 h-6 w-24 rounded-full bg-surface-container-highest"></div>

                  <div className="mb-6">
                    <div className="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

                    <div className="h-7 w-24 rounded bg-surface-container-highest"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <div className="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

                      <div className="h-5 w-16 rounded bg-surface-container-highest"></div>
                    </div>

                    <div>
                      <div className="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

                      <div className="h-5 w-24 rounded bg-surface-container-highest"></div>
                    </div>
                  </div>

                  <div className="bg-surface-container-high rounded p-4 mb-6 border-l-2 border-outline-variant/20">
                    <div className="h-3 w-24 rounded bg-surface-container-highest mb-3"></div>

                    <div className="h-8 w-32 rounded bg-surface-container-highest"></div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-outline-variant/20">
                    <div className="w-full h-12 rounded bg-surface-container-highest"></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-1 mb-10">
              <div className="hidden md:grid grid-cols-11 gap-4 px-6 py-3 bg-surface-container-highest rounded-t font-headline text-xs uppercase tracking-widest text-on-surface-variant items-center">
                <div className="col-span-2"></div>
                <div className="col-span-1 text-right bg-surface-container-highest h-4"></div>
                <div className="col-span-2 text-right bg-surface-container-highest h-4"></div>
                <div className="col-span-2 text-right bg-surface-container-highest h-4"></div>
                <div className="col-span-2 text-center bg-surface-container-highest h-4"></div>
                <div className="col-span-2 text-right bg-surface-container-highest h-4"></div>
              </div>

              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant animate-pulse items-center"
                >
                  <div className="col-span-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest"></div>

                    <div className="space-y-2">
                      <div className="h-4 w-28 rounded bg-surface-container-highest"></div>
                      <div className="h-3 w-20 rounded bg-surface-container-highest"></div>
                    </div>
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <div className="h-4 w-16 rounded bg-surface-container-highest"></div>
                  </div>

                  <div className="col-span-2 flex justify-end">
                    <div className="h-4 w-24 rounded bg-surface-container-highest"></div>
                  </div>

                  <div className="col-span-2 flex justify-end">
                    <div className="h-4 w-32 rounded bg-surface-container-highest"></div>
                  </div>

                  <div className="col-span-2 flex justify-center">
                    <div className="h-8 w-24 rounded-full bg-surface-container-highest"></div>
                  </div>

                  <div className="col-span-2 flex justify-end gap-2">
                    <div className="h-10 w-24 rounded-lg bg-surface-container-highest"></div>
                    <div className="h-10 w-24 rounded-lg bg-surface-container-highest"></div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {holdings.isSuccess && holdings.data.length > 0 && (
          <>
            <div className="md:flex block justify-between items-end my-8">
              <div>
                <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
                  Yield Tokens
                </h1>
                <p className="text-on-surface-variant text-sm mt-1 font-body">
                  ERC1155 Contract Balances &amp; Revenue Status
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-lg p-1 mb-10">
              <div className="hidden md:grid grid-cols-11 gap-4 px-6 py-3 bg-surface-container-highest rounded-t font-headline text-xs uppercase tracking-widest text-on-surface-variant items-center">
                <div className="col-span-2">Token Name</div>
                <div className="col-span-1 text-right">Balance</div>
                <div className="col-span-2 text-right">Claimable USD</div>
                <div className="col-span-2 text-right">Stop Time</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-2 text-right">Actions</div>
              </div>

              {holdings.data.map(({ tokenId, metadataUrl, contract, name }) => (
                <div className="flex flex-col gap-1 mt-1" key={tokenId}>
                  <HoldingItem
                    tokenId={tokenId}
                    metadataUrl={metadataUrl!}
                    contract={contract}
                    name={name!}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        {holdings.isSuccess && holdings.data.length === 0 && (
          <div className="mt-4 text-sm text-on-surface-variant text-center p-3">
            <p>You have no holdings yet</p>
          </div>
        )}
      </section>
    </>
  )
}
