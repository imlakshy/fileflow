"use client"

import { motion } from "framer-motion"
import { FileText, Eye, Download, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const toolSettings: Record<string, { title: string; options: { id: string; label: string; type: string; values?: string[] }[] }> = {
  "pdf-to-image": {
    title: "Export Settings",
    options: [
      { id: "format", label: "Output Format", type: "select", values: ["JPG", "PNG", "WEBP"] },
      { id: "quality", label: "Quality", type: "select", values: ["High", "Medium", "Low"] },
      { id: "dpi", label: "Resolution", type: "select", values: ["72 DPI", "150 DPI", "300 DPI"] },
    ],
  },
  "compress": {
    title: "Compression Settings",
    options: [
      { id: "level", label: "Compression Level", type: "select", values: ["Maximum", "Balanced", "Minimum"] },
      { id: "images", label: "Compress Images", type: "toggle" },
    ],
  },
  "split": {
    title: "Split Options",
    options: [
      { id: "mode", label: "Split Mode", type: "select", values: ["Extract Pages", "Split Every N Pages", "Split by Ranges"] },
      { id: "pages", label: "Page Selection", type: "text" },
    ],
  },
  "rotate": {
    title: "Rotation Settings",
    options: [
      { id: "direction", label: "Rotation", type: "select", values: ["90° Clockwise", "90° Counter-clockwise", "180°"] },
      { id: "pages", label: "Apply to Pages", type: "select", values: ["All Pages", "Odd Pages", "Even Pages", "Custom"] },
    ],
  },
  "watermark": {
    title: "Watermark Settings",
    options: [
      { id: "type", label: "Watermark Type", type: "select", values: ["Text", "Image"] },
      { id: "text", label: "Watermark Text", type: "text" },
      { id: "opacity", label: "Opacity", type: "select", values: ["25%", "50%", "75%", "100%"] },
      { id: "position", label: "Position", type: "select", values: ["Center", "Diagonal", "Top", "Bottom"] },
    ],
  },
  "protect": {
    title: "Protection Settings",
    options: [
      { id: "password", label: "Password", type: "password" },
      { id: "confirm", label: "Confirm Password", type: "password" },
      { id: "permissions", label: "Allow Printing", type: "toggle" },
    ],
  },
}

interface PdfPreviewProps {
  files: File[]
  selectedTool: string | null
}

export function PdfPreview({ files, selectedTool }: PdfPreviewProps) {
  const settings = selectedTool ? toolSettings[selectedTool] : null

  if (files.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-border bg-card/50 p-8"
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center py-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <p className="text-lg font-medium text-foreground">No files selected</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Select a tool and upload files to see preview
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-border bg-card"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-medium text-foreground">Preview & Settings</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Settings2 className="h-4 w-4 mr-1" />
            Options
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* File Preview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {files.slice(0, 6).map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="relative aspect-[3/4] rounded-lg border border-border bg-secondary/50 overflow-hidden group"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <FileText className="h-8 w-8 text-primary/50 mb-2" />
                <p className="text-xs text-muted-foreground text-center truncate w-full px-2">
                  {file.name}
                </p>
              </div>
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
              </div>
            </div>
          ))}
          {files.length > 6 && (
            <div className="aspect-[3/4] rounded-lg border border-border bg-secondary/50 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">+{files.length - 6} more</p>
            </div>
          )}
        </div>

        {/* Tool-specific Settings */}
        {settings && (
          <div className="border-t border-border pt-4">
            <h4 className="text-sm font-medium text-foreground mb-3">{settings.title}</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {settings.options.map((option) => (
                <div key={option.id}>
                  <label className="text-xs text-muted-foreground mb-1.5 block">
                    {option.label}
                  </label>
                  {option.type === "select" && option.values ? (
                    <select className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                      {option.values.map((value) => (
                        <option key={value} value={value}>{value}</option>
                      ))}
                    </select>
                  ) : option.type === "toggle" ? (
                    <div className="flex items-center gap-2">
                      <button className="relative h-6 w-11 rounded-full bg-primary transition-colors">
                        <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transform translate-x-5 transition-transform" />
                      </button>
                      <span className="text-sm text-muted-foreground">Enabled</span>
                    </div>
                  ) : (
                    <input
                      type={option.type}
                      placeholder={option.type === "password" ? "••••••••" : "Enter value..."}
                      className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Output Info */}
        <div className="mt-6 flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-3">
          <div>
            <p className="text-sm font-medium text-foreground">Estimated Output</p>
            <p className="text-xs text-muted-foreground">
              {files.length} {files.length === 1 ? "file" : "files"} • ~{(files.reduce((acc, f) => acc + f.size, 0) / 1024 / 1024).toFixed(1)} MB total
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Download All
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
