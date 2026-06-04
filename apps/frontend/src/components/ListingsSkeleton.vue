<template>
  <div class="bg-surface-container-low rounded-xl p-4 animate-pulse">
    <!-- Header -->
    <div class="flex gap-3">
      <!-- Portrait image -->
      <div class="w-16 h-20 rounded-md bg-surface-container-highest shrink-0" />

      <div class="flex-1 space-y-2">
        <!-- Name -->
        <div class="h-4 w-40 rounded bg-surface-container-highest" />

        <!-- Supply -->
        <div class="h-3 w-20 rounded bg-surface-container-highest" />
      </div>

      <!-- Desktop button -->
      <div
        class="hidden md:block h-9 w-20 rounded-full bg-surface-container-highest"
      />
    </div>

    <!-- Metrics -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div class="space-y-2">
        <div class="h-3 w-14 rounded bg-surface-container-highest" />
        <div class="h-4 w-20 rounded bg-surface-container-highest" />
      </div>

      <div class="space-y-2">
        <div class="h-3 w-16 rounded bg-surface-container-highest" />
        <div class="h-4 w-24 rounded bg-surface-container-highest" />
      </div>

      <div class="space-y-2">
        <div class="h-3 w-12 rounded bg-surface-container-highest" />
        <div class="h-4 w-16 rounded bg-surface-container-highest" />
      </div>
    </div>

    <!-- Mobile button -->
    <div
      class="md:hidden mt-4 h-10 rounded-full bg-surface-container-highest"
    />
  </div>
</template>
