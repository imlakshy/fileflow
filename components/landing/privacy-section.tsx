"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Server, Trash2 } from "lucide-react"

const privacyFeatures = [
  {
    icon: Eye,
    title: "No Data Collection",
    description: "We don't track, analyze, or collect any information about your files.",
  },
  {
    icon: Server,
    title: "No Server Uploads",
    description: "Offline tools process everything locally. Your files never leave your device.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "AI tools use encrypted connections. Files are never stored on our servers.",
  },
  {
    icon: Trash2,
    title: "Instant Deletion",
    description: "AI-processed files are deleted immediately after processing completes.",
  },
]

export function PrivacySection() {
  return (
    <section id="privacy" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 radial-overlay" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 glow-primary">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Privacy is not optional.{" "}
              <span className="text-muted-foreground">{"It's the default."}</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              FileFlow is built with privacy at its core. Most tools work entirely offline, 
              and when AI processing requires internet, we use industry-leading security practices.
            </p>
            
            <div className="mt-8 space-y-4">
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card glow-border rounded-2xl p-8">
              <div className="space-y-6">
                {/* Visual representation of data flow */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Your File</p>
                      <p className="text-sm text-muted-foreground">document.pdf</p>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="relative h-px bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-y-0 left-0 bg-primary"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Local Processing</p>
                      <p className="text-sm text-muted-foreground">On your device</p>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                    <Shield className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>

                <div className="relative h-px bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute inset-y-0 left-0 bg-emerald-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Result</p>
                      <p className="text-sm text-muted-foreground">Stays on your device</p>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                    <Eye className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">0</p>
                  <p className="text-xs text-muted-foreground">Files Stored</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">0</p>
                  <p className="text-xs text-muted-foreground">Data Collected</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">Private</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
