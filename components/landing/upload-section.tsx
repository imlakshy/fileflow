"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Upload, 
  FileImage, 
  FileAudio, 
  FileVideo, 
  FileText,
  Archive,
  Sparkles,
  ArrowRight,
  WifiOff,
  Shield,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const quickTools = [
  { id: "convert", label: "Convert", icon: FileImage, color: "text-cyan-400" },
  { id: "compress", label: "Compress", icon: Archive, color: "text-emerald-400" },
  { id: "extract", label: "Extract Text", icon: FileText, color: "text-amber-400" },
  { id: "audio", label: "Audio", icon: FileAudio, color: "text-rose-400" },
  { id: "video", label: "Video", icon: FileVideo, color: "text-purple-400" },
  { id: "ai", label: "AI Tools", icon: Sparkles, color: "text-violet-400" },
]

export function UploadSection() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <section className="relative py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Quick Tool Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <p className="mb-3 text-center text-sm text-muted-foreground">
            Select a tool or drop files to auto-detect
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedTool === tool.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <tool.icon className={`h-4 w-4 ${selectedTool === tool.id ? "" : tool.color}`} />
                {tool.label}
                {selectedTool === tool.id && <Check className="h-3 w-3" />}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Drop Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={() => setIsDragging(false)}
          className={`glass-card group relative cursor-pointer rounded-2xl p-8 sm:p-12 transition-all ${
            isDragging 
              ? "bg-primary/10 border-primary shadow-lg shadow-primary/20" 
              : "glow-border hover:bg-secondary/30"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Upload Icon */}
            <motion.div 
              animate={{ 
                scale: isDragging ? 1.2 : 1,
                y: isDragging ? -8 : 0 
              }}
              className="rounded-xl bg-primary/10 p-5 transition-transform group-hover:scale-110"
            >
              <Upload className={`h-10 w-10 ${isDragging ? "text-primary animate-pulse" : "text-primary"}`} />
            </motion.div>

            {/* Text */}
            <div className="text-center">
              <p className="text-xl font-semibold text-foreground">
                {isDragging ? "Release to upload" : "Drop files here or click to browse"}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {selectedTool 
                  ? `Ready to ${selectedTool === "ai" ? "process with AI" : selectedTool}`
                  : "We'll automatically detect the best tool for your files"
                }
              </p>
            </div>

            {/* Supported Formats */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              {["PDF", "PNG", "JPG", "WEBP", "MP4", "MP3", "WAV", "ZIP", "DOCX"].map((format) => (
                <span
                  key={format}
                  className="rounded-md bg-secondary px-2 py-1 text-xs font-mono text-muted-foreground"
                >
                  .{format.toLowerCase()}
                </span>
              ))}
              <span className="text-xs text-muted-foreground">+50 more</span>
            </div>

            {/* Browse Button */}
            <Button size="lg" className="mt-4 gap-2">
              <Upload className="h-4 w-4" />
              Browse Files
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Privacy Badges */}
            <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <WifiOff className="h-3.5 w-3.5 text-primary" />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                <span>Files Never Leave Your Device</span>
              </div>
            </div>
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            className="absolute inset-0 cursor-pointer opacity-0"
            multiple
            aria-label="Upload files"
          />
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Free
            </Badge>
            <span>Offline tools</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-violet-500/10 text-violet-400 border-violet-500/20">
              Pro
            </Badge>
            <span>AI-powered features</span>
          </div>
          <span className="text-muted-foreground/60">No sign-up required for offline tools</span>
        </motion.div>
      </div>
    </section>
  )
}
