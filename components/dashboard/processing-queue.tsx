"use client"

import { motion } from "framer-motion"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

const processingItems = [
  {
    id: 1,
    name: "image-batch.zip",
    status: "processing",
    progress: 65,
    action: "Compressing",
  },
  {
    id: 2,
    name: "video-clip.mp4",
    status: "processing",
    progress: 32,
    action: "Converting to WebM",
  },
  {
    id: 3,
    name: "document.pdf",
    status: "completed",
    progress: 100,
    action: "Merged",
  },
]

export function ProcessingQueue() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-semibold text-foreground">Processing Queue</h3>
        <span className="text-xs text-muted-foreground">
          {processingItems.filter((i) => i.status === "processing").length} active
        </span>
      </div>
      <div className="divide-y divide-border">
        {processingItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {item.status === "processing" && (
                  <Loader2 className="h-4 w-4 text-primary animate-spin" />
                )}
                {item.status === "completed" && (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                )}
                {item.status === "failed" && (
                  <XCircle className="h-4 w-4 text-destructive" />
                )}
                <span className="text-sm font-medium text-foreground truncate max-w-[140px]">
                  {item.name}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{item.progress}%</span>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    item.status === "completed"
                      ? "bg-emerald-400"
                      : item.status === "failed"
                      ? "bg-destructive"
                      : "bg-primary"
                  }`}
                />
              </div>
              <p className="text-xs text-muted-foreground">{item.action}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {processingItems.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-sm text-muted-foreground">No files in queue</p>
        </div>
      )}
    </div>
  )
}
