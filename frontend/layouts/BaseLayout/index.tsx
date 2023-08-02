'use client'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { PropsWithChildren } from 'react'

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="h-screen w-screen snap-y snap-mandatory overflow-x-hidden scroll-smooth mobile:px-2 laptop:px-0">
        {children}
        <Footer />
      </main>
    </>
  )
}
