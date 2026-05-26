"use client"

import {
  Cpu,
  ShieldCheck,
  Wifi,
  Sparkles,
  FileText,
} from "lucide-react"

export default function SystemStats() {
  const stats = [
    {
      title: "Local AI Engine",
      description: "On-device processing enabled",
      icon: Sparkles,
      value: "Active",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Privacy Protected",
      description: "Files never leave your device",
      icon: ShieldCheck,
      value: "100%",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Offline Ready",
      description: "Core tools available offline",
      icon: Wifi,
      value: "Ready",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      title: "Files Processed",
      description: "Total local conversions",
      icon: FileText,
      value: "1,284",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon

        return (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-[#060B14] p-5 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg}`}
              >
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>

              <Cpu className="h-4 w-4 text-white/20" />
            </div>

            <div className="mt-5 space-y-1">
              <h3 className="text-sm text-white/60">
                {stat.title}
              </h3>

              <p className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </p>

              <p className="text-xs text-white/40">
                {stat.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}