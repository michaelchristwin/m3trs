<script setup lang="ts">
import { useAppKit } from '@reown/appkit/vue'
import { useConnection } from '@wagmi/vue'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
const { open } = useAppKit()
const { isConnected } = useConnection()
const router = useRouter()

const launchApp = () => {
  if (isConnected.value) {
    return router.push({ name: 'dashboard' })
  }

  open()

  const stop = watch(isConnected, (connected) => {
    if (connected) {
      stop()
      router.push({ name: 'dashboard' })
    }
  })
}
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-background/80 backdrop-blur-md border-b border-surface-container-high transition-colors"
  >
    <div
      class="text-2xl font-black text-primary-container tracking-tighter font-headline uppercase"
    >
      M3TRS
    </div>
    <div class="flex items-center gap-6">
      <a
        class="font-label text-sm text-on-surface/70 hover:text-primary-container transition-colors tracking-wide uppercase hidden md:block"
        href="#features"
        >Architecture</a
      >
      <a
        class="font-label text-sm text-on-surface/70 hover:text-primary-container transition-colors tracking-wide uppercase hidden md:block"
        href="#"
        >Docs</a
      >
      <button
        @click="launchApp"
        class="bg-primary-container text-on-primary-container px-6 py-2 rounded font-label text-sm font-bold tracking-wider hover:bg-primary transition-colors glow-primary"
      >
        LAUNCH APP
      </button>
    </div>
  </nav>
  <!-- Main Content -->
  <main class="grow pt-24">
    <!-- Hero Section -->
    <section
      class="relative min-h-204.75 flex flex-col justify-center items-center px-6 text-center overflow-hidden"
    >
      <!-- Background Elements -->
      <div
        class="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-surface-container-high via-background to-background"
      ></div>
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px] z-0"
      ></div>
      <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary-container mb-4"
        >
          <span class="material-symbols-outlined text-[14px]">sensors</span>
          <span>PROTOCOL_V2_ACTIVE</span>
        </div>
        <h1
          class="font-headline font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-on-surface uppercase leading-[0.9]"
        >
          M3TRS Revenue <br class="hidden md:block" />
          <span class="text-primary-container">Interface</span>
        </h1>
        <p class="font-body text-lg md:text-xl text-on-surface/70 max-w-2xl leading-relaxed">
          M3TRS lets energy asset owners tokenize revenue streams, create on-chain bonds, and manage
          holdings — all powered by decentralized metering infrastructure.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <button
            @click="launchApp"
            class="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold text-lg rounded tracking-wider uppercase glow-primary glow-primary-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Launch App
            <span class="material-symbols-outlined">rocket_launch</span>
          </button>
          <button
            class="w-full sm:w-auto px-8 py-4 bg-transparent border border-outline-variant text-primary-container font-headline font-bold text-lg rounded tracking-wider uppercase hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Documentation
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <!-- Technical Micro-Data -->
        <div
          class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl border-t border-surface-container-high pt-8"
        >
          <div class="flex flex-col items-center gap-1">
            <span class="font-label text-xs text-on-surface/50 tracking-widest uppercase"
              >Total Value Locked</span
            >
            <span class="font-mono text-xl text-on-surface font-bold">$24.5M</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <span class="font-label text-xs text-on-surface/50 tracking-widest uppercase"
              >Active Nodes</span
            >
            <span class="font-mono text-xl text-on-surface font-bold">1,204</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <span class="font-label text-xs text-on-surface/50 tracking-widest uppercase"
              >Network Uptime</span
            >
            <span class="font-mono text-xl text-primary-container font-bold">99.99%</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <span class="font-label text-xs text-on-surface/50 tracking-widest uppercase"
              >Block Time</span
            >
            <span class="font-mono text-xl text-on-surface font-bold">2.1s</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Features Bento Grid -->
    <section class="py-24 px-6 bg-surface-container-lowest" id="features">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col items-start gap-4 mb-16">
          <h2 class="font-headline text-3xl md:text-5xl font-bold uppercase tracking-tight">
            System Architecture
          </h2>
          <p class="font-body text-on-surface/60 max-w-xl">
            Core operational modules for interacting with decentralized energy revenue streams.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          <!-- Feature 1: Dashboard (Large) -->
          <div
            class="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-lg p-8 relative overflow-hidden group border border-outline-variant/10 hover:border-primary-container/30 transition-colors duration-500"
          >
            <div
              class="absolute inset-0 bg-linear-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div class="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div
                  class="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-outline-variant/20"
                >
                  <span
                    class="material-symbols-outlined text-primary-container text-2xl"
                    style="font-variation-settings: 'FILL' 1"
                    >dashboard</span
                  >
                </div>
                <h3 class="font-headline text-2xl font-bold uppercase mb-4">Dashboard</h3>
                <p class="font-body text-on-surface/70 leading-relaxed max-w-md">
                  Aggregated telemetry and financial metrics. Monitor total yield, active bonds, and
                  real-time metering data across all verified nodes in a high-density, centralized
                  view.
                </p>
              </div>
              <!-- Mock UI Element -->
              <div
                class="mt-8 bg-surface p-4 rounded border border-surface-container-high flex flex-col gap-3"
              >
                <div
                  class="flex justify-between items-center pb-2 border-b border-surface-container-highest"
                >
                  <span class="font-label text-xs text-on-surface/50 uppercase"
                    >Network Hashrate</span
                  >
                  <span class="font-mono text-primary-container text-sm">ACTIVE</span>
                </div>
                <div class="h-2 w-full bg-surface-container-high rounded overflow-hidden">
                  <div class="h-full bg-primary-container w-[78%] relative">
                    <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Feature 2: Create Token -->
          <div
            class="bg-surface-container-low rounded-lg p-8 relative overflow-hidden group border border-outline-variant/10 hover:border-primary-container/30 transition-colors duration-500"
          >
            <div class="relative z-10">
              <div
                class="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-outline-variant/20"
              >
                <span
                  class="material-symbols-outlined text-primary-container text-2xl"
                  style="font-variation-settings: 'FILL' 1"
                  >add_box</span
                >
              </div>
              <h3 class="font-headline text-xl font-bold uppercase mb-3">Create Token</h3>
              <p class="font-body text-sm text-on-surface/70 leading-relaxed">
                Initialize new revenue streams. Bind physical metering hardware to smart contracts
                to mint asset-backed energy tokens.
              </p>
            </div>
          </div>
          <!-- Feature 3: Token Detail -->
          <div
            class="bg-surface-container-low rounded-lg p-8 relative overflow-hidden group border border-outline-variant/10 hover:border-primary-container/30 transition-colors duration-500"
          >
            <div class="relative z-10">
              <div
                class="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-outline-variant/20"
              >
                <span
                  class="material-symbols-outlined text-secondary-container text-2xl"
                  style="font-variation-settings: 'FILL' 1"
                  >data_object</span
                >
              </div>
              <h3 class="font-headline text-xl font-bold uppercase mb-3">Token Detail</h3>
              <p class="font-body text-sm text-on-surface/70 leading-relaxed">
                Granular asset inspection. View lifecycle data, historical yield, and immutable
                contract parameters for individual tokens.
              </p>
            </div>
          </div>
          <!-- Feature 4: My Holdings -->
          <div
            class="md:col-span-2 bg-surface-container-low rounded-lg p-8 relative overflow-hidden group border border-outline-variant/10 hover:border-primary-container/30 transition-colors duration-500 flex flex-col md:flex-row gap-8 items-center"
          >
            <div class="flex-1 relative z-10">
              <div
                class="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-outline-variant/20"
              >
                <span
                  class="material-symbols-outlined text-primary-container text-2xl"
                  style="font-variation-settings: 'FILL' 1"
                  >inventory_2</span
                >
              </div>
              <h3 class="font-headline text-xl font-bold uppercase mb-3">My Holdings</h3>
              <p class="font-body text-sm text-on-surface/70 leading-relaxed">
                Manage your portfolio of tokenized energy assets. Track accumulative value, claim
                rewards, and execute transfers within a secure environment.
              </p>
            </div>
            <div
              class="w-full md:w-1/3 flex flex-col gap-2 font-mono text-xs text-on-surface/50 border border-surface-container-high p-4 rounded bg-surface"
            >
              <div class="flex justify-between">
                <span>ASSET_01</span><span class="text-on-surface">1,402 kWh</span>
              </div>
              <div class="flex justify-between">
                <span>ASSET_02</span><span class="text-on-surface">890 kWh</span>
              </div>
              <div class="flex justify-between border-t border-surface-container-highest pt-2 mt-1">
                <span>TOTAL</span><span class="text-primary-container font-bold">2,292 kWh</span>
              </div>
            </div>
          </div>
          <!-- Feature 5: My Bonds -->
          <div
            class="bg-surface-container-low rounded-lg p-8 relative overflow-hidden group border border-outline-variant/10 hover:border-primary-container/30 transition-colors duration-500"
          >
            <div class="relative z-10">
              <div
                class="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center mb-6 border border-outline-variant/20"
              >
                <span
                  class="material-symbols-outlined text-secondary-container text-2xl"
                  style="font-variation-settings: 'FILL' 1"
                  >confirmation_number</span
                >
              </div>
              <h3 class="font-headline text-xl font-bold uppercase mb-3">My Bonds</h3>
              <p class="font-body text-sm text-on-surface/70 leading-relaxed">
                Access fixed-yield financial instruments derived from underlying energy assets.
                Monitor maturity dates and accrued interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- Footer -->
  <footer
    class="py-12 px-6 border-t border-surface-container-high bg-background flex flex-col items-center gap-8"
  >
    <!-- Trust Badge -->
    <div class="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
      <span class="material-symbols-outlined text-3xl">bolt</span>
      <span class="font-label text-xs uppercase tracking-[0.2em] text-on-surface"
        >Powered by the M3tering Protocol</span
      >
    </div>
    <div
      class="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-on-surface/40 pt-8 border-t border-surface-container-high/50"
    >
      <p>© 2024 M3TRS Interface. All rights reserved.</p>
      <div class="flex gap-6">
        <a class="hover:text-primary-container transition-colors" href="#">SYS_STATUS</a>
        <a class="hover:text-primary-container transition-colors" href="#">TERMS</a>
        <a class="hover:text-primary-container transition-colors" href="#">PRIVACY</a>
      </div>
    </div>
  </footer>
</template>
