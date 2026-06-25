import { WagmiProvider } from '@privy-io/wagmi'
import { wagmiConfig } from './config'

export function Wagmi({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
}
