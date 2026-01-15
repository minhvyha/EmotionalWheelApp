"use client"

import Link from "next/link"
import { ChevronLeft, X } from "lucide-react"
import { useState } from "react"

interface RelatedWord {
  word: string
  definition: string
  example?: string
}

interface EmotionPageProps {
  emotion: string
  description: string
  color: string
  related: RelatedWord[]
}

export default function EmotionPage({ emotion, description, color, related }: EmotionPageProps) {
  const [selectedWord, setSelectedWord] = useState<RelatedWord | null>(null)

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50/30 to-purple-50/40 p-6">
        <div className="max-w-md mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-slate-900 mb-12 text-lg hover:text-slate-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-3 text-slate-900">{emotion}</h1>
            <p className="text-lg text-slate-700 leading-relaxed">{description}</p>
          </div>

          <div className="relative flex items-center justify-center min-h-[450px]">
            {/* Center circle */}
            <button
              onClick={() => setSelectedWord({ word: emotion, definition: description })}
              className={`glass-bubble-large absolute z-10 bg-gradient-to-br ${color} flex items-center justify-center`}
            >
              <div className="text-center">
                <div className="font-semibold text-lg">{emotion}</div>
                <div className="text-xs uppercase tracking-wide opacity-75 mt-1">CURRENT</div>
              </div>
            </button>

            {/* Surrounding circles */}
            {related.map((item, index) => {
              const angle = (index * 360) / related.length - 90
              const radians = (angle * Math.PI) / 180
              const radius = 125
              const x = Math.cos(radians) * radius
              const y = Math.sin(radians) * radius

              return (
                <button
                  key={item.word}
                  onClick={() => setSelectedWord(item)}
                  className={`glass-bubble absolute bg-gradient-to-br ${color}`}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <span className="text-sm font-medium text-center px-2">{item.word}</span>
                </button>
              )
            })}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedWord && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedWord(null)}
        >
          <div
            className="glass-modal bg-gradient-to-br from-white/90 to-pink-50/60 w-full max-w-sm p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedWord(null)}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold mb-4 text-slate-900">{selectedWord.word}</h2>
            <p className="text-slate-700 leading-relaxed mb-4">{selectedWord.definition}</p>
            {selectedWord.example && <p className="text-slate-600 italic leading-relaxed">{selectedWord.example}</p>}
          </div>
        </div>
      )}
    </>
  )
}
