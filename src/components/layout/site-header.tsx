"use client";

import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-light bg-dark shadow-sm shadow-slate-900">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/debite_logo.svg"
            alt="Company Logo"
            width={160}
            height={60}
            priority
            className="w-auto h-8"
          />
        </Link>
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end">
          <Link
            href="/contact"
            className="bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
