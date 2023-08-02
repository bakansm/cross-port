'use client'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { PropsWithChildren } from 'react'

export default function BlankLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex w-full flex-grow items-center justify-center bg-white">
        {children}
      </main>
    </div>
  )
}
