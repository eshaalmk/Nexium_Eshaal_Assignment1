"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


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

export default function Home() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = quotes[topic.toLowerCase() as keyof typeof quotes]
    setResults(found || ["No quotes found for this topic."])
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Quote Generator</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <Input
          placeholder="Enter a topic like motivation, life, or coding"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-80"
        />
        <Button type="submit">Generate</Button>
      </form>
      <ul className="space-y-2 text-center">
        {results.map((quote, index) => (
          <li key={index} className="text-muted-foreground">{quote}</li>
        ))}
      </ul>
    </main>
  )
}
