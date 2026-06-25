import { HeaderLarge } from '#/components/headers/HeaderLarge'
import { NavMobile } from '#/components/navs/NavMobile'
import { NotConnected } from '#/components/NotConnected'
import { Sidebar } from '#/components/Sidebar'
import { usePrivy } from '@privy-io/react-auth'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ready, authenticated } = usePrivy()
  if (!ready)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-primary-container italic">Loading...</p>
      </div>
    )
  if (authenticated)
    return (
      <div className="relative">
        <NavMobile />
        <Sidebar>
          <HeaderLarge />
          <Outlet />
        </Sidebar>
      </div>
    )
  else return <NotConnected />
}
