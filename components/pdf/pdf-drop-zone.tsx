"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Upload, FileUp, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const toolInfo: Record<string, { accept: string; label: string }> = {
  "convert-to-pdf": { accept: ".jpg,.jpeg,.png,.webp,.docx,.xlsx,.pptx", label: "images or documents" },
  "pdf-to-image": { accept: ".pdf", label: "PDF files" },
  "merge": { accept: ".pdf", label: "PDF files to merge" },
  "split": { accept: ".pdf", label: "PDF file to split" },
  "compress": { accept: ".pdf", label: "PDF files to compress" },
  "extract-text": { accept: ".pdf", label: "PDF files" },
  "rotate": { accept: ".pdf", label: "PDF files" },
  "watermark": { accept: ".pdf", label: "PDF files" },
  "protect": { accept: ".pdf", label: "PDF files" },
  "unlock": { accept: ".pdf", label: "PDF files" },
  "pdf-to-word": { accept: ".pdf", label: "PDF files" },
  "ocr": { accept: ".pdf,.jpg,.jpeg,.png", label: "scanned PDFs or images" },
}

interface PdfDropZoneProps {
  selectedTool: string | null
  files: File[]
  onFilesChange: (files: File[]) => void
}

export function PdfDropZone({ selectedTool, files, onFilesChange }: PdfDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false)

  const currentTool = selectedTool ? toolInfo[selectedTool] : null

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
    onFilesChange([...files, ...droppedFiles])
  }, [files, onFilesChange])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      onFilesChange([...files, ...selectedFiles])
    }
  }, [files, onFilesChange])

  const removeFile = useCallback((index: number) => {
    onFilesChange(files.filter((_, i) => i !== index))
  }, [files, onFilesChange])

  const moveFile = useCallback((fromIndex: number, direction: "up" | "down") => {
    const toIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1
    if (toIndex < 0 || toIndex >= files.length) return
    const newFiles = [...files]
    const [removed] = newFiles.splice(fromIndex, 1)
    newFiles.splice(toIndex, 0, removed)
    onFilesChange(newFiles)
  }, [files, onFilesChange])

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
        className={cn(
          "relative rounded-xl border-2 border-dashed border-border bg-card/50 p-8 transition-colors",
          !selectedTool && "opacity-50"
        )}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Upload className="h-7 w-7 text-primary" />
          </div>
          <div>
            <p className="text-lg font-medium text-foreground">
              {isDragging 
                ? "Drop files here" 
                : selectedTool 
                  ? `Drop ${currentTool?.label || "files"} here`
                  : "Select a tool above to get started"
              }
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {selectedTool 
                ? "or click to browse from your device"
                : "Choose what you want to do with your PDF"
              }
            </p>
          </div>
          {selectedTool && (
            <input
              type="file"
              multiple={selectedTool !== "split"}
              accept={currentTool?.accept}
              onChange={handleFileSelect}
              className="absolute inset-0 cursor-pointer opacity-0"
              aria-label="Upload files"
            />
          )}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-secondary px-2 py-1">
              <FileText className="inline h-3 w-3 mr-1" />
              Processed locally
            </span>
            <span className="rounded-md bg-secondary px-2 py-1">
              Files never leave your device
            </span>
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
            <h3 className="font-medium text-foreground">
              Selected Files ({files.length})
              {selectedTool === "merge" && (
                <span className="ml-2 text-sm text-muted-foreground">
                  — drag to reorder
                </span>
              )}
            </h3>
            <Button variant="ghost" size="sm" onClick={() => onFilesChange([])}>
              Clear all
            </Button>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  {selectedTool === "merge" && (
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => moveFile(index, "up")}
                        disabled={index === 0}
                        className="p-0.5 text-muted-foreground hover:text-foreground disabled:opacity-30"
                        aria-label="Move up"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 3L10 8H2L6 3Z" fill="currentColor"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => moveFile(index, "down")}
                        disabled={index === files.length - 1}
                        className="p-0.5 text-muted-foreground hover:text-foreground disabled:opacity-30"
                        aria-label="Move down"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 9L2 4H10L6 9Z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  )}
                  <FileUp className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground truncate max-w-[200px] sm:max-w-[300px]">
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
          <Button className="w-full mt-4 glow-primary" disabled={!selectedTool}>
            {selectedTool === "merge" 
              ? `Merge ${files.length} PDFs`
              : selectedTool === "compress"
                ? `Compress ${files.length} ${files.length === 1 ? "File" : "Files"}`
                : `Process ${files.length} ${files.length === 1 ? "File" : "Files"}`
            }
          </Button>
        </motion.div>
      )}
    </div>
  )
}
