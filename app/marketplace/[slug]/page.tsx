import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/components/language-context"
import { MarketplaceProductDetail } from "@/components/marketplace/marketplace-product-detail"
import { getProductBySlug, MARKETPLACE_PRODUCTS } from "@/lib/marketplace/marketplace-data"

export function generateStaticParams() {
  return MARKETPLACE_PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.nameEn} | PENCIL Marketplace`,
    description: product.taglineEn,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <LanguageProvider>
      <MarketplaceProductDetail product={product} />
    </LanguageProvider>
  )
}

