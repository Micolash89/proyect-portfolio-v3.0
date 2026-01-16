import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Nicolás Espíndola | Desarrollador Frontend",
  description:
    "Desarrollador frontend apasionado por crear experiencias web innovadoras y dinámicas. Especializado en Next.js, TypeScript y animaciones web.",
  generator: "v0.app",
  keywords: ["desarrollador", "frontend", "Next.js", "TypeScript", "React", "portfolio", "web"],
  authors: [{ name: "Nicolás Espíndola" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
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
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
