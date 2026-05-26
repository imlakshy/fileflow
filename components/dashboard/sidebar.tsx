"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Zap,
  Home,
  FileImage,
  FileAudio,
  FileVideo,
  FileText,
  Archive,
  Scissors,
  Sparkles,
  Settings,
  HelpCircle,
  X,
  WifiOff,
  Wifi,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const offlineTools = [
  { name: "Images", href: "/dashboard/images", icon: FileImage },
  { name: "Audio", href: "/dashboard/audio", icon: FileAudio },
  { name: "Video", href: "/dashboard/video", icon: FileVideo },
  { name: "PDF Tools", href: "/dashboard/pdf", icon: FileText },
  { name: "Compression", href: "/dashboard/compression", icon: Archive },
  { name: "Merge/Split", href: "/dashboard/merge", icon: Scissors },
]

const aiTools = [
  { name: "AI Transcription", href: "/dashboard/ai/transcription" },
  { name: "Background Removal", href: "/dashboard/ai/background" },
  { name: "AI Enhancement", href: "/dashboard/ai/enhance" },
  { name: "AI Subtitles", href: "/dashboard/ai/subtitles" },
]

interface DashboardSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const pathname = usePathname()

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <span className="text-lg font-semibold text-foreground">FileFlow</span>
        </Link>
        <button
          onClick={onClose}
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {/* Home */}
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
            pathname === "/dashboard"
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>

        {/* Offline Tools Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 px-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Offline Tools
            </span>
            <Badge variant="outline" className="gap-1 px-1.5 py-0 text-[10px]">
              <WifiOff className="h-2.5 w-2.5" />
            </Badge>
          </div>
          <div className="space-y-1">
            {offlineTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === tool.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <tool.icon className="h-4 w-4" />
                {tool.name}
              </Link>
            ))}
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 px-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              AI Tools
            </span>
            <Badge 
              variant="outline" 
              className="gap-1 px-1.5 py-0 text-[10px] border-[oklch(0.75_0.2_290)]/30 text-[oklch(0.85_0.15_290)]"
            >
              <Wifi className="h-2.5 w-2.5" />
            </Badge>
          </div>
          <div className="space-y-1">
            {aiTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === tool.href
                    ? "bg-[oklch(0.75_0.2_290)]/10 text-[oklch(0.85_0.15_290)]"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Sparkles className="h-4 w-4" />
                {tool.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-border p-4 space-y-1">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <Link
          href="/dashboard/help"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <HelpCircle className="h-4 w-4" />
          Help & Support
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-border bg-card lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: -288 }}
              animate={{ x: 0 }}
              exit={{ x: -288 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-card lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
