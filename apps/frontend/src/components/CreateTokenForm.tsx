import type { BaseError } from 'viem'
import { Loader, Rocket, TriangleAlert } from 'lucide-react'
import { PreviewTRS } from './PreviewTRS'
import { formSchema } from '#/utils/schemas'
import { useForm } from '@tanstack/react-form'
import { m3terImageUrl } from '#/utils/constants.ts'
import { format, fromUnixTime, parse } from 'date-fns'
import { collections } from '#/config/opensea/collections'
import { useQuery } from '@tanstack/react-query'
import type { MintTokensParams, ModalState } from '#/utils/types'

import { useMemo, useState } from 'react'
import { trpc } from '#/config/trpc-client'

const address = '0xb2403f83C23748b26B06173db7527383482E8c5a'
interface CreateTokenFormProps {
  modalState: ModalState
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  mintTokens: ({
    supply,
    tokenId,
    stopTime,
    description,
    walletAddress,
  }: MintTokensParams) => Promise<
    | {
        status: 'error'
        error: string
      }
    | {
        status: 'success'
        txHash: `0x${string}`
      }
  >
}

export function CreateTokenForm({
  setIsModalOpen,
  setModalState,
  mintTokens,
}: CreateTokenFormProps) {
  const { data, error, isLoading, refetch, isError, isSuccess } = useQuery({
    queryKey: ['getNfts', address],
    queryFn: () =>
      trpc.opensea.getNFTByAccount.query({
        owner: address,
        collection: collections.meters,
      }),
  })

  const [selectedTokenId, setSelectedTokenId] = useState<bigint | undefined>(
    undefined,
  )

  const form = useForm({
    defaultValues: {
      description: '',
      supply: '',
      stopTime: '',
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      if (!selectedTokenId) return
      const parsed = formSchema.parse({ ...value, tokenId: selectedTokenId })
      setIsModalOpen(true)
      setModalState('minting')

      const result = await mintTokens({
        walletAddress: address,
        ...parsed,
      })

      if (result.status === 'success') {
        setModalState('success')
        await refetch()
        formApi.reset()
      } else {
        setModalState('error')
      }
    },
  })

  const onSelectNFT = (tokenId: bigint) => {
    if (selectedTokenId === tokenId) {
      setSelectedTokenId(undefined)
      return
    }
    setSelectedTokenId(tokenId)
  }

  const convertToLocaleDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US')
  }
  const stopTimeSeconds = (input?: string) => {
    if (!input) return
    const date = parse(input, "yyyy-MM-dd'T'HH:mm", new Date())

    // convert to UTC seconds
    return Math.floor(date.getTime() / 1000)
  }
  const stopTime = form.state.values.stopTime
  const tokenName = useMemo(() => {
    if (!stopTime) {
      return `TRS-#${selectedTokenId ? Number(selectedTokenId) : ''}`
    }

    const secs = stopTimeSeconds(stopTime)

    if (!secs) {
      return `TRS-#${selectedTokenId ? Number(selectedTokenId) : ''}`
    }

    return `TRS-#${selectedTokenId ? Number(selectedTokenId) : ''}-${format(
      secs * 1000,
      'yyyy-MM-dd',
    )}`
  }, [stopTime, selectedTokenId])

  const readableStopTime = useMemo(() => {
    const secs = stopTimeSeconds(stopTime)

    if (!secs) return undefined

    return format(fromUnixTime(secs), 'yyyy-MM-dd HH:mm:ss')
  }, [stopTime])

  const tokenId = useMemo(
    () => selectedTokenId?.toString() ?? null,
    [selectedTokenId],
  )
  const { data: metadata } = useQuery({
    queryKey: ['getTokenMetadata', tokenId],
    queryFn: async () => {
      const result = await trpc.opensea.getNftMetadata.query({
        chain: 'base',
        contractAddress: collections.nouns,
        tokenId: '0',
      })
      console.log('Result: ', result)
      return result
    },
    enabled: !!tokenId,
  })

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-12 gap-8"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <div className="lg:col-span-8 space-y-12">
        <section className="bg-surface-container-low p-6 rounded-lg ghost-border relative">
          <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-surface-container-high border border-outline flex items-center justify-center font-mono text-sm text-on-surface">
            1
          </div>
          <h2 className="font-headline text-xl text-on-surface mb-6 ml-4">
            Select M3TER NFT
          </h2>
          <div
            className="grid grid-cols-6 gap-1 md:grid-cols-8"
            role="group"
            aria-label="Select an NFT"
          >
            {isLoading && (
              <div className="col-span-full flex justify-center items-center">
                <p className="text-primary-container text-xs italic inline-flex items-center gap-1">
                  <span>Loading NFTs...</span>
                  <Loader size={14} className="animate-spin" />
                </p>
              </div>
            )}

            {isError && (
              <div className="col-span-full rounded-lg border border-error/20 bg-error-container/10 p-4 text-sm text-error">
                Error:
                {(error as BaseError).shortMessage || error.message}
              </div>
            )}

            {isSuccess && data.nfts.length === 0 && (
              <div className="col-span-full rounded-lg border border-outline-variant p-6 text-center text-on-surface-variant">
                You have no M3ters.
              </div>
            )}

            {isSuccess &&
              data.nfts.length > 0 &&
              data.nfts.map((nft) => (
                <div
                  key={nft.identifier}
                  onClick={() => onSelectNFT(BigInt(nft.identifier))}
                  className={`relative w-10 h-10 md:w-15 md:h-15 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 hover:scale-110 ${selectedTokenId === BigInt(nft.identifier) ? 'border-primary-container bg-primary-container/20' : 'border-transparent'}`}
                >
                  {selectedTokenId === BigInt(nft.identifier) && (
                    <div className="absolute inset-0 bg-primary-container/20 pointer-events-none" />
                  )}
                  <img
                    src={m3terImageUrl}
                    alt={nft.identifier}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
          </div>
        </section>

        <section className="bg-surface-container-high p-6 rounded-lg ghost-border relative shadow-[0_0_20px_rgba(0,255,65,0.05)]">
          <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-outline bg-surface-container-high font-mono text-sm text-on-surface">
            2
          </div>

          <h2 className="mb-8 ml-4 font-headline text-xl text-primary-container">
            Configure Token
          </h2>

          <div className="space-y-8">
            {/* Supply */}
            <form.Field name="supply">
              {(field) => (
                <div className="relative">
                  <label className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">
                    Total Supply (Integer)
                  </label>

                  <div className="flex items-end">
                    <input
                      type="number"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      placeholder="0"
                      className="input w-full rounded ps-1"
                    />

                    <span className="ml-3 border-b border-outline-variant pb-2 font-mono text-sm text-on-surface">
                      TRS
                    </span>
                  </div>

                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-2 text-sm text-red-400">
                      {field.state.meta.errors[0]?.message}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Stop Time */}
            <form.Field name="stopTime">
              {(field) => (
                <div className="relative">
                  <label className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">
                    Expiry Timestamp
                  </label>

                  <div className="flex items-center border-b border-outline-variant transition-all focus-within:border-primary-container focus-within:shadow-[0_4px_6px_-1px_rgba(0,255,65,0.08)]">
                    <input
                      type="datetime-local"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="scheme-dark w-full border-none bg-transparent px-0 pb-2 font-mono text-lg text-on-surface outline-none"
                    />
                  </div>

                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-2 text-sm text-red-400">
                      {field.state.meta.errors[0]?.message}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Description */}
            <form.Field name="description">
              {(field) => {
                const hasError = field.state.meta.errors.length > 0

                return (
                  <div
                    className={`rounded-lg border bg-surface-container-low p-4 transition-all ${
                      hasError
                        ? 'border-red-500 bg-red-500/5'
                        : 'border-outline/30 focus-within:border-primary-container'
                    }`}
                  >
                    <label
                      className={`mb-3 block font-mono text-[0.6875rem] uppercase tracking-widest ${
                        hasError ? 'text-red-400' : 'text-on-surface-variant'
                      }`}
                    >
                      Description
                    </label>

                    <textarea
                      rows={4}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      placeholder="Describe this revenue token..."
                      className="w-full resize-none bg-transparent font-mono text-sm text-on-surface outline-none"
                    />

                    {hasError && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-red-400">
                        <span className="material-symbols-outlined text-base">
                          error
                        </span>

                        <span>{field.state.meta.errors[0]?.message}</span>
                      </div>
                    )}
                  </div>
                )
              }}
            </form.Field>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4">
        <div className="sticky top-24">
          <form.Subscribe
            selector={(state) => ({
              values: state.values,
              canSubmit: state.canSubmit,
              isSubmitting: state.isSubmitting,
            })}
          >
            {({ values, canSubmit, isSubmitting }) => (
              <section className="relative rounded-lg bg-surface-container-low p-6 ghost-border">
                <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-outline bg-surface-container-high font-mono text-sm text-on-surface">
                  3
                </div>

                <h2 className="mb-6 ml-4 font-headline text-xl text-on-surface">
                  Review
                </h2>

                <div className="mb-8 space-y-4">
                  <PreviewTRS
                    name={tokenName}
                    meterId={selectedTokenId?.toString()}
                    readableStopTime={readableStopTime}
                    imageUrl={metadata?.image}
                  />

                  <div className="flex items-center justify-between border-b border-surface-variant pb-2">
                    <span className="font-mono text-xs uppercase text-on-surface-variant">
                      Asset
                    </span>

                    <span className="font-mono text-sm text-on-surface">
                      {selectedTokenId
                        ? `M3TER #${selectedTokenId}`
                        : 'No NFT selected'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-surface-variant pb-2">
                    <span className="font-mono text-xs uppercase text-on-surface-variant">
                      Supply
                    </span>

                    <span className="font-mono text-sm text-on-surface">
                      {values.supply} TRS
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-surface-variant pb-2">
                    <span className="font-mono text-xs uppercase text-on-surface-variant">
                      Expiry
                    </span>

                    <span className="font-mono text-sm text-secondary-container">
                      {values.stopTime
                        ? convertToLocaleDate(values.stopTime)
                        : ''}
                    </span>
                  </div>
                </div>

                {selectedTokenId && (
                  <div className="mb-8 border-l-2 border-secondary-container bg-secondary-container/10 p-4">
                    <div className="flex items-start gap-3">
                      <TriangleAlert
                        size={40}
                        className="text-secondary-container"
                      />

                      <p className="font-body text-sm text-secondary-fixed">
                        Depositing M3TER{' '}
                        <span className="font-mono">
                          {selectedTokenId.toString()}
                        </span>{' '}
                        locks it in the contract until expiry.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting || !form.state.isTouched}
                  className="flex w-full items-center justify-center gap-2 rounded bg-primary-container py-4 font-headline font-bold uppercase tracking-wider text-on-primary-container shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-colors hover:bg-primary-fixed disabled:cursor-not-allowed disabled:bg-primary-container/50"
                >
                  <Rocket size={18} />

                  <span>Create Token</span>

                  {isSubmitting && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-spin text-[14px]"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  )}
                </button>
              </section>
            )}
          </form.Subscribe>
        </div>
      </div>
    </form>
  )
}
