// Make sure to import `createConfig` from `@privy-io/wagmi`, not `wagmi`
import { createConfig } from '@privy-io/wagmi'
import { zora } from 'viem/chains'
import { http } from 'viem'
import { createConfig as createNewConfig } from 'wagmi'

export const wagmiConfig = createConfig({
  chains: [zora], // Pass your required chains as an array
  transports: {
    [zora.id]: http(),
  },
})

export const wagmiNewConfig = createNewConfig({
  chains: [zora], // Pass your required chains as an array
  transports: {
    [zora.id]: http(),
  },
})
