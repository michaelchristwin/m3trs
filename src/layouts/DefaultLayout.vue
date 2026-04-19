<script lang="ts" setup>
const links = [
  { path: '/', slug: 'Dashboard' },
  { path: '/create-token', slug: 'Create' },
  { path: '/holdings', slug: 'My Holdings' },
  { path: '/my-bonds', slug: 'My Bonds' },
] as const

const sidebarActiveClass =
  'opacity-80 text-primary-container border-primary-container border-r-4 bg-[#00FF41]/10'
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#131313] backdrop-blur-md"
  >
    <div class="flex items-center gap-4">
      <RouterLink
        to="/"
        class="text-2xl font-black text-[#00FF41] tracking-tighter font-headline uppercase"
      >
        M3TRS
      </RouterLink>
    </div>
    <div class="flex items-center gap-6 font-headline uppercase tracking-wider text-xs">
      <div class="hidden md:flex items-center gap-6" v-for="link in links" :key="link.slug">
        <RouterLink
          active-class="text-primary-container font-bold"
          exact-active-class="text-primary-container font-bold"
          :to="link.path"
          class="text-[#e5e2e1]/60 hover:bg-[#00FF41]/10 hover:text-[#00FF41] transition-colors px-3 py-2 rounded scale-95 active:duration-100"
        >
          {{ link.slug }}
        </RouterLink>
      </div>
      <div class="flex items-center gap-4 border-l border-surface-variant pl-4">
        <button
          class="text-[#e5e2e1]/60 hover:text-[#00FF41] transition-colors relative flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-high"
        >
          <span class="material-symbols-outlined text-[20px]">notifications</span>
        </button>
        <button
          class="text-[#e5e2e1]/60 hover:text-[#00FF41] transition-colors relative flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-high"
        >
          <span class="material-symbols-outlined text-[20px]">settings</span>
        </button>
        <div
          class="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded box-glow border border-primary/20"
        >
          <div
            class="w-2 h-2 rounded-[9999px] bg-primary-container shadow-[0_0_8px_rgba(0,255,65,0.8)]"
          ></div>
          <span class="font-mono-data text-[#00FF41] text-xs">0x71C...4eD1</span>
        </div>
      </div>
    </div>
  </header>
  <aside
    class="hidden md:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-[#00FF41]/10 bg-[#131313] flex-col justify-between py-4 z-40"
  >
    <div class="px-4 mb-8">
      <div
        class="flex items-center gap-3 p-3 bg-surface-container-low rounded border border-surface-variant"
      >
        <div class="w-10 h-10 rounded bg-surface-variant overflow-hidden">
          <img
            alt="Abstract user avatar pattern in dark neon colors"
            class="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            data-alt="Abstract generative art in dark charcoal and neon green, suitable for a technical profile avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBELnh6CFNtlfyzENKxH92rOPNHAigrLvrcAoqujzsqdoCHO18wm0_2Z6GKNlLyRihFFWqVF-FBlvPOewuXmC2hB9RJuUzWda4UBp0Im_DjwA_KDGZHzddS-uiAOCu3jBDm-9O1ePQcRP3jNigTzYjMm8bvoNeMQEhTB6J5FEhbNaSwKS3WcqjiZAuBAmBuGulwLfR3tHQRwuyVaYCPAuOz6QQcx5LXAU3bvTUbv5fgCT9qsIA5_SL-Ybl_Yw5TvxKGh5Kn377F42wS"
          />
        </div>
        <div>
          <div class="font-mono-data text-sm text-on-surface">OPERATOR_01</div>
          <div class="font-label-caps text-on-surface-variant flex items-center gap-1">
            <span class="material-symbols-outlined text-[12px] text-primary-container"
              >check_circle</span
            >
            Verified Node
          </div>
        </div>
      </div>
    </div>
    <nav class="flex-1 font-['Space_Grotesk'] font-medium text-sm">
      <RouterLink
        :active-class="sidebarActiveClass"
        :exact-active-class="sidebarActiveClass"
        class="flex items-center gap-3 px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1 hover:bg-neutral-800 transition-all duration-200"
        to="/"
      >
        <span class="material-symbols-outlined text-[20px]">dashboard</span>
        Dashboard
      </RouterLink>
      <RouterLink
        :active-class="sidebarActiveClass"
        :exact-active-class="sidebarActiveClass"
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
        :exact-active-class="sidebarActiveClass"
        class="flex items-center gap-3 px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200"
        :to="{
          name: 'my holdings',
        }"
      >
        <span class="material-symbols-outlined text-[20px]">inventory_2</span>
        My Holdings
      </RouterLink>
      <RouterLink
        :active-class="sidebarActiveClass"
        :exact-active-class="sidebarActiveClass"
        class="flex items-center gap-3 px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200"
        to="/my-bonds"
      >
        <span class="material-symbols-outlined text-[20px]">confirmation_number</span>
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
  <main class="pt-24 pb-12 px-6 md:pl-72 flex-1 relative overflow-hidden">
    <slot />
  </main>
</template>
