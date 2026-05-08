import Arweave from 'arweave'
import { defineHandler } from 'nitro'
import { ArweaveSigner, TurboFactory } from '@ardrive/turbo-sdk'

export default defineHandler(async (event) => {
  const _body = await event.req.json()
  const arweave = Arweave.init({
    host: 'arweave.net',
    protocol: 'https',
    port: 443,
  })
  const key = await arweave.wallets.generate()
  const signer = new ArweaveSigner(key)
  const _turbo = TurboFactory.authenticated({ signer })
})
