import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { UploadSection } from "@/components/landing/upload-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { OfflineToolsSection } from "@/components/landing/offline-tools-section"
import { AIToolsSection } from "@/components/landing/ai-tools-section"
import { FormatsSection } from "@/components/landing/formats-section"
import { PrivacySection } from "@/components/landing/privacy-section"
import { PWASection } from "@/components/landing/pwa-section"
import { Footer } from "@/components/landing/footer"


export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <UploadSection />
      
      {/* Feature descriptions below the fold */}
      <FeaturesSection />
      <OfflineToolsSection />
      <AIToolsSection />
      <FormatsSection />
      <PrivacySection />
      <PWASection />
      <Footer />
    </main>
  )
}
