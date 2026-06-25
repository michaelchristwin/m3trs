import { zora } from 'viem/chains'
import { PrivyProvider } from '@privy-io/react-auth'

export default function Privy({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID}
      clientId={import.meta.env.VITE_PRIVY_CLIENT_ID}
      config={{
        defaultChain: zora,
        appearance: {
          accentColor: '#EF8977',
          theme: '#222224',
          showWalletLoginFirst: true,
          logo: 'https://auth.privy.io/logos/privy-logo-dark.png',
          walletChainType: 'ethereum-only',
          walletList: [
            'detected_ethereum_wallets',
            'metamask',
            'coinbase_wallet',
            'base_account',
            'rainbow',
            'wallet_connect',
          ],
        },
        supportedChains: [zora],
        loginMethods: ['wallet'],
        embeddedWallets: {
          showWalletUIs: true,
          ethereum: {
            createOnLogin: 'off',
          },
        },
        mfa: {
          noPromptOnMfaRequired: false,
        },
        externalWallets: {},
      }}
    >
      {children}
    </PrivyProvider>
  )
}
