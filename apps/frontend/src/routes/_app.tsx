import { HeaderLarge } from '#/components/headers/HeaderLarge'
import { NavMobile } from '#/components/navs/NavMobile'
import { Sidebar } from '#/components/Sidebar'
import { usePrivy } from '@privy-io/react-auth'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Toaster } from '#/components/ui/sonner'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ready } = usePrivy()
  if (!ready)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-primary-container italic">Loading...</p>
      </div>
    )
  else
    return (
      <div className="relative">
        <NavMobile />
        <Sidebar>
          <HeaderLarge />
          <Toaster position="top-center" />
          <Outlet />
        </Sidebar>
      </div>
    )
}
