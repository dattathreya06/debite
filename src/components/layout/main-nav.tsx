"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { MainNavItem } from "@/types/navigation"
import { siteConfig } from "@/types/navigation"
import { cn } from "@/lib/utils"
import { MegaMenu } from "@/components/layout/mega-menu"
import { useHoverWordAnimation } from "@/app/anim/word-anim"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

interface NavButtonProps {
  item: MainNavItem
  openMenu: string | null
  onButtonClick: (title: string) => void
  segment: string | null
}

const NavButton = ({ item, openMenu, onButtonClick, segment }: NavButtonProps) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  useHoverWordAnimation(buttonRef)

  return (
    <button
      ref={buttonRef}
      onClick={(e) => {
        e.stopPropagation()
        onButtonClick(item.title)
      }}
      className={cn(
        "flex items-center space-x-1 text-base font-medium transition-colors hover:text-gold-400",
        item.href.startsWith(`/${segment}`) 
          ? "text-mikado_yellow-400" 
          : "text-white"
      )}
    >
      <span>{item.title}</span>
      {item.sections && (
        <ChevronDown 
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            openMenu === item.title && "rotate-180"
          )} 
        />
      )}
    </button>
  )
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const navItems = items || siteConfig.mainNav
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMenuClick = (title: string) => {
    setOpenMenu(openMenu === title ? null : title)
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden text-xl font-bold text-white hover:text-gold-400 transition-colors sm:inline-block">
          Debite
        </span>
      </Link>
      <nav className="hidden gap-8 md:flex">
        {navItems?.map((item, index) => (
          <div key={index} className="nav-item relative">
            <NavButton 
              item={item}
              openMenu={openMenu}
              onButtonClick={handleMenuClick}
              segment={segment}
            />
            {!isMobile && item.sections && openMenu === item.title && (
              <MegaMenu 
                sections={item.sections} 
                onClose={() => setOpenMenu(null)}
              />
            )}
          </div>
        ))}
      </nav>
      {children}
    </div>
  )
}