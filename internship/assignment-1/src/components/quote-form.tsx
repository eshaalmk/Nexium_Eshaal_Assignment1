"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

const quotes: Record<string, string[]> = {
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
  success: [
    "Success is not in what you have, but who you are.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Don't be afraid to give up the good to go for the great.",
  ],
  happiness: [
    "Happiness is not something ready made. It comes from your own actions.",
    "The most important thing is to enjoy your life—to be happy.",
    "Count your age by friends, not years. Count your life by smiles, not tears.",
  ],
  productivity: [
    "Focus on being productive instead of busy.",
    "It's not always that we need to do more but rather that we need to focus on less.",
    "Don't confuse activity with productivity. Many people are simply busy being busy.",
  ],
}

export function QuoteForm() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[] | null>(null)
  const [error, setError] = useState("")
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = topic.trim().toLowerCase()

    if (!trimmed) {
      setError("Please enter a topic.")
      setResults(null)
      return
    }

    const found = quotes[trimmed]
    if (!found) {
      setError(`No quotes found for "${trimmed}". Try one of the listed topics.`)
      setResults(null)
    } else {
      setError("")
      setResults(found)
    }

    setTopic("")
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-1 text-center">
            <h2 className="text-lg font-semibold text-white">
              Enter a topic to get inspired
            </h2>
            <p className="text-sm text-white/60">
              Available: {Object.keys(quotes).join(", ")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-white">
                Topic
              </Label>
              <Input
                id="topic"
                placeholder="e.g. motivation, coding, happiness"
                className="bg-black/20 border border-white/20 text-white placeholder-white/50 focus:ring-purple-500"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-all"
            >
              Generate Quotes
            </Button>

            {error && (
              <p className="text-sm text-red-400 font-medium text-center">
                {error}
              </p>
            )}
          </form>

          {hydrated && results && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2 border-t border-white/10 pt-4">
                {results.map((quote, i) => (
                  <p
                    key={i}
                    className="text-sm text-white/80 text-center italic"
                  >
                    “{quote}”
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
