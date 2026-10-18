import type React from "react"
import type { Metadata } from "next"
import { Alexandria, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dipencil.com"),
  title: "PENCIL Studio: Creative Digital Studio",
  description: "PENCIL Studio builds brands, websites, mobile apps, digital platforms, and business systems from scratch.",
  alternates: {
    canonical: "https://dipencil.com/",
  },
  icons: {
    icon: "/favcion.png",
    shortcut: "/favcion.png",
    apple: "/favcion.png",
  },
  openGraph: {
    siteName: "PENCIL Studio",
    title: "PENCIL Studio: Creative Digital Studio",
    description: "PENCIL Studio builds brands, websites, mobile apps, digital platforms, and business systems from scratch.",
    type: "website",
    url: "https://dipencil.com/",
    images: [
      {
        url: "/logoblack.png",
        alt: "PENCIL Studio: Creative Digital Studio",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PENCIL Studio: Creative Digital Studio",
    description: "PENCIL Studio builds brands, websites, mobile apps, digital platforms, and business systems from scratch.",
    images: [
      {
        url: "/logoblack.png",
        alt: "PENCIL Studio: Creative Digital Studio",
      },
    ],
    site: "@dipencilcom",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${alexandria.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}




