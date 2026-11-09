import type { RouterClient } from '@orpc/server'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { router } from '@m3trs/api/router'

const link = new RPCLink({
  origin: import.meta.env.VITE_BACKEND_URL,
  url: '/rpc', // <- must match the server's prefix
})

export const orpc: RouterClient<typeof router> = createORPCClient(link)
