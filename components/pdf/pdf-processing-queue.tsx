"use client"

import { motion } from "framer-motion"
import { FileText, Check, Loader2, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const mockQueue = [
  {
    id: 1,
    name: "Document_Report.pdf",
    operation: "Compressing",
    progress: 75,
    status: "processing",
  },
  {
    id: 2,
    name: "Presentation.pdf",
    operation: "Converting to images",
    progress: 100,
    status: "completed",
  },
  {
    id: 3,
    name: "Contract_v2.pdf",
    operation: "Adding watermark",
    progress: 0,
    status: "queued",
  },
]

export function PdfProcessingQueue() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-border bg-card"
    >
      <div className="border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-foreground">Processing Queue</h3>
          <span className="text-xs text-muted-foreground">
            {mockQueue.filter((item) => item.status === "processing").length} active
          </span>
        </div>
      </div>

      <div className="divide-y divide-border">
        {mockQueue.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                {item.status === "completed" ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : item.status === "processing" ? (
                  <Loader2 className="h-4 w-4 text-primary animate-spin" />
                ) : (
                  <Clock className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">{item.operation}</p>
                {item.status === "processing" && (
                  <div className="mt-2">
                    <Progress value={item.progress} className="h-1.5" />
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.progress}% complete
                    </p>
                  </div>
                )}
                {item.status === "completed" && (
                  <p className="mt-1 text-xs text-green-500">Ready to download</p>
                )}
                {item.status === "queued" && (
                  <p className="mt-1 text-xs text-muted-foreground">Waiting in queue</p>
                )}
              </div>
            </div>
          </div>
        ))}

        {mockQueue.length === 0 && (
          <div className="p-8 text-center">
            <FileText className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">No files in queue</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
