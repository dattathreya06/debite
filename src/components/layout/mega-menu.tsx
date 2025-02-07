"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { NavSection } from "@/types/navigation"
import { gsap } from "gsap"

interface MegaMenuProps {
  sections: NavSection[]
  onClose: () => void
}

export function MegaMenu({ sections, onClose }: MegaMenuProps) {
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

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 top-16 z-50 bg-royal_blue_traditional-900 border-t border-gold-700/20"
      onClick={onClose}
    >
      <div className="mx-auto h-full max-w-7xl px-8 py-12">
        <div className="grid h-full grid-cols-4 gap-x-8">
          {sections.map((section, index) => (
            <div key={index} className="menu-section">
              <h3 className="text-lg font-semibold text-gold-400">
                {section.title}
              </h3>
              <ul role="list" className="mt-8 space-y-8">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="group">
                    <Link
                      href={item.href}
                      className="block space-y-2 rounded-lg p-3 transition-colors hover:bg-royal_blue_traditional-800 hover:shadow-[inset_0_1px_0_0_rgba(253,197,0,0.1)]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center">
                        <span className="text-base font-medium text-white group-hover:text-mikado_yellow-400">
                          {item.title}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-royal_blue_traditional-300 group-hover:text-gold-300/90">
                          {item.description}
                        </p>
                      )}
                    </Link>
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