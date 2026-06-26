// Make sure to import `createConfig` from `@privy-io/wagmi`, not `wagmi`
import { createConfig } from '@privy-io/wagmi'
import { zora } from 'viem/chains'
import { http } from 'viem'

export const wagmiConfig = createConfig({
  chains: [zora], // Pass your required chains as an array
  transports: {
    [zora.id]: http(),
  },
})
