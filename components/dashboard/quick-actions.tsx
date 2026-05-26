"use client"

import { motion } from "framer-motion"
import {
  FileImage,
  FileAudio,
  FileVideo,
  FileText,
  Archive,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const actions = [
  {
    name: "Image Tools",
    description: "Convert, compress, resize",
    icon: FileImage,
    href: "/dashboard/images",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    hoverBg: "hover:bg-cyan-400/20",
  },
  {
    name: "Audio Tools",
    description: "Convert, trim, merge",
    icon: FileAudio,
    href: "/dashboard/audio",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    hoverBg: "hover:bg-emerald-400/20",
  },
  {
    name: "Video Tools",
    description: "Convert, trim, compress",
    icon: FileVideo,
    href: "/dashboard/video",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    hoverBg: "hover:bg-pink-400/20",
  },
  {
    name: "PDF Tools",
    description: "Merge, split, convert",
    icon: FileText,
    href: "/dashboard/pdf",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    hoverBg: "hover:bg-amber-400/20",
  },
  {
    name: "Compression",
    description: "ZIP, extract, compress",
    icon: Archive,
    href: "/dashboard/compression",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    hoverBg: "hover:bg-indigo-400/20",
  },
  {
    name: "AI Tools",
    description: "Transcribe, enhance, remove BG",
    icon: Sparkles,
    href: "/dashboard/ai",
    color: "text-[oklch(0.85_0.15_290)]",
    bgColor: "bg-[oklch(0.75_0.2_290)]/10",
    hoverBg: "hover:bg-[oklch(0.75_0.2_290)]/20",
    isAI: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

export function QuickActions() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {actions.map((action) => (
          <motion.div key={action.name} variants={itemVariants}>
            <Link
              href={action.href}
              className={`group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all ${action.hoverBg} hover:border-${action.color}/30`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.bgColor} transition-transform group-hover:scale-110`}>
                <action.icon className={`h-6 w-6 ${action.color}`} />
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground text-sm">{action.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{action.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
