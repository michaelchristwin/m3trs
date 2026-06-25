import { usePrivy } from '@privy-io/react-auth'
import { Link } from '@tanstack/react-router'

export function HeaderMobile() {
  const { user } = usePrivy()
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex md:hidden items-center justify-between px-4 h-16 bg-[#131313] shadow-[0_0_15px_rgba(0,255,65,0.05)] rounded-none mb-1 transition-all duration-300">
      <Link
        to="/discover"
        className="font-['Space_Grotesk'] font-bold tracking-tighter text-[#00FF41] text-xl"
      >
        M3TRS
      </Link>

      <div className="space-x-2 flex items-center">
        <button className="text-neutral-500 hover:bg-[#00FF41]/10 transition-all duration-300 active:scale-95 w-10 h-10 flex items-center justify-center rounded-full">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="flex cursor-pointer items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded box-glow border border-primary/20">
          <div className="w-2 h-2 rounded-[9999px] bg-primary-container shadow-[0_0_8px_rgba(0,255,65,0.8)]"></div>
          <span className="font-mono-data text-[#00FF41] text-xs">
            {user?.wallet?.address.slice(0, 4)}...
            {user?.wallet?.address.slice(-4)}
          </span>
        </button>
      </div>
    </header>
  )
}
