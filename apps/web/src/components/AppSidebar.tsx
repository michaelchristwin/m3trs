import {
  Telescope,
  FileText,
  CircleQuestionMark,
  Blocks,
  FolderOpenDot,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '#/components/ui/sidebar'

import { Link } from '@tanstack/react-router'

const navigation = [
  {
    title: 'Discover',
    url: '/discover',
    icon: Telescope,
  },
  {
    title: 'Portfolio',
    url: '/portfolio',
    icon: FolderOpenDot,
  },
  {
    title: 'Tokenize',
    url: '/tokenize',
    icon: Blocks,
  },
]

const footerLinks = [
  {
    title: 'Docs',
    href: '#',
    icon: FileText,
  },
  {
    title: 'Support',
    href: '#',
    icon: CircleQuestionMark,
  },
]
const sidebarActiveClass =
  'border-r-4 border-primary-container bg-[#00FF41]/10 text-primary-container opacity-80'

export function AppSidebar() {
  return (
    <>
      <Sidebar
        collapsible="icon"
        className="top-16 h-[calc(100vh-64px)] border-r border-[#00FF41]/10 bg-[#131313]"
      >
        <SidebarContent className="justify-between">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="h-12 rounded-none px-4 font-['Space_Grotesk'] text-sm font-medium text-[#e5e2e1]/50 transition-all duration-200 hover:bg-neutral-800 hover:text-[#e5e2e1] data-[active=true]:bg-[#00FF41]/10 data-[active=true]:text-primary-container"
                    >
                      <Link
                        to={item.url}
                        activeProps={{
                          className: sidebarActiveClass,
                        }}
                      >
                        <item.icon size={20} className="shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarFooter className="border-t border-surface-variant pt-4">
            <SidebarMenu>
              {footerLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-11 px-4 font-['Space_Grotesk'] text-sm font-medium text-[#e5e2e1]/50 transition-all duration-200 hover:bg-neutral-800 hover:text-[#e5e2e1]"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
    </>
  )
}
