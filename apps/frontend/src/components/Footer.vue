<script setup lang="ts">
import {
  Coingecko,
  Coinmarketcap,
  Etherscan,
  Opensea,
  Reserve,
} from "@/assets/brands";
import { MyToken } from "@/config/smart-contracts/MyToken/MyToken";
import { TRS } from "@/config/smart-contracts/TRS/TRS";

const docs = [
  {
    href: "https://m3tering.whynotswitch.com/token-economics/mint-and-distribution",
    text: "Mint & Distribution",
  },
  {
    href: "https://m3tering.whynotswitch.com/smart-contracts/audits/secure3-audit-contest",
    text: "Audit",
  },
];

const sourceCodes = [
  {
    label: "TRS code repository",
    href: "https://gist.github.com/iChristwin/7bb1723265cabb358c68a8af0d45692f",
  },
  {
    label: "M3ter code repository",
    href: "https://github.com",
  },
];

const contractAddresses = [
  {
    label: "TRS",
    contractAddress: TRS.address,
    links: [
      { href: "https://www.coingecko.com/", src: Coingecko, alt: "Coingecko" },
      {
        href: "https://coinmarketcap.com/",
        src: Coinmarketcap,
        alt: "Coinmarketcap",
      },
      { href: "https://etherscan.io/", src: Etherscan, alt: "Etherscan" },
    ],
  },
  {
    label: "M3ter",
    contractAddress: MyToken.address,
    links: [
      { href: "https://opensea.io/", src: Opensea, alt: "Opensea" },
      { href: "https://etherscan.io/", src: Etherscan, alt: "Etherscan" },
    ],
  },
  {
    label: "USD3",
    contractAddress: "0x0d86883faf4ffd7aeb116390af37746f45b6f378",
    links: [
      {
        href: "https://app.reserve.org/ethereum/token/0x0d86883faf4ffd7aeb116390af37746f45b6f378/issuance",
        src: Reserve,
        alt: "Reserve",
      },
    ],
  },
];

const linkSections = [
  {
    title: "Docs",
    links: docs.map((doc) => ({
      label: doc.text,
      href: doc.href,
    })),
  },
  {
    title: "Code",
    links: sourceCodes.map((code) => ({
      label: code.label,
      href: code.href,
    })),
  },
];
</script>

<template>
  <footer
    class="py-12 px-6 border-t border-surface-container-high bg-background flex flex-col items-center gap-8"
  >
    <!-- Trust Badge -->
    <div
      class="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
    >
      <span class="material-symbols-outlined text-3xl">bolt</span>
      <span
        class="font-label text-xs uppercase tracking-[0.2em] text-on-surface"
        >Powered by the M3tering Protocol</span
      >
    </div>
    <div class="grid gap-10 lg:grid-cols-[1fr_auto] w-full mt-10">
      <!-- Left -->
      <div class="grid gap-8 sm:grid-cols-2">
        <section
          v-for="section in linkSections"
          :key="section.title"
          class="min-w-0"
        >
          <h3
            class="mb-5 text-lg font-semibold tracking-wide text-primary-container md:text-xl"
          >
            {{ section.title }}
          </h3>

          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.href">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm text-on-surface/70 transition-colors hover:text-on-surface"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </section>
      </div>

      <!-- Right -->
      <section class="max-w-xl">
        <h3
          class="mb-5 text-lg font-semibold tracking-wide text-primary-container md:text-xl"
        >
          Smart Contracts
        </h3>

        <div class="space-y-4">
          <div
            v-for="contract in contractAddresses"
            :key="contract.contractAddress"
            class="rounded-lg border border-outline/20 bg-surface-container-low p-4"
          >
            <div
              class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div class="min-w-0">
                <p class="font-semibold text-on-surface">
                  {{ contract.label }}
                </p>

                <code
                  class="mt-1 block overflow-hidden text-ellipsis whitespace-nowrap font-mono text-xs text-on-surface/70 md:text-sm"
                >
                  {{ contract.contractAddress }}
                </code>
              </div>

              <div class="flex items-center gap-2 shrink-0">
                <a
                  v-for="link in contract.links"
                  :key="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition-transform hover:scale-110"
                >
                  <img
                    :src="link.src"
                    :alt="link.alt"
                    class="h-6 w-6 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div
      class="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-on-surface/40 pt-8 border-t border-surface-container-high/50"
    >
      <p>© 2026 M3TRS Interface. All rights reserved.</p>
      <div class="flex gap-6">
        <a class="hover:text-primary-container transition-colors" href="#"
          >TERMS</a
        >
        <a class="hover:text-primary-container transition-colors" href="#"
          >PRIVACY</a
        >
      </div>
    </div>
  </footer>
</template>
