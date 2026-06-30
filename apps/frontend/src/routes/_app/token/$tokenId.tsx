import type { Address } from 'viem'
import { formatDistanceToNow } from 'date-fns'
import { useForm } from '@tanstack/react-form'
import { useQuery } from '@tanstack/react-query'
import { TRS } from '#/config/smart-contracts/TRS/TRS'
import { wagmiConfig } from '#/integrations/wagmi/config'
import { AccrueButton } from '#/components/buttons/AccrueButton'
import { Image, Brackets, ArrowLeft, Wallet } from 'lucide-react'
import { CollectButton } from '#/components/buttons/CollectButton'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { checksumAddress } from 'viem'
import {
  writeContract,
  readContracts,
  waitForTransactionReceipt,
} from '@wagmi/core'
import { transferFormSchema } from '#/utils/schemas'
import { trpc } from '#/config/trpc-client'
import { decodeBase62 } from '#/utils/base62-parser'
import { usePrivy } from '@privy-io/react-auth'

const address = '0xb2403f83C23748b26B06173db7527383482E8c5a'

export const Route = createFileRoute('/_app/token/$tokenId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { tokenId } = Route.useParams()
  const parsedTokenId = decodeBase62(tokenId)
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.history.back()
    }
  }
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['getData', parsedTokenId.toString()],
    queryFn: async () => {
      const result = await readContracts(wagmiConfig, {
        contracts: [
          {
            ...TRS,
            functionName: 'token',
            args: [parsedTokenId],
          },
          {
            ...TRS,
            functionName: 'accRevenuePerToken',
            args: [parsedTokenId],
          },
          {
            ...TRS,
            functionName: 'revenue',
            args: [checksumAddress(address), parsedTokenId],
          },
          {
            ...TRS,
            functionName: 'balanceOf',
            args: [checksumAddress(address), parsedTokenId],
          },
        ],
      })
      const metadata = await trpc.opensea.getNftMetadata.query({
        contractAddress: TRS.address,
        tokenId: parsedTokenId.toString(),
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
      if (result[3].error) {
        throw result[3].error
      }
      return {
        token: result[0].result,
        accRevenuePerToken:
          Number(result[1].result * result[0].result[1]) / 1e18,
        revenue: Number(result[1].result),
        ...metadata,
        isOwner: result[3].result > 0n,
        balance: Number(result[3].result),
      }
    },
    enabled: !!parsedTokenId.toString(),
  })

  const form = useForm({
    defaultValues: {
      amount: '',
      recipientAddress: '',
    },
    validators: { onChange: transferFormSchema },
    onSubmit: async ({ value }) => {
      const parsed = transferFormSchema.parse(value)

      const hash = await writeContract(wagmiConfig, {
        ...TRS,
        functionName: 'safeTransferFrom',
        args: [
          address as Address,
          parsed.recipientAddress,
          parsedTokenId,
          parsed.amount,
          '0x',
        ],
      })
      await waitForTransactionReceipt(wagmiConfig, { hash })
    },
  })

  const { authenticated } = usePrivy()
  return (
    <div className="h-full mt-10 mb-30">
      <title>Portfolio | M3trs</title>
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

        {isSuccess && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline font-bold text-3xl md:text-5xl text-on-surface tracking-tight">
                <span className="font-mono text-primary">{data.name}</span>
              </h1>
              <p className="font-mono text-sm text-on-surface/50 mt-2 tracking-widest uppercase">
                Contract Details &amp; Revenue Hub
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-4">
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

        {isSuccess && (
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
              {isSuccess && (
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
                {isSuccess && (
                  <>
                    <div>
                      <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1">
                        Balance
                      </label>
                      <div className="font-mono text-3xl text-on-surface">
                        {data.balance}
                      </div>
                    </div>
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
                        Expires in{' '}
                        {formatDistanceToNow(
                          new Date(Number(data.token[3]) * 1000),
                        )}
                      </div>
                    </div>
                  </>
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
                {isSuccess && (
                  <div className="font-mono text-[3.5rem] leading-none text-on-surface font-light tracking-tight mb-2">
                    ${data.accRevenuePerToken.toFixed(2)}
                  </div>
                )}
                <div className="flex items-center gap-2 text-primary mt-2">
                  <AccrueButton
                    innerText="Accrue Revenue"
                    tokenId={parsedTokenId}
                    className="flex-1 bg-transparent border-primary/30 border text-primary font-headline font-bold text-sm py-3 px-4 rounded hover:bg-primary/5 transition-all"
                  />
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
                {isSuccess && (
                  <div className="font-mono text-3xl text-primary mb-6">
                    ${data.revenue.toFixed(2)}
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-3">
                  {isSuccess && data.isOwner && authenticated ? (
                    <CollectButton
                      innerText="Collect Revenue"
                      tokenId={parsedTokenId}
                      className="flex-1 bg-primary-container text-on-primary-container font-headline font-bold text-sm py-3 px-4 rounded hover:brightness-110 transition-all glow-primary glass-gradient-primary"
                    />
                  ) : (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://opensea.io/item/zora/${TRS.address}/${parsedTokenId}`}
                      className="flex-1 text-center bg-primary-container text-on-primary-container font-headline font-bold text-sm py-3 px-4 rounded hover:brightness-110 transition-all glow-primary glass-gradient-primary"
                    >
                      Buy on OpenSea
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSuccess && authenticated && data.isOwner && (
        <div className="bg-surface-container-low rounded-lg ghost-border-outline overflow-hidden mt-30 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="bg-surface-container-highest px-6 py-4 flex items-center justify-between">
            <h3 className="font-headline font-bold text-on-surface text-sm uppercase tracking-wider flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width={18}
                height={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21 7.5L8 7.5M21 7.5L16.6667 3M21 7.5L16.6667 12"
                    stroke="#e5e2e1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4 16.5L17 16.5M4 16.5L8.33333 21M4 16.5L8.33333 12"
                    stroke="#e5e2e1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              Transfer Operations
            </h3>
          </div>
          <div className="p-6 md:p-8">
            <form
              className="flex flex-col md:flex-row gap-6 items-end"
              onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
              }}
            >
              <div className="flex-1 w-full">
                <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-2">
                  Recipient Address
                </label>
                <div className="relative">
                  <Wallet size={18} />
                  <form.Field
                    name="recipientAddress"
                    children={(field) => {
                      return (
                        <input
                          className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-mono text-sm focus:ring-0 focus:border-primary focus:shadow-[0_1px_0_0_rgba(0,255,65,1)] transition-all pl-8 pb-2 pt-2 placeholder:text-on-surface/20"
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      )
                    }}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <label className="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-2">
                  Amount
                </label>
                <form.Field
                  name="amount"
                  children={(field) => {
                    return (
                      <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-mono text-sm focus:ring-0 focus:border-primary focus:shadow-[0_1px_0_0_rgba(0,255,65,1)] transition-all pb-2 pt-2 placeholder:text-on-surface/20 text-right"
                        placeholder="0.00"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    )
                  }}
                />
              </div>
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full md:w-auto bg-transparent ghost-border-primary text-primary font-headline font-bold text-sm py-2.5 px-8 rounded hover:bg-primary/5 transition-all whitespace-nowrap self-stretch md:self-auto mb-1"
                  >
                    {isSubmitting ? '...' : 'Execute Transfer'}
                  </button>
                )}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
