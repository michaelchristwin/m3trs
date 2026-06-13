<script lang="ts" setup>
import { ref } from "vue";
import {
  Telescope,
  SquarePlus,
  Archive,
  Scroll,
  FileText,
  CircleQuestionMark,
} from "@lucide/vue";

const collapsed = ref(false);

const sidebarActiveClass =
  "opacity-80 text-primary-container border-primary-container border-r-4 bg-[#00FF41]/10";
</script>

<template>
  <aside
    :class="[
      'hidden md:flex fixed left-0 top-16 h-[calc(100vh-64px)] border-r border-[#00FF41]/10 bg-[#131313] flex-col justify-between py-4 z-40 transition-all duration-300',
      collapsed ? 'w-16' : 'w-64',
    ]"
  >
    <nav class="flex-1 font-['Space_Grotesk'] font-medium text-sm">
      <RouterLink
        :active-class="sidebarActiveClass"
        :class="[
          'flex items-center px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200',
          collapsed ? 'justify-center gap-0' : 'gap-3',
        ]"
        to="/discover"
      >
        <Telescope :size="20" class="shrink-0" />
        <span v-if="!collapsed">Discover</span>
      </RouterLink>

      <RouterLink
        :active-class="sidebarActiveClass"
        :class="[
          'flex items-center px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200',
          collapsed ? 'justify-center gap-0' : 'gap-3',
        ]"
        to="/create-token"
      >
        <SquarePlus :size="20" class="shrink-0" />
        <span v-if="!collapsed">Create</span>
      </RouterLink>

      <RouterLink
        :active-class="sidebarActiveClass"
        :class="[
          'flex items-center px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200',
          collapsed ? 'justify-center gap-0' : 'gap-3',
        ]"
        to="/holdings"
      >
        <Archive :size="20" class="shrink-0" />
        <span v-if="!collapsed">My Holdings</span>
      </RouterLink>

      <RouterLink
        :active-class="sidebarActiveClass"
        :class="[
          'flex items-center px-4 py-3 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200',
          collapsed ? 'justify-center gap-0' : 'gap-3',
        ]"
        to="/bonds"
      >
        <Scroll :size="20" class="shrink-0" />
        <span v-if="!collapsed">My Bonds</span>
      </RouterLink>
    </nav>

    <div
      :class="[
        'font-[\'Space_Grotesk\'] font-medium text-sm border-t border-surface-variant pt-4 space-y-1',
        collapsed ? 'px-2' : 'px-4',
      ]"
    >
      <a
        :class="[
          'flex items-center py-2 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200 rounded',
          collapsed ? 'justify-center px-2' : 'gap-3 px-4',
        ]"
        href="#"
      >
        <FileText :size="20" class="shrink-0" />
        <span v-if="!collapsed">Docs</span>
      </a>

      <a
        :class="[
          'flex items-center py-2 text-[#e5e2e1]/50 hover:text-[#e5e2e1] hover:bg-neutral-800 transition-all duration-200 rounded',
          collapsed ? 'justify-center px-2' : 'gap-3 px-4',
        ]"
        href="#"
      >
        <CircleQuestionMark :size="20" class="shrink-0" />
        <span v-if="!collapsed">Support</span>
      </a>

      <!-- Toggle button -->
      <button
        :class="[
          'flex items-center w-full py-2 text-[#e5e2e1]/30 hover:text-[#00FF41]/60 hover:bg-neutral-800 transition-all duration-200 rounded mt-2',
          collapsed ? 'justify-center px-2' : 'gap-3 px-4',
        ]"
        :title="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        @click="collapsed = !collapsed"
      >
        <span class="material-symbols-outlined text-[18px] shrink-0">
          {{ collapsed ? "chevron_right" : "chevron_left" }}
        </span>
        <span v-if="!collapsed" class="text-xs">Collapse</span>
      </button>
    </div>
  </aside>
</template>
