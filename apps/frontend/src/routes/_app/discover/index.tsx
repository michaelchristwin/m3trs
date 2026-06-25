import { ListingItem } from '#/components/ListingItem'
import { ListingSkeleton } from '#/components/ListingSkeleton'
import { collections } from '#/config/opensea/collections'
import { trpc } from '#/config/trpc-client'
import { ListingStatusEnum } from '@m3trs/opensea-sdk'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/_app/discover/')({
  component: RouteComponent,
})

function RouteComponent() {
  const address = '0xb2403f83C23748b26B06173db7527383482E8c5a'

  const {
    data: listings,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['getBestListingsCollection', address, collections.holdings],
    queryFn: async () => {
      const result = await trpc.opensea.getBestListingsCollection.query({
        slug: collections.holdings.toLowerCase(),
        limit: 20,
      })
      const filteredResult = result.listings.filter(
        (l) =>
          l.status !== ListingStatusEnum.Cancelled &&
          l.status !== ListingStatusEnum.Expired &&
          l.status !== ListingStatusEnum.Inactive &&
          l.status !== ListingStatusEnum.Fulfilled,
      )
      return filteredResult
    },
  })
  const targetSection = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  let observer: IntersectionObserver | null = null
  useEffect(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
      },
    )

    if (targetSection.current) {
      observer.observe(targetSection.current)
    }
    return () => {
      observer?.disconnect()
    }
  }, [])
  function scrollToSection() {
    targetSection.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  return (
    <>
      <title>Discover | M3trs</title>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-[-1]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #00ff41 1px, transparent 1px), linear-gradient(to bottom, #00ff41 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div ref={targetSection}>
        <div className="md:flex block justify-between items-end mb-8">
          <div>
            <h1 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
              MTRS Marketplace
            </h1>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-lg p-1">
          <div className="hidden md:grid grid-cols-13 gap-4 px-6 py-3 bg-surface-container-highest rounded-t font-headline text-xs uppercase tracking-widest text-on-surface-variant items-center">
            <div className="col-span-3">Token Name</div>
            <div className="col-span-2 text-center">Total Accrued</div>
            <div className="col-span-2 text-right">Stop Time</div>
            <div className="col-span-2 text-right">Supply</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>
          {isLoading && [1, 2, 3, 4, 5].map((i) => <ListingSkeleton key={i} />)}
          <div
            className="flex flex-col gap-1 mt-1"
            v-else-if="listings && listings.length > 0"
          >
            {isSuccess &&
              listings.map((listing) => (
                <ListingItem key={listing.orderHash} listing={listing} />
              ))}
          </div>

          {isSuccess && listings.length == 0 && (
            <div className="mt-4 text-sm text-on-surface-variant text-center p-3">
              <p>There are no listings yet</p>
            </div>
          )}
        </div>
      </div>
      {!isVisible && (
        <button
          onClick={scrollToSection}
          className="fixed right-6 bottom-19 flex justify-center items-center bg-primary-container w-12 h-12 rounded-[100%] text-neutral-800 animate-bounce shadow-lg transition hover:scale-105"
        >
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
            className="lucide lucide-chevron-down-icon lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      )}
    </>
  )
}
