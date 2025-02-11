"use client"

import * as React from "react"
import Link from "next/link"
import { MainNavItem } from "@/types/navigation"
import { siteConfig } from "@/types/navigation"
import { Menu } from "lucide-react"
import { gsap } from "gsap"

interface MobileNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items = siteConfig.mainNav, children }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const overlayRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  React.useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return

    if (isOpen) {
      const ctx = gsap.context(() => {
        // Animate overlay
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.2, ease: "power2.out" }
        )

        // Animate menu
        gsap.fromTo(
          menuRef.current,
          { x: "100%" },
          { x: 0, duration: 0.3, ease: "power2.out" }
        )

        // Animate menu items
        gsap.fromTo(
          ".mobile-nav-item",
          { opacity: 0, x: 20 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.4, 
            stagger: 0.05, 
            ease: "power2.out",
            clearProps: "all" 
          }
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
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            ref={overlayRef}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <div 
            ref={menuRef}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-dark shadow-xl border-l border-dark-dark"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button container */}
            <div className="sticky top-0 z-20 flex h-16 items-center justify-between bg-dark-dark px-4 backdrop-blur supports-[backdrop-filter]:bg-royal_blue_traditional-900/75">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Menu content */}
            <div className="h-[calc(100vh-4rem)] overflow-y-auto pb-20">
              <div className="divide-y divide-dark-dark">
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
                            <h3 className="text-sm font-medium font-mono uppercase text-primary">
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
        </>
      )}
    </div>
  )
}