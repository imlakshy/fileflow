"use client"

import { motion } from "framer-motion"
import { 
  Wifi, 
  Brain, 
  Mic, 
  Eraser, 
  FileText, 
  Subtitles, 
  Sparkles,
  Wand2
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const aiTools = [
  {
    icon: Mic,
    name: "AI Transcription",
    description: "Convert speech to text with high accuracy using advanced AI models.",
    badge: "Premium",
  },
  {
    icon: Eraser,
    name: "AI Background Removal",
    description: "Remove backgrounds from images instantly with one click.",
    badge: "Popular",
  },
  {
    icon: FileText,
    name: "AI Summarization",
    description: "Get instant summaries of documents and PDFs using AI.",
    badge: "New",
  },
  {
    icon: Subtitles,
    name: "AI Subtitle Generation",
    description: "Auto-generate subtitles for videos in multiple languages.",
    badge: "Premium",
  },
  {
    icon: Wand2,
    name: "AI Enhancement",
    description: "Upscale and enhance images using AI super-resolution.",
    badge: "Popular",
  },
  {
    icon: Brain,
    name: "AI Document Analysis",
    description: "Extract data and insights from complex documents.",
    badge: "Enterprise",
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
    transition: { duration: 0.4 },
  },
}

export function AIToolsSection() {
  return (
    <section id="ai-tools" className="relative py-24 lg:py-32 overflow-hidden">
      {/* AI-specific background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.1_0.03_290)] to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[oklch(0.5_0.2_290)] opacity-10 blur-[128px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[oklch(0.5_0.15_330)] opacity-10 blur-[128px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex">
            <Badge 
              variant="outline" 
              className="gap-2 px-4 py-2 glass border-[oklch(0.75_0.2_290)]/30 text-[oklch(0.85_0.15_290)]"
            >
              <Wifi className="h-4 w-4" />
              Internet Required for AI Processing
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            <span className="bg-gradient-to-r from-[oklch(0.75_0.2_290)] to-[oklch(0.75_0.15_330)] bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Advanced AI capabilities for when you need more power. Secure cloud processing with state-of-the-art models.
          </p>
        </motion.div>

        {/* AI Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aiTools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Glow border effect for AI cards */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.2_290)]/20 to-[oklch(0.75_0.15_330)]/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-px rounded-2xl bg-card" />
              
              <div className="relative glass-card glow-border-ai rounded-2xl p-6 transition-all group-hover:bg-secondary/30">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.75_0.2_290)]/20 to-[oklch(0.75_0.15_330)]/20 transition-transform group-hover:scale-110">
                    <tool.icon className="h-6 w-6 text-[oklch(0.85_0.15_290)]" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-[oklch(0.75_0.2_290)]/10 text-[oklch(0.85_0.15_290)] border-[oklch(0.75_0.2_290)]/20"
                  >
                    {tool.badge}
                  </Badge>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
                
                {/* AI indicator */}
                <div className="mt-4 flex items-center gap-2 text-sm text-[oklch(0.75_0.15_290)]">
                  <Sparkles className="h-4 w-4" />
                  <span>Powered by AI</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[oklch(0.75_0.2_290)]/10 to-[oklch(0.75_0.15_330)]/10 p-px"
        >
          <div className="rounded-2xl bg-card/80 backdrop-blur-xl p-8 text-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.2_290)] to-[oklch(0.75_0.15_330)]">
                <Brain className="h-8 w-8 text-background" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-foreground">
                  Your files are encrypted during AI processing
                </p>
                <p className="text-sm text-muted-foreground">
                  Files are deleted immediately after processing. We never store or train on your data.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
