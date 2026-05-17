
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
    return <div className="w-12 h-6 rounded-full bg-slate-800 animate-pulse" />
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40",
        "bg-[#1e293b] border border-white/10 overflow-hidden"
      )}
      aria-label="Toggle theme"
    >
      {/* Moving Thumb */}
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-lg z-10"
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Moon className="h-3 w-3 text-slate-900 fill-slate-900" />
            ) : (
              <Sun className="h-3 w-3 text-slate-900" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
      {/* Subtle Background Icons for context */}
      <div className="absolute inset-0 flex justify-between items-center px-1.5 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
        <Sun className="h-3 w-3 text-white" />
        <Moon className="h-3 w-3 text-white" />
      </div>
    </button>
  )
}
