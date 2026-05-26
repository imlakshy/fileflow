"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentFiles } from "@/components/dashboard/recent-files"
import { StorageCard } from "@/components/dashboard/storage-card"
import { ProcessingQueue } from "@/components/dashboard/processing-queue"
import { DropZone } from "@/components/dashboard/drop-zone"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-72">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-8">
            {/* Drop Zone */}
            <DropZone />

            {/* Quick Actions */}
            <QuickActions />

            {/* Main Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Recent Files - Takes 2 columns */}
              <div className="lg:col-span-2">
                <RecentFiles />
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                <StorageCard />
                <ProcessingQueue />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
