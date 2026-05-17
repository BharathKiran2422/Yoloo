"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-[52px] h-7 rounded-full bg-slate-800 animate-pulse" />
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  // Track: 52px wide, 28px tall
  // Padding: 2px all sides
  // Thumb: 24px × 24px  (28 - 2 - 2 = 24)
  // Travel: 52 - 24 - 2 - 2 = 24px

  return (
    <button
      onClick={toggleTheme}
      style={{ padding: "2px" }}
      className={cn(
        "group relative flex items-center w-[52px] h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary/40",
        isDark
          ? "bg-[#1e293b]"
          : "bg-slate-200"
      )}
      aria-label="Toggle theme"
    >
      {/* Thumb — 24×24px, sits perfectly inside 2px padding on all sides */}
      <motion.div
        className="relative w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md z-10 flex-shrink-0"
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 32,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ opacity: 0, rotate: -60, scale: 0.4 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.4 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Moon className="h-3.5 w-3.5 text-slate-700 fill-slate-700" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-amber-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  )
}