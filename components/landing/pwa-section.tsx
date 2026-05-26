"use client"

import { motion } from "framer-motion"
import { Download, Smartphone, Monitor, Tablet, Chrome, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PWASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card glow-border rounded-3xl p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                <Download className="h-4 w-4" />
                Progressive Web App
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Install FileFlow on any device
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Get the full desktop app experience right in your browser. 
                Works offline, launches instantly, and receives automatic updates.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 glow-primary">
                  <Download className="h-5 w-5" />
                  Install App
                </Button>
                <Button size="lg" variant="outline" className="gap-2 glass">
                  <Chrome className="h-5 w-5" />
                  Use in Browser
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Chrome className="h-4 w-4" />
                  Chrome
                </div>
                <div className="flex items-center gap-2">
                  <Apple className="h-4 w-4" />
                  Safari
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  Edge
                </div>
              </div>
            </div>

            {/* Right Column - Device Preview */}
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                {/* Desktop */}
                <div className="relative">
                  <div className="glass-card rounded-2xl p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/50" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                        <div className="h-3 w-3 rounded-full bg-green-500/50" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="rounded-md bg-secondary px-4 py-1 text-xs text-muted-foreground">
                          fileflow.app
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-background p-4 aspect-video flex items-center justify-center">
                      <div className="flex items-center gap-3">
                        <Monitor className="h-8 w-8 text-primary" />
                        <span className="text-lg font-medium text-foreground">FileFlow</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile - positioned to overlap */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-4 -right-4 md:-right-12"
                >
                  <div className="glass-card glow-primary rounded-2xl p-2 w-24">
                    <div className="rounded-lg bg-background p-2 aspect-[9/16] flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </motion.div>

                {/* Tablet - positioned to overlap on other side */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -top-4 -left-4 md:-left-8"
                >
                  <div className="glass-card rounded-xl p-2 w-20">
                    <div className="rounded-lg bg-background p-2 aspect-[3/4] flex items-center justify-center">
                      <Tablet className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
