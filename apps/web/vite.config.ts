import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { VitePWA } from 'vite-plugin-pwa'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    viteReact(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        id: 'M3trs',
        name: 'M3trs',
        short_name: 'M3trs',
        description: 'Buy, sell and manage infrafi yields',
        theme_color: '#72ff70',
        background_color: '#131313',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/maskable_icon_x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },

      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/m3trs\.m3ter\.ing/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      },
    }),
  ],
})

export default config
