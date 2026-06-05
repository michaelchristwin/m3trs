<template>
  <div
    class="hidden md:grid grid-cols-13 gap-4 px-6 py-4 border-b border-outline-variant animate-pulse items-center"
  >
    <!-- Token Name-->
    <div class="col-span-3 flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-surface-container-highest"></div>

      <div class="space-y-2">
        <div class="h-4 w-28 rounded bg-surface-container-highest"></div>
        <div class="h-3 w-20 rounded bg-surface-container-highest"></div>
      </div>
    </div>
    <!-- Total Accrued -->
    <div class="col-span-2 flex justify-center">
      <div class="h-4 w-24 rounded bg-surface-container-highest"></div>
    </div>
    <!-- Stop Time -->
    <div class="col-span-2 flex justify-end">
      <div class="h-4 w-32 rounded bg-surface-container-highest"></div>
    </div>
    <!-- Supply -->
    <div class="col-span-2 flex justify-end">
      <div class="h-4 w-16 rounded bg-surface-container-highest"></div>
    </div>
    <!-- Price -->
    <div class="col-span-2 flex justify-end">
      <div class="h-8 w-24 rounded-full bg-surface-container-highest"></div>
    </div>

    <!-- Actions -->
    <div class="col-span-2 flex justify-end gap-2">
      <div class="h-10 w-24 rounded-lg bg-surface-container-highest"></div>
    </div>
  </div>
</template>
