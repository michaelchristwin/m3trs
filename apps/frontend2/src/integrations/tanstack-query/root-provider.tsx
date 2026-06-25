import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '#/components/ui/tooltip'
import Privy from '../privy'
import { Wagmi } from '../wagmi'

export default function TanstackQueryProvider({
  children,
}: {
  children: ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <Privy>
      <QueryClientProvider client={queryClient}>
        <Wagmi>
          <TooltipProvider>{children}</TooltipProvider>
        </Wagmi>
      </QueryClientProvider>
    </Privy>
  )
}
