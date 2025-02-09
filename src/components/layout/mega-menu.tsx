"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ChevronRight, ExternalLink } from "lucide-react"
import { NavSection } from "@/types/navigation"

interface MegaMenuProps {
  sections: NavSection[]
  onClose: () => void
}

export default function MegaMenu({ sections, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      )

      gsap.fromTo(
        ".menu-section",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      )
    }, menuRef)

    // Handle clicks outside the menu
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    // Add event listeners
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      ctx.revert()
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  // Stop propagation for clicks inside the menu to prevent immediate closing
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 top-16 z-50 bg-dark border-t border-gold-700/20"
      onClick={handleMenuClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="mx-auto h-full max-w-7xl px-8 py-12">
        <div className="grid h-full grid-cols-4 gap-x-8">
          {sections.map((section, index) => (
            <div key={index} className="menu-section">
              <h3 className="text-lg font-semibold text-primary">
                {section.title}
              </h3>
              <ul role="list" className="mt-8 space-y-8">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="group">
                    <Link
                      href={item.href}
                      className="block space-y-2 p-4 transition-colors hover:bg-dark-dark"
                      onClick={() => {
                        onClose()
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base font-medium text-white group-hover:text-accent">
                          {item.title}
                        </span>
                        {item.items && (
                          <ChevronRight className="h-4 w-4 text-white group-hover:text-primary" />
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-white">
                          {item.description}
                        </p>
                      )}
                    </Link>
                    {item.items && (
                      <ul className="mt-2 pl-4 space-y-2">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block py-2 text-sm text-white hover:text-accent"
                              onClick={onClose}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}