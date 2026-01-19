import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const siteUrl = "https://espindola-javier.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "Javier Nicolás Espíndola | Desarrollador Fullstack",
    template: "%s | Javier Nicolás Espíndola"
  },
  description:
    "Desarrollador fullstack especializado en Next.js, TypeScript y React. Creando experiencias web modernas e innovadoras en Buenos Aires, Argentina.",
  
  keywords: [
    "Desarrollador Fullstack",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Portfolio",
    "Web Developer Argentina",
    "Desarrollador Buenos Aires"
  ],
  
  authors: [{ name: "Javier Nicolás Espíndola", url: siteUrl }],
  creator: "Javier Nicolás Espíndola",
  
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Javier Nicolás Espíndola Portfolio",
    title: "Javier Nicolás Espíndola | Desarrollador Fullstack",
    description: "Desarrollador fullstack especializado en Next.js, TypeScript y React. Creando experiencias web modernas e innovadoras.",
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Javier Nicolás Espíndola - Desarrollador Fullstack",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Javier Nicolás Espíndola | Desarrollador Fullstack",
    description: "Desarrollador fullstack especializado en Next.js, TypeScript y React.",
    creator: "@nicolas20532192", 
    images: ["/images/og-image.jpg"], 
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  icons: {
    // Favicon principal
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }, // Fallback para navegadores antiguos
    ],
    // Apple Touch Icon
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    // Íconos de Android Chrome
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster
          theme="dark"
          position="top-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              border: "1px solid #333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  )
}