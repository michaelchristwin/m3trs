<script lang="ts" setup>
const sidebarActiveClass =
  "opacity-80 text-primary-container border-primary-container border-r-4 bg-[#00FF41]/10";
</script>

<template>
  <aside
    class="hidden md:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-[#00FF41]/10 bg-[#131313] flex-col justify-between py-4 z-40"
  >
    <nav class="flex-1 font-['Space_Grotesk'] font-medium text-sm">
      <RouterLink
        :active-class="sidebarActiveClass"
        class="flex items-center gap-3 px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1 hover:bg-neutral-800 transition-all duration-200"
        to="/overview"
      >
        <span class="material-symbols-outlined text-[20px]">dashboard</span>
        Overview
      </RouterLink>
      <RouterLink
        :active-class="sidebarActiveClass"
        class="flex items-center gap-3 px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200"
        :to="{
          name: 'create token',
        }"
      >
        <span class="material-symbols-outlined text-[20px]">add_box</span>
        Create
      </RouterLink>
      <RouterLink
        :active-class="sidebarActiveClass"
        class="flex items-center gap-3 px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200"
        :to="{
          name: 'holdings',
        }"
      >
        <span class="material-symbols-outlined text-[20px]">inventory_2</span>
        My Holdings
      </RouterLink>
      <RouterLink
        :active-class="sidebarActiveClass"
        class="flex items-center gap-3 px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200"
        :to="{
          name: 'bonds',
        }"
      >
        <span class="material-symbols-outlined text-[20px]"
          >confirmation_number</span
        >
        My Bonds
      </RouterLink>
    </nav>

    <div
      class="px-4 font-['Space_Grotesk'] font-medium text-sm border-t border-surface-variant pt-4 space-y-1"
    >
      <a
        class="flex items-center gap-3 px-4 py-2 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200 rounded"
        href="#"
      >
        <span class="material-symbols-outlined text-[18px]">description</span>
        Docs
      </a>
      <a
        class="flex items-center gap-3 px-4 py-2 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200 rounded"
        href="#"
      >
        <span class="material-symbols-outlined text-[18px]">help_outline</span>
        Support
      </a>
    </div>
  </aside>
</template>
