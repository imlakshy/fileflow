"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Upload, FileUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DropZone() {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles((prev) => [...prev, ...droppedFiles])
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...selectedFiles])
    }
  }, [])

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }, [])

  return (
    <div>
      <motion.div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        animate={{
          borderColor: isDragging ? "oklch(0.7 0.18 195)" : "oklch(0.22 0.02 270)",
          backgroundColor: isDragging ? "oklch(0.7 0.18 195 / 0.05)" : "transparent",
        }}
        className="relative rounded-xl border-2 border-dashed border-border bg-card/50 p-8 transition-colors"
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Upload className="h-7 w-7 text-primary" />
          </div>
          <div>
            <p className="text-lg font-medium text-foreground">
              {isDragging ? "Drop files here" : "Drag and drop files here"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              or click to browse from your device
            </p>
          </div>
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="absolute inset-0 cursor-pointer opacity-0"
            aria-label="Upload files"
          />
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            {["PDF", "PNG", "JPG", "MP4", "MP3", "ZIP"].map((format) => (
              <span
                key={format}
                className="rounded-md bg-secondary px-2 py-1 font-mono"
              >
                .{format.toLowerCase()}
              </span>
            ))}
            <span>and more...</span>
          </div>
        </div>
      </motion.div>

      {/* Selected Files */}
      {files.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-xl border border-border bg-card p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-foreground">Selected Files ({files.length})</h3>
            <Button variant="ghost" size="sm" onClick={() => setFiles([])}>
              Clear all
            </Button>
          </div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <FileUp className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground truncate max-w-[200px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 glow-primary">
            Process {files.length} {files.length === 1 ? "File" : "Files"}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
