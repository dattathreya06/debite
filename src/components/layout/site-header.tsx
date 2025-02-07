'use client'

import Link from "next/link"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import Button from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-700/20 bg-royal_blue_traditional-900 shadow-md shadow-royal_blue_traditional-900/50">
      <div className="container mx-auto flex h-16 items-center px-4">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link href="/login">
              <Button 
                variant="ghost" 
                className="text-white hover:text-gold-400"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button 
                variant="default"
                className="bg-mikado_yellow-500 text-royal_blue_traditional-900 hover:bg-mikado_yellow-400"
              >
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}