<template>
  <nav
    class="fixed bottom-0 left-0 w-full z-50 flex md:hidden justify-around items-center h-20 px-2 bg-[#131313] pb-safe border-t border-[#00FF41]/10"
  >
    <RouterLink
      active-class="text-primary-container bg-[#00FF41]/15 rounded-[9999px] px-5 py-1.5"
      :to="{
        name: 'overview',
      }"
      class="flex flex-col items-center justify-center text-neutral-500 hover:text-[#00FF41] transition-colors duration-200 min-w-16"
    >
      <span class="material-symbols-outlined mb-1">grid_view</span>
      <span class="font-['Space_Grotesk'] text-[10px] uppercase font-medium"
        >Overview</span
      >
    </RouterLink>
    <!-- Create (Inactive) -->
    <RouterLink
      active-class="text-primary-container bg-[#00FF41]/15 rounded-[9999px] px-5 py-1.5"
      :to="{
        name: 'create token',
      }"
      class="flex flex-col items-center justify-center text-neutral-500 hover:text-[#00FF41] transition-colors duration-200 min-w-16"
    >
      <span class="material-symbols-outlined mb-1">add_box</span>
      <span class="font-['Space_Grotesk'] text-[10px] uppercase font-medium"
        >Create</span
      >
    </RouterLink>
    <!-- Holdings (Inactive) -->
    <RouterLink
      active-class="text-primary-container bg-[#00FF41]/15 rounded-[9999px] px-5 py-1.5"
      :to="{
        name: 'holdings',
      }"
      class="flex flex-col items-center justify-center text-neutral-500 hover:text-[#00FF41] transition-colors duration-200 min-w-16"
    >
      <span class="material-symbols-outlined mb-1">account_balance_wallet</span>
      <span class="font-['Space_Grotesk'] text-[10px] uppercase font-medium"
        >Holdings</span
      >
    </RouterLink>
    <!-- Bonds (Active) -->
    <RouterLink
      :to="{
        name: 'bonds',
      }"
      active-class="text-primary-container bg-[#00FF41]/15 rounded-[9999px] px-5 py-1.5"
      class="flex flex-col items-center justify-center text-neutral-500 hover:text-[#00FF41] transition-colors duration-200 min-w-16"
    >
      <span
        class="material-symbols-outlined mb-0.5"
        style="font-variation-settings: &quot;FILL&quot; 1"
        >layers</span
      >
      <span class="font-['Space_Grotesk'] text-[10px] uppercase font-bold"
        >Bonds</span
      >
    </RouterLink>
  </nav>
</template>
