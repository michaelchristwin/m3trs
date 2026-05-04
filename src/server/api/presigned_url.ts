import { defineHandler } from 'nitro'
import { useRuntimeConfig } from 'nitro/runtime-config'
import { PinataSDK } from 'pinata'

export default defineHandler(async () => {
  const JWT = useRuntimeConfig().pinataJwt
  const GATEWAY_URL = useRuntimeConfig().pinataGatewayUrl
  const pinata = new PinataSDK({
    pinataJwt: JWT,
    pinataGateway: GATEWAY_URL,
  })
  const url = await pinata.upload.public.createSignedURL({
    expires: 60, // Last for 60 seconds
  })
  return { url: url }
})
