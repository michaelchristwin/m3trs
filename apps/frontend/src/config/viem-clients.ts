import { useAppKitProvider } from '@reown/appkit/vue'
import type { Provider } from '@reown/appkit/vue'
import { createPublicClient, http, createWalletClient, custom, type Chain } from 'viem'
import { VIEM_CHAIN } from './wagmi'

const { walletProvider } = useAppKitProvider<Provider>('eip155')

const publicClient = createPublicClient({
  chain: VIEM_CHAIN as Chain,
  transport: http(),
})

const walletClient = createWalletClient({
  chain: VIEM_CHAIN as Chain,
  transport: custom(walletProvider!),
})
const [account] = await walletClient.getAddresses()

export { publicClient, walletClient, account }
