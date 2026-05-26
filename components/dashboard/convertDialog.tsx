"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

import { useMemo, useState } from "react"

type BatchConvertDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  files?: File[]
}

const conversionFormats: Record<string, string[]> = {
  // Documents
  PDF: ["DOCX", "TXT", "PNG", "JPG"],
  DOCX: ["PDF", "TXT"],
  TXT: ["PDF", "DOCX"],
  XLSX: ["CSV", "PDF"],
  CSV: ["XLSX", "PDF"],

  // Images
  PNG: ["JPG", "WEBP", "SVG", "PDF"],
  JPG: ["PNG", "WEBP", "PDF"],
  JPEG: ["PNG", "WEBP", "PDF"],
  WEBP: ["PNG", "JPG", "PDF"],
  SVG: ["PNG", "JPG"],
  GIF: ["MP4", "WEBP"],

  // Audio
  MP3: ["WAV", "AAC", "OGG"],
  WAV: ["MP3", "AAC"],
  AAC: ["MP3", "WAV"],
  OGG: ["MP3"],

  // Video
  MP4: ["MOV", "AVI", "WEBM", "MP3"],
  MOV: ["MP4", "AVI"],
  AVI: ["MP4", "MOV"],
  WEBM: ["MP4"],
}

export default function BatchConvertDialog({
  open,
  onOpenChange,
  files = [],
}: BatchConvertDialogProps) {
  const [selectedFormats, setSelectedFormats] =
    useState<Record<string, string>>({})

  const extensionCounts = useMemo(() => {
    return files.reduce((acc, file) => {
      const ext =
        file.name
          .split(".")
          .pop()
          ?.toUpperCase() || "UNKNOWN"

      acc[ext] = (acc[ext] || 0) + 1

      return acc
    }, {} as Record<string, number>)
  }, [files])

  const handleSelect = (
    ext: string,
    value: string
  ) => {
    setSelectedFormats((prev) => ({
      ...prev,
      [ext]: value,
    }))
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-h-[85vh] overflow-y-auto border-white/10 text-white sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Batch Convert
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {Object.entries(extensionCounts).map(
            ([ext, count]) => {
              const formats =
                conversionFormats[ext] || []

              return (
                <div
                  key={ext}
                  className="rounded-3xl border border-white/10 bg-secondary/50 p-4"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full border border-cyan-500/20 px-3 py-1 text-xs font-medium text-red-500">
                        {ext}
                      </div>

                      <p className="text-sm text-white/50">
                        {count} file
                        {count > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  {formats.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-sm text-white/50">
                        Convert {ext} to
                      </p>

                      <Select
                        value={
                          selectedFormats[ext]
                        }
                        onValueChange={(value) =>
                          handleSelect(
                            ext,
                            value
                          )
                        }
                      >
                        <SelectTrigger className="h-11 border-white/10 bg-white/5">
                          <SelectValue placeholder="Choose format" />
                        </SelectTrigger>

                        <SelectContent className="border-white/10 bg-[#0B1220] text-white">
                          {formats.map(
                            (format) => (
                              <SelectItem
                                key={format}
                                value={format}
                              >
                                {format}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
                    <p className="text-sm text-white/40">
                      No conversion options
                      available
                    </p>
                  )}
                </div>
              )
            }
          )}

          <Button className="mt-4 h-11 w-full glow-primary cursor-pointer">
            Convert Files
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}