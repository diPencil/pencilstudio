import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-context"
import { MarketplacePage } from "@/components/marketplace/marketplace-page"

export const metadata: Metadata = {
  title: "Marketplace | PENCIL Studio",
  description:
    "Curated digital-product showroom by Pencil Studio. Battle-tested business engines, neural AI agents, high-volume commerce, and operational cockpits. Built by Pencil. Ready to use, customize, or scale.",
}

export default function MarketplaceRoute() {
  return (
    <LanguageProvider>
      <MarketplacePage />
    </LanguageProvider>
  )
}

