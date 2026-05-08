import Arweave from 'arweave'
import { defineHandler } from 'nitro'
import { ArweaveSigner, TurboFactory } from '@ardrive/turbo-sdk'

export default defineHandler(async (event) => {
  const body = await event.req.json()
  const arweave = Arweave.init({
    host: 'arweave.net',
    protocol: 'https',
    port: 443,
  })
  const key = await arweave.wallets.generate()
  const signer = new ArweaveSigner(key)
  const turbo = TurboFactory.authenticated({ signer })
  const result = await turbo.upload({
    data: JSON.stringify(body),
    dataItemOpts: {
      tags: [{ name: 'Content-Type', value: 'application/json' }],
    },
  })
  return `https://arweave.net/${result.id}`
})
