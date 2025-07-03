"use client"
import { QuoteForm } from "@/components/quote-form"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Quote Generator</h1>
      <QuoteForm />
    </main>
  )
}
