"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  CloudOff, 
  Layers, 
  Sparkles 
} from "lucide-react"

const features = [
  {
    icon: CloudOff,
    title: "Offline-First",
    description: "Process files without internet connection. Your files never leave your device.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Native browser processing means instant results with no upload wait times.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "Files are processed locally. No servers, no uploads, no data collection.",
  },
  {
    icon: Smartphone,
    title: "PWA Support",
    description: "Install on any device. Works like a native app on desktop and mobile.",
  },
  {
    icon: Layers,
    title: "All-in-One",
    description: "PDF, images, audio, video, compression - everything you need in one place.",
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    description: "Advanced AI tools available online for transcription, enhancement, and more.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need for file processing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete suite of tools designed for speed, privacy, and ease of use.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-6 transition-all hover:bg-secondary/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-transform group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
