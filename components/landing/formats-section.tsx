"use client"

import { motion } from "framer-motion"
import { 
  FileImage, 
  FileAudio, 
  FileVideo, 
  FileText, 
  Archive,
  File
} from "lucide-react"

const formatCategories = [
  {
    icon: FileImage,
    name: "Images",
    formats: ["PNG", "JPG", "JPEG", "WEBP", "GIF", "SVG", "BMP", "TIFF", "ICO", "HEIC"],
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    icon: FileAudio,
    name: "Audio",
    formats: ["MP3", "WAV", "OGG", "FLAC", "M4A", "AAC", "WMA", "AIFF"],
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    icon: FileVideo,
    name: "Video",
    formats: ["MP4", "WEBM", "MOV", "AVI", "MKV", "FLV", "WMV", "M4V"],
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    icon: FileText,
    name: "Documents",
    formats: ["PDF", "DOC", "DOCX", "TXT", "RTF", "ODT", "XLS", "XLSX"],
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    icon: Archive,
    name: "Archives",
    formats: ["ZIP", "RAR", "7Z", "TAR", "GZ", "BZ2"],
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
  },
  {
    icon: File,
    name: "Other",
    formats: ["JSON", "XML", "CSV", "YAML", "MD", "HTML"],
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
  },
]

export function FormatsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
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
            Supported File Formats
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Support for all major file formats. Convert between any format seamlessly.
          </p>
        </motion.div>

        {/* Formats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {formatCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.bgColor}`}>
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.formats.map((format) => (
                  <span
                    key={format}
                    className="rounded-md bg-secondary px-2 py-1 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground"
                  >
                    .{format.toLowerCase()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
