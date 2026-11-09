export function ListingSkeleton() {
  return (
    <div className="relative bg-surface-container-low rounded p-4">
      {/* MOBILE */}
      <div className="flex gap-4 md:hidden animate-pulse">
        {/* image */}
        <div className="w-20 h-30 rounded bg-surface-container-high shrink-0" />

        <div className="min-w-0 flex-1 space-y-3">
          {/* title */}
          <div className="h-4 w-3/4 bg-surface-container-high rounded" />

          {/* accrued */}
          <div className="h-3 w-1/2 bg-surface-container-high rounded" />

          {/* stop */}
          <div className="h-3 w-2/3 bg-surface-container-high rounded" />

          {/* supply */}
          <div className="h-3 w-3/5 bg-surface-container-high rounded" />

          {/* price */}
          <div className="h-3 w-1/2 bg-surface-container-high rounded" />

          {/* button */}
          <div className="mt-2 h-8 w-full bg-surface-container-high rounded-[30px]" />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid md:grid-cols-13 md:gap-4 md:items-center animate-pulse">
        {/* name */}
        <div className="md:col-span-3 flex items-center gap-2">
          <div className="w-6 h-6 bg-surface-container-high rounded" />
          <div className="h-4 w-2/3 bg-surface-container-high rounded" />
        </div>

        {/* accrued */}
        <div className="md:col-span-2 flex justify-center">
          <div className="h-4 w-1/2 bg-surface-container-high rounded" />
        </div>

        {/* stop time */}
        <div className="md:col-span-2 flex justify-end">
          <div className="h-4 w-2/3 bg-surface-container-high rounded" />
        </div>

        {/* supply */}
        <div className="md:col-span-2 flex justify-end">
          <div className="h-4 w-1/2 bg-surface-container-high rounded" />
        </div>

        {/* price */}
        <div className="md:col-span-2 flex justify-end">
          <div className="h-4 w-1/2 bg-surface-container-high rounded" />
        </div>

        {/* button */}
        <div className="md:col-span-2 flex justify-end">
          <div className="h-8 w-24 bg-surface-container-high rounded-[30px]" />
        </div>
      </div>
    </div>
  )
}
