'use client'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { PropsWithChildren } from 'react'

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="flex w-screen items-start justify-center">
        {children}
      </main>
      <Footer />
    </>
  )
}
