"use client";

import { useState } from "react";
import { ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  emotionsData,
  emotions,
  type EmotionKey,
  type RelatedWord,
} from "@/lib/emotions";

export default function Home() {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionKey | null>(
    null
  );
  const [selectedWord, setSelectedWord] = useState<RelatedWord | null>(null);

  const handleEmotionClick = (emotionKey: EmotionKey) => {
    setSelectedEmotion(emotionKey);
  };

  const handleBack = () => {
    setSelectedEmotion(null);
    setSelectedWord(null);
  };

  // Animation Variants
  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 }, // Zooming "into" the screen
  };

  const wheelVariants = {
    initial: { opacity: 0, scale: 0.5 }, // Start small to look like it's coming from a bubble
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50/30 to-purple-50/40 overflow-hidden">
      <AnimatePresence mode="wait">
        {!selectedEmotion ? (
          // MAIN SELECTION SCREEN
          <motion.main
            key="selection"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-screen flex items-center justify-center p-6"
          >
            <div className="w-full max-w-md">
              <h1 className="text-5xl font-bold text-center mb-16 text-slate-900">
                I am feeling...
              </h1>
              <div className="relative flex flex-col items-center gap-6 max-w-sm mx-auto">
                {/* Rows mapping - Using a helper to keep code clean */}
                {[
                  [emotions[0], emotions[1]],
                  [emotions[2], emotions[3], emotions[4]],
                  [emotions[5], emotions[6]],
                ].map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-4">
                    {row.map((emotion) => (
                      <button
                        key={emotion.key}
                        onClick={() =>
                          handleEmotionClick(emotion.key as EmotionKey)
                        }
                        className="group"
                      >
                        <div
                          className={`glass-bubble w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-gradient-to-br ${emotion.color} transition-transform duration-300 group-hover:scale-110 group-active:scale-95`}
                        >
                          <span className="text-base font-medium">
                            {emotion.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.main>
        ) : (
          // EMOTION WHEEL SCREEN
          <motion.main
            key="wheel"
            variants={wheelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 25,
              stiffness: 120,
            }}
            className="min-h-screen p-6"
          >
            <div className="max-w-md mx-auto">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1 text-slate-900 mb-12 text-lg hover:text-slate-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back</span>
              </button>

              <div className="mb-12">
                <h1 className="text-5xl font-bold mb-3 text-slate-900">
                  {emotionsData[selectedEmotion].name}
                </h1>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {emotionsData[selectedEmotion].description}
                </p>
              </div>

              <div className="relative flex items-center justify-center min-h-[450px]">
                {/* Center circle */}
                <motion.button
                  layoutId={`bubble-${selectedEmotion}`}
                  onClick={() =>
                    setSelectedWord({
                      word: emotionsData[selectedEmotion].name,
                      definition: emotionsData[selectedEmotion].description,

                    })
                  }
                  // Added: w-32 h-32 rounded-full flex-shrink-0
                  className={`glass-bubble-large absolute z-10 w-32 h-32 rounded-full bg-gradient-to-br ${emotionsData[selectedEmotion].color} flex items-center justify-center shadow-lg`}
                >
                  <div className="text-center p-2">
                    <div className="font-semibold text-lg leading-tight">
                      {emotionsData[selectedEmotion].name}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest opacity-75 mt-1">
                      CURRENT
                    </div>
                  </div>
                </motion.button>

                {/* Surrounding circles */}
                {emotionsData[selectedEmotion].related.map((item, index) => {
                  const angle =
                    (index * 360) /
                      emotionsData[selectedEmotion].related.length -
                    90;
                  const radians = (angle * Math.PI) / 180;
                  const radius = 125;
                  const x = Math.cos(radians) * radius;
                  const y = Math.sin(radians) * radius;

                  return (
                    <motion.button
                      key={item.word}
                      onClick={() => setSelectedWord(item)}
                      className={`glass-bubble absolute w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${emotionsData[selectedEmotion].color} shadow-md`}
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <span className="text-xs font-medium text-center px-2 leading-tight">
                        {item.word}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Modal - Kept outside AnimatePresence for separate logic */}
      <AnimatePresence>
        {selectedWord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            onClick={() => setSelectedWord(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-modal bg-gradient-to-br from-white/90 to-pink-50/60 w-full max-w-sm p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWord(null)}
                className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">
                {selectedWord.word}
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                {selectedWord.definition}
              </p>
              {selectedWord.example && (
                <p className="text-slate-600 italic leading-relaxed">
                  {selectedWord.example}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
