import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { zora, type AppKitNetwork } from '@reown/appkit/networks'

const projectId = import.meta.env.VITE_PROJECT_ID as string
export const VIEM_CHAIN = zora

const metadata = {
  name: 'M3trs',
  description: 'M3trs dev',
  url: 'https://m3trs.kelechukwuchristwin.workers.dev',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

// 3. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [VIEM_CHAIN]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
})

export { wagmiAdapter, metadata, networks, projectId }

declare module '@wagmi/vue' {
  interface Register {
    config: typeof wagmiAdapter.wagmiConfig
  }
}
