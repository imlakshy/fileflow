"use client"

import { motion } from "framer-motion"
import {
  FileText,
  FileOutput,
  Scissors,
  Combine,
  Lock,
  Unlock,
  Image,
  Type,
  RotateCw,
  Stamp,
  Minimize2,
  FileSearch,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const pdfTools = [
  {
    id: "convert-to-pdf",
    name: "Convert to PDF",
    description: "Convert images, Word, Excel to PDF",
    icon: FileText,
    formats: ["JPG", "PNG", "DOCX", "XLSX"],
  },
  {
    id: "pdf-to-image",
    name: "PDF to Image",
    description: "Export PDF pages as images",
    icon: Image,
    formats: ["JPG", "PNG", "WEBP"],
  },
  {
    id: "merge",
    name: "Merge PDFs",
    description: "Combine multiple PDFs into one",
    icon: Combine,
    formats: ["PDF"],
  },
  {
    id: "split",
    name: "Split PDF",
    description: "Extract pages or split into multiple files",
    icon: Scissors,
    formats: ["PDF"],
  },
  {
    id: "compress",
    name: "Compress PDF",
    description: "Reduce file size while keeping quality",
    icon: Minimize2,
    formats: ["PDF"],
  },
  {
    id: "extract-text",
    name: "Extract Text",
    description: "Extract all text content from PDF",
    icon: Type,
    formats: ["PDF"],
  },
  {
    id: "rotate",
    name: "Rotate Pages",
    description: "Rotate PDF pages in any direction",
    icon: RotateCw,
    formats: ["PDF"],
  },
  {
    id: "watermark",
    name: "Add Watermark",
    description: "Add text or image watermark",
    icon: Stamp,
    formats: ["PDF"],
  },
  {
    id: "protect",
    name: "Protect PDF",
    description: "Add password protection to PDF",
    icon: Lock,
    formats: ["PDF"],
  },
  {
    id: "unlock",
    name: "Unlock PDF",
    description: "Remove password from PDF",
    icon: Unlock,
    formats: ["PDF"],
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF to editable DOCX",
    icon: FileOutput,
    formats: ["PDF"],
  },
  {
    id: "ocr",
    name: "OCR Scan",
    description: "Extract text from scanned PDFs",
    icon: FileSearch,
    formats: ["PDF", "JPG", "PNG"],
    isAI: true,
  },
]

interface PdfToolsProps {
  selectedTool: string | null
  onSelectTool: (tool: string | null) => void
}

export function PdfTools({ selectedTool, onSelectTool }: PdfToolsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
      {pdfTools.map((tool, index) => (
        <motion.button
          key={tool.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03 }}
          onClick={() => onSelectTool(selectedTool === tool.id ? null : tool.id)}
          className={cn(
            "group relative flex flex-col items-center gap-3 rounded-xl border p-4 text-center transition-all",
            selectedTool === tool.id
              ? tool.isAI
                ? "border-[oklch(0.75_0.2_290)] bg-[oklch(0.75_0.2_290)]/10"
                : "border-primary bg-primary/10"
              : "border-border bg-card/50 hover:border-primary/50 hover:bg-card"
          )}
        >
          {tool.isAI && (
            <Badge 
              className="absolute -top-2 -right-2 bg-[oklch(0.75_0.2_290)] text-white text-[10px] px-1.5 py-0"
            >
              AI
            </Badge>
          )}
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
              selectedTool === tool.id
                ? tool.isAI
                  ? "bg-[oklch(0.75_0.2_290)]/20 text-[oklch(0.85_0.15_290)]"
                  : "bg-primary/20 text-primary"
                : "bg-secondary text-muted-foreground group-hover:text-primary"
            )}
          >
            <tool.icon className="h-5 w-5" />
          </div>
          <div>
            <p className={cn(
              "text-sm font-medium transition-colors",
              selectedTool === tool.id
                ? tool.isAI
                  ? "text-[oklch(0.85_0.15_290)]"
                  : "text-primary"
                : "text-foreground"
            )}>
              {tool.name}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
              {tool.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {tool.formats.slice(0, 3).map((format) => (
              <span
                key={format}
                className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground"
              >
                {format}
              </span>
            ))}
          </div>
        </motion.button>
      ))}
    </div>
  )
}
