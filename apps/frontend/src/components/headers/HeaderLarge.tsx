import { usePrivy } from '@privy-io/react-auth'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Bell, Settings } from 'lucide-react'

export function HeaderLarge() {
  const { user } = usePrivy()
  return (
    <header className="hidden w-full md:flex justify-between items-center h-16 bg-[#131313] backdrop-blur-md">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
      </div>
      <div className="flex items-center gap-6 font-headline uppercase tracking-wider text-xs">
        <div className="flex items-center gap-4 border-l border-surface-variant pl-4">
          <button className="text-[#e5e2e1]/60 hover:text-[#00FF41] transition-colors relative flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-high">
            <Bell size={20} />
          </button>
          <button className="text-[#e5e2e1]/60 hover:text-[#00FF41] transition-colors relative flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-high">
            <Settings size={20} />
          </button>
          <button className="flex cursor-pointer items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded box-glow border border-primary/20">
            <div className="w-2 h-2 rounded-[9999px] bg-primary-container shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>
            <span className="font-mono-data text-[#00FF41] text-xs">
              {user?.wallet?.address.slice(0, 4)}...
              {user?.wallet?.address.slice(-4)}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
