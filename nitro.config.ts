import { defineConfig } from 'nitro'

export default defineConfig({
  serverDir: './src/server',
  compatibilityDate: '2026-05-04',
  preset: 'cloudflare_module',
  cloudflare: {
    deployConfig: true,
    nodeCompat: true,
  },
  runtimeConfig: {
    pinataApiKey: '',
    pinataApiSecret: '',
    pinataJwt: '',
    pinataGatewayUrl: '',
  },
})
