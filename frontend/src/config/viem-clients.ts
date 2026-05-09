import { useAppKitProvider } from '@reown/appkit/vue'
import type { Provider } from '@reown/appkit/vue'
import { createPublicClient, http, createWalletClient, custom } from 'viem'
import { sepolia } from 'viem/chains'

const { walletProvider } = useAppKitProvider<Provider>('eip155')

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
})

const walletClient = createWalletClient({
  chain: sepolia,
  transport: custom(walletProvider!),
})
const [account] = await walletClient.getAddresses()

export { publicClient, walletClient, account }
