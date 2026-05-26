"use client"

import { HardDrive } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function StorageCard() {
  const [usedGB, setUsedGB] = useState("0")
  const [quotaGB, setQuotaGB] = useState("0")

useEffect(() => {
  const getStorage = async () => {
    const estimate = await navigator.storage.estimate()

    const used = estimate.usage || 0
    const quota = estimate.quota || 0

    const formatStorage = (bytes: number) => {
      const gb = bytes / 1024 / 1024 / 1024
      const mb = bytes / 1024 / 1024

      return gb >= 1
        ? `${gb.toFixed(1)} GB`
        : `${mb.toFixed(0)} MB`
    }

    setUsedGB(formatStorage(used))
    setQuotaGB(formatStorage(quota))
  }

  getStorage()
}, [])


  const percentage = (parseFloat(usedGB) / parseFloat(quotaGB)) * 100

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <HardDrive className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Local Storage</h3>
          <p className="text-xs text-muted-foreground">Cached files on device</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Used</span>
          <span className="font-medium text-foreground">
            {usedGB} / {quotaGB} GB
          </span>
        </div>
        <Progress value={percentage} className="h-2" />
        <p className="text-xs text-muted-foreground">
          {(parseFloat(quotaGB) - parseFloat(usedGB)).toFixed(1)} GB available
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">24</p>
          <p className="text-xs text-muted-foreground">Images</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">8</p>
          <p className="text-xs text-muted-foreground">Videos</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">15</p>
          <p className="text-xs text-muted-foreground">PDFs</p>
        </div>
      </div>
    </div>
  )
}
