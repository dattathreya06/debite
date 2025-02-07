"use client"

import * as React from "react"
import Link from "next/link"
import { MainNavItem } from "@/types/navigation"
import { siteConfig } from "@/types/navigation"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { gsap } from "gsap"

interface MobileNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items = siteConfig.mainNav, children }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (isOpen && menuRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          menuRef.current,
          { x: "100%" },
          { x: 0, duration: 0.3, ease: "power2.out" }
        )

        gsap.fromTo(
          ".mobile-nav-item",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
        )
      }, menuRef)

      return () => ctx.revert()
    }
  }, [isOpen])

  return (
    <div className="flex md:hidden">
      <button
        className="flex items-center space-x-2 text-white hover:text-gold-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>
      {isOpen && (
        <div 
          ref={menuRef}
          className="fixed inset-0 top-16 z-50 bg-royal_blue_traditional-900 pb-20 shadow-xl overflow-y-auto border-t border-gold-700/20"
        >
          <div className="flow-root">
            <div className="divide-y divide-gold-900/10">
              {items?.map((item, i) => (
                <div key={i} className="py-6 mobile-nav-item px-4">
                  <Link
                    href={item.href}
                    className="text-base font-medium text-white hover:text-mikado_yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.sections && (
                    <div className="mt-4 ml-4 space-y-4">
                      {item.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="text-sm font-medium text-gold-400">
                            {section.title}
                          </h3>
                          <ul className="mt-2 space-y-2">
                            {section.items.map((subItem, subItemIndex) => (
                              <li key={subItemIndex}>
                                <Link
                                  href={subItem.href}
                                  className="text-sm text-white hover:text-mikado_yellow-400 block py-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}