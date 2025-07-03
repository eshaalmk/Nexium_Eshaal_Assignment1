"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const quotes = {
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
  ],
  life: [
    "Life is what happens when you’re busy making other plans.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
  ],
  coding: [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Experience is the name everyone gives to their mistakes.",
    "First, solve the problem. Then, write the code.",
  ],
}

export function QuoteForm() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[] | null>(null)
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = topic.trim().toLowerCase()

    if (!trimmed) {
      setError("Please enter a topic.")
      setResults(null)
      return
    }

    const found = quotes[trimmed as keyof typeof quotes]
    if (!found) {
      setError(`No quotes found for "${trimmed}". Try "motivation", "life", or "coding".`)
      setResults(null)
    } else {
      setError("")
      setResults(found)
    }

    setTopic("") // Clear input
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="topic">Topic</Label>
        <Input
          id="topic"
          placeholder="Try: motivation, life, coding"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">Generate Quotes</Button>

      {error && (
        <p className="text-sm text-red-500 font-medium text-center">{error}</p>
      )}

      {results && (
        <Card>
          <CardContent className="p-4 space-y-2">
            {results.map((quote, i) => (
              <p key={i} className="text-muted-foreground text-sm">“{quote}”</p>
            ))}
          </CardContent>
        </Card>
      )}
    </form>
  )
}
