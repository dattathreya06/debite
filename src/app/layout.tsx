// src/app/layout.

import { fontSans, fontMono } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/layout/site-header'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from '@/components/theme-provider'
import '@/app/styles/globals.css'

export const metadata = {
  title: 'Debite',
  description: 'Next generation financial platform',  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}