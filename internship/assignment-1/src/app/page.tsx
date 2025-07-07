"use client"

import { QuoteForm } from "@/components/quote-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-6">
      <div className="w-full max-w-xl space-y-8">
        <h1 className="text-4xl font-bold text-center tracking-wider">
          ✨ Quote Generator
        </h1>
        <QuoteForm />
      </div>
    </main>
  )
}

