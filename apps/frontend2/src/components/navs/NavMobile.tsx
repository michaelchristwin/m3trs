import { Link } from '@tanstack/react-router'
import { Telescope, Blocks, FolderOpenDot } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const routes: { name: string; path: string; icon: LucideIcon }[] = [
  { name: 'Discover', path: '/discover', icon: Telescope },
  { name: 'Portfolio', path: '/portfolio', icon: FolderOpenDot },

  { name: 'Tokenize', path: '/tokenize', icon: Blocks },
]

export function NavMobile() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex md:hidden justify-around items-center h-20 px-2 bg-[#131313] pb-safe border-t border-[#00FF41]/10">
      {routes.map((route, i) => (
        <Link
          key={i}
          active-class="text-primary-container bg-[#00FF41]/15 rounded-[9999px] px-5 py-1.5"
          to={route.path}
          className="flex flex-col items-center justify-center text-neutral-500 hover:text-[#00FF41] transition-colors duration-200 min-w-16"
        >
          <route.icon size={20} className="mb-1" />
          <span className="font-['Space_Grotesk'] text-[10px] uppercase font-medium">
            {route.name}
          </span>
        </Link>
      ))}
    </nav>
  )
}
