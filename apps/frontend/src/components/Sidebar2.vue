<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import { SidebarProvider } from "@/components/ui/sidebar";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="px-6 flex-1 relative overflow-hidden">
      <slot />
    </main>
  </SidebarProvider>
</template>
