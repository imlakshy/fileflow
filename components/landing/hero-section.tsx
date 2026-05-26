"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FloatingIcons } from "./floating-icons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-4 sm:pt-28 sm:pb-6">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 radial-overlay" />
      
      {/* Floating Icons */}
      <FloatingIcons />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex"
          >
            <Badge variant="outline" className="gap-2 px-3 py-1.5 text-xs glass">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Offline-First PWA
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            Process files{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
              directly on your device
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg text-balance"
          >
            Convert, compress, and transform your files without uploading to any server.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
