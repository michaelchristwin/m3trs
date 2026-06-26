// Make sure to import `createConfig` from `@privy-io/wagmi`, not `wagmi`
import { createConfig } from '@privy-io/wagmi'
import { zora } from 'viem/chains'
import { http } from 'viem'

export const MAIN_CHAIN = zora
export const wagmiConfig = createConfig({
  chains: [MAIN_CHAIN], // Pass your required chains as an array
  transports: {
    [MAIN_CHAIN.id]: http(),
  },
})
