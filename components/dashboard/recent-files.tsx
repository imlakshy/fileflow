"use client"

import { motion } from "framer-motion"
import {
  FileImage,
  FileAudio,
  FileVideo,
  FileText,
  MoreVertical,
  Download,
  Trash2,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const recentFiles = [
  {
    id: 1,
    name: "presentation-final.pdf",
    type: "PDF",
    size: "2.4 MB",
    date: "2 hours ago",
    icon: FileText,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    id: 2,
    name: "product-photo.png",
    type: "Image",
    size: "1.8 MB",
    date: "5 hours ago",
    icon: FileImage,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    id: 3,
    name: "podcast-episode.mp3",
    type: "Audio",
    size: "45.2 MB",
    date: "Yesterday",
    icon: FileAudio,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    id: 4,
    name: "demo-video.mp4",
    type: "Video",
    size: "128.5 MB",
    date: "2 days ago",
    icon: FileVideo,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    id: 5,
    name: "invoice-march.pdf",
    type: "PDF",
    size: "0.8 MB",
    date: "3 days ago",
    icon: FileText,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
]

export function RecentFiles() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Files</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          View all
        </Button>
      </div>
      <div className="divide-y divide-border">
        {recentFiles.map((file, index) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${file.bgColor}`}>
                <file.icon className={`h-5 w-5 ${file.color}`} />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {file.type} • {file.size} • {file.date}
                </p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="gap-2">
                  <Eye className="h-4 w-4" />
                  Preview
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 text-destructive">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
