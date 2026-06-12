<template>
  <main
    class="flex-grow flex items-center justify-center relative z-10 px-4 pt-16 pb-12 w-full max-w-4xl mx-auto"
  >
    <!-- Centered Layout Container -->
    <div
      class="flex flex-col items-center text-center space-y-12 w-full relative"
    >
      <!-- Ambient Glow Behind Card -->
      <div class="ambient-glow"></div>
      <!-- Central Visual Area (Revenue Position Card) -->
      <div
        class="relative z-10 w-full max-w-md transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0 cursor-default"
      >
        <!-- Using placeholder for the requested TRS Revenue Position card -->
        <div
          class="rounded-xl overflow-hidden shadow-2xl relative shadow-[0_0_40px_rgba(0,255,65,0.1)] border border-surface-container-high/50"
        >
          <img
            alt="M3TRS Revenue Position Card Visual"
            class="w-full h-auto object-cover block bg-surface-container-low min-h-[400px]"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvkiEXJ9a_2sVrLu3jfR1_Z1R3U2b7hV2iwLjvBNca1PQtACCWJxpYwRoHsT5x_GASIEKZGSWAK5klYTruAhi1x0y2XnSZ1radBroKOc1muMIc3gfc3nP9F8m54JuSf-oi4Sk1HC2gkDlY9uHIPmKy1HFakUKfndwh05HPdgPY9kyNaYnAj-gfOy32Rw8LNBJuZj8TIEoIwuUe9wsGGr-UPXVqBg1GuSH8c3lxm1lLU9ZniJ-eCdvLLS1mv"
          />
          <!-- Fallback content if image fails or loading (Industrial aesthetic) -->
          <div
            class="absolute inset-0 flex flex-col justify-between p-6 bg-surface-container-lowest/80 backdrop-blur-sm -z-10 border border-outline-variant/30 rounded-xl"
          >
            <div
              class="text-left font-mono-tech text-outline text-xs tracking-widest opacity-50 uppercase"
            >
              Visualizing Asset Logic
            </div>
            <div
              class="text-center font-display text-surface-variant text-4xl opacity-10 font-black tracking-tighter"
            >
              M3TRS
            </div>
            <div
              class="text-right font-mono-tech text-outline text-[10px] opacity-30"
            >
              SYS_WAITING_AUTH
            </div>
          </div>
        </div>
        <!-- Decorative Technical Anchors -->
        <div
          class="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary-container opacity-40"
        ></div>
        <div
          class="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary-container opacity-40"
        ></div>
      </div>
      <!-- Content Area -->
      <div class="flex flex-col items-center space-y-6 max-w-xl relative z-10">
        <h1
          class="font-headline text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-wide leading-tight"
        >
          Please connect your wallet to continue
        </h1>
        <p
          class="font-body text-base md:text-lg text-on-surface-variant max-w-md"
        >
          Access your energy revenue dashboard, manage holdings, and issue bonds
          on the M3tering Protocol.
        </p>
        <!-- Primary CTA Button -->
        <div class="pt-4 w-full sm:w-auto">
          <button
            class="w-full sm:w-auto bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest px-10 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-primary-fixed transition-colors duration-300 relative group overflow-hidden"
          >
            <!-- Technical Micro-Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
            <span
              class="material-symbols-outlined text-[20px] relative z-10"
              data-icon="account_balance_wallet"
              data-weight="fill"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >account_balance_wallet</span
            >
            <span class="relative z-10 text-sm md:text-base"
              >CONNECT WALLET</span
            >
          </button>
        </div>
        <!-- Technical Micro-Data Footer (Grid Logic) -->
        <div
          class="pt-8 flex items-center gap-4 text-[0.6875rem] font-mono-tech text-outline opacity-60 uppercase tracking-widest"
        >
          <span>Protocol v2.1.4</span>
          <span class="w-1 h-1 bg-outline rounded-full"></span>
          <span>Status: Disconnected</span>
        </div>
      </div>
    </div>
  </main>
</template>
