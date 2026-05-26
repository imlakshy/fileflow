"use client"

import { motion } from "framer-motion"
import { 
  WifiOff, 
  Shield, 
  FileImage, 
  FileAudio, 
  FileVideo, 
  FileText, 
  Archive, 
  Scissors,
  RefreshCw,
  ImageDown
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const offlineTools = [
  {
    icon: RefreshCw,
    name: "Audio Converter",
    description: "Convert between MP3, WAV, OGG, FLAC formats",
    formats: ["MP3", "WAV", "OGG", "FLAC"],
  },
  {
    icon: ImageDown,
    name: "Image Compressor",
    description: "Reduce image file size without quality loss",
    formats: ["PNG", "JPG", "WEBP", "GIF"],
  },
  {
    icon: FileText,
    name: "PDF Merge",
    description: "Combine multiple PDFs into one document",
    formats: ["PDF"],
  },
  {
    icon: FileVideo,
    name: "Video Trim",
    description: "Cut and trim video clips instantly",
    formats: ["MP4", "WEBM", "MOV"],
  },
  {
    icon: FileImage,
    name: "Format Conversion",
    description: "Convert images between any format",
    formats: ["PNG", "JPG", "WEBP", "SVG"],
  },
  {
    icon: Archive,
    name: "ZIP Extractor",
    description: "Extract and create ZIP archives",
    formats: ["ZIP", "RAR", "7Z"],
  },
  {
    icon: FileAudio,
    name: "Audio Trim",
    description: "Cut audio files to desired length",
    formats: ["MP3", "WAV", "M4A"],
  },
  {
    icon: Scissors,
    name: "PDF Split",
    description: "Split PDFs into separate pages",
    formats: ["PDF"],
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export function OfflineToolsSection() {
  return (
    <section id="offline-tools" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 radial-overlay" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <Badge variant="outline" className="gap-2 px-4 py-2 glass border-primary/30">
              <WifiOff className="h-4 w-4 text-primary" />
              Works Offline
            </Badge>
            <Badge variant="outline" className="gap-2 px-4 py-2 glass border-primary/30">
              <Shield className="h-4 w-4 text-primary" />
              Private Processing
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Offline Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Process files directly on your device. No upload required, no internet needed.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {offlineTools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              className="group glass-card glow-border cursor-pointer rounded-xl p-5 transition-all hover:bg-secondary/30"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-transform group-hover:scale-110">
                  <tool.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{tool.name}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {tool.formats.map((format) => (
                  <span
                    key={format}
                    className="rounded bg-secondary px-2 py-0.5 text-xs font-mono text-muted-foreground"
                  >
                    .{format.toLowerCase()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* PWA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 glass-card glow-border rounded-2xl p-8 text-center"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex -space-x-2">
              {["bg-cyan-500", "bg-emerald-500", "bg-amber-500"].map((bg, i) => (
                <div
                  key={i}
                  className={`h-10 w-10 rounded-full ${bg} flex items-center justify-center border-2 border-background`}
                >
                  <WifiOff className="h-4 w-4 text-background" />
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">
                Install as PWA for full offline support
              </p>
              <p className="text-sm text-muted-foreground">
                Works on any device - desktop, tablet, or mobile
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
