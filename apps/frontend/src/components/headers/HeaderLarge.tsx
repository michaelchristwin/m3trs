import { usePrivy } from '@privy-io/react-auth'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Bell, Copy, Settings, Wallet } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { toast } from 'sonner'

export function HeaderLarge() {
  const { user, logout, authenticated, login } = usePrivy()
  function copyToClipboard(text: string | undefined) {
    if (!text) return
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Copied!')
        toast.info('Address copied.', { style: { width: '180px' } })
      })
      .catch((err) => {
        console.error('Failed to copy:', err)
      })
  }
  return (
    <header className="hidden w-full md:flex justify-between items-center h-16 bg-[#131313] backdrop-blur-md">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <a
          href={import.meta.env.VITE_LANDING_PAGE}
          rel="external"
          className="font-['Space_Grotesk'] font-bold tracking-tighter text-[#00FF41] md:text-xl text-[18px]"
        >
          M3TRS
        </a>
      </div>
      <div className="flex items-center gap-6 font-headline uppercase tracking-wider text-xs">
        <div className="flex items-center gap-4 border-l border-surface-variant pl-4">
          <button className="text-[#e5e2e1]/60 hover:text-[#00FF41] transition-colors relative flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-high">
            <Bell size={20} />
          </button>
          <button className="text-[#e5e2e1]/60 hover:text-[#00FF41] transition-colors relative flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-high">
            <Settings size={20} />
          </button>
          {authenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex cursor-pointer items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded box-glow border border-primary/20">
                  <div className="w-2 h-2 rounded-[9999px] bg-primary-container shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>
                  <span className="font-mono-data text-[#00FF41] text-xs">
                    {user?.wallet?.address.slice(0, 5)}...
                    {user?.wallet?.address.slice(-5)}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <div
                      className="flex justify-around items-center hover:bg-transparent focus:bg-transparent cursor-pointer"
                      onClick={() => copyToClipboard(user?.wallet?.address)}
                    >
                      <span className="font-mono-data text-[#00FF41] text-xs">
                        {user?.wallet?.address.slice(0, 4)}...
                        {user?.wallet?.address.slice(-4)}
                      </span>
                      <button type="button" className="text-primary-container">
                        <Copy size={17} />
                      </button>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="p-2">
                  <DropdownMenuItem asChild>
                    <Button
                      variant={'destructive'}
                      className="mx-auto w-[99%]"
                      onClick={logout}
                    >
                      Sign Out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {!authenticated && (
            <button
              type="button"
              className="text-primary-container flex justify-around items-center space-x-1 border-[0.5px] border-primary-fixed/50 p-3 active:scale-95 hover:scale-105 hover:text-primary-container/80"
              onClick={login}
            >
              <span>CONNECT WALLET</span>
              <Wallet size={15} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
