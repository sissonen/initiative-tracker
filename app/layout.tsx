import type { Metadata } from "next"
import type { Viewport } from "next"

import { Analytics } from '@vercel/analytics/react'
import { Inter } from "next/font/google"
import "./globals.css"
//import InitiativeTracker from '@/app/page.tsx'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Initiative tracker",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">{children}</div>
	<Analytics />
      </body>
    </html>
  )
}
