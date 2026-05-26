"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { PdfDropZone } from "@/components/pdf/pdf-drop-zone"
import { PdfTools } from "@/components/pdf/pdf-tools"
import { PdfPreview } from "@/components/pdf/pdf-preview"
import { PdfProcessingQueue } from "@/components/pdf/pdf-processing-queue"

export default function PdfToolsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col lg:pl-72">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-8">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-foreground">PDF Tools</h1>
              <p className="mt-1 text-muted-foreground">
                Convert, merge, split, compress, and edit PDF files — all processed locally on your device
              </p>
            </div>

            {/* Tools Grid */}
            <PdfTools selectedTool={selectedTool} onSelectTool={setSelectedTool} />

            {/* Drop Zone */}
            <PdfDropZone 
              selectedTool={selectedTool} 
              files={files}
              onFilesChange={setFiles}
            />

            {/* Main Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Preview - Takes 2 columns */}
              <div className="lg:col-span-2">
                <PdfPreview files={files} selectedTool={selectedTool} />
              </div>

              {/* Processing Queue */}
              <div>
                <PdfProcessingQueue />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
