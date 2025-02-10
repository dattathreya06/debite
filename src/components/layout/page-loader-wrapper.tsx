'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const PageLoader = dynamic(() => import('@/components/ui/page-loader'), {
  ssr: false
})

export default function ClientPageLoader() {
  const [loading, setLoading] = useState(true)

  return loading ? <PageLoader onLoadComplete={() => setLoading(false)} /> : null
}