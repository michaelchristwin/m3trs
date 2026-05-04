import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { sepolia, type AppKitNetwork } from '@reown/appkit/networks'

const projectId = import.meta.env.VITE_PROJECT_ID || ''

const metadata = {
  name: 'M3trs',
  description: 'M3trs dev',
  url: 'https://m3trs.pages.dev',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

// 3. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [sepolia]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
})

export { wagmiAdapter, metadata, networks, projectId }
