import "./globals.css"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "Inspired by the cosmos ✨",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body
        className="antialiased bg-black text-white"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}

