<script setup lang="ts">
import {
  Telescope,
  FileText,
  CircleQuestionMark,
  Blocks,
  FolderOpenDot,
} from "@lucide/vue";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigation = [
  {
    title: "Discover",
    url: "/discover",
    icon: Telescope,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: FolderOpenDot,
  },
  {
    title: "Tokenize",
    url: "/tokenize",
    icon: Blocks,
  },
];

const footerLinks = [
  {
    title: "Docs",
    href: "#",
    icon: FileText,
  },
  {
    title: "Support",
    href: "#",
    icon: CircleQuestionMark,
  },
];

const sidebarActiveClass =
  "border-r-4 border-primary-container bg-[#00FF41]/10 text-primary-container opacity-80";
</script>

<template>
  <Sidebar
    collapsible="icon"
    class="top-16 h-[calc(100vh-64px)] border-r border-[#00FF41]/10 bg-[#131313]"
  >
    <!-- <SidebarHeader>
      <RouterLink
        to="/discover"
        class="text-2xl font-black text-[#00FF41] tracking-tighter font-headline uppercase"
      >
        M3TRS
      </RouterLink>
    </SidebarHeader> -->
    <SidebarContent class="justify-between">
      <!-- Main Navigation -->
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in navigation" :key="item.title">
              <SidebarMenuButton
                as-child
                class="h-12 rounded-none px-4 font-['Space_Grotesk'] text-sm font-medium text-[#e5e2e1]/50 transition-all duration-200 hover:bg-neutral-800 hover:text-[#e5e2e1] data-[active=true]:bg-[#00FF41]/10 data-[active=true]:text-primary-container"
              >
                <RouterLink :to="item.url" :active-class="sidebarActiveClass">
                  <component :is="item.icon" :size="20" class="shrink-0" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <!-- Footer -->
      <SidebarFooter class="border-t border-surface-variant pt-4">
        <SidebarMenu>
          <SidebarMenuItem v-for="item in footerLinks" :key="item.title">
            <SidebarMenuButton
              as-child
              class="h-11 px-4 font-['Space_Grotesk'] text-sm font-medium text-[#e5e2e1]/50 transition-all duration-200 hover:bg-neutral-800 hover:text-[#e5e2e1]"
            >
              <a :href="item.href" target="_blank" rel="noopener noreferrer">
                <component :is="item.icon" :size="20" />
                <span>{{ item.title }}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarContent>
  </Sidebar>
</template>
