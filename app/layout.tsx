import type React from "react"
import { Roboto_Mono } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { V0Provider } from "@/lib/v0-context"
import localFont from "next/font/local"
import { WagmiProviders } from "@/components/providers/wagmi-provider"

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
})

const rebelGrotesk = localFont({
  src: "../public/fonts/Rebels-Fett.woff2",
  variable: "--font-rebels",
  display: "swap",
})

const isV0 = process.env["VERCEL_URL"]?.includes("vusercontent.net") ?? false

export const metadata: Metadata = {
  title: {
    template: "%s – M.O.N.K.Y Trading",
    default: "M.O.N.K.Y Trading",
  },
  description: "Advanced trading interface for rebels. Trade with precision and style.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/fonts/Rebels-Fett.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${rebelGrotesk.variable} ${robotoMono.variable} antialiased`}>
        <V0Provider isV0={isV0}>
          <WagmiProviders>
            <div className="min-h-screen bg-background">{children}</div>
          </WagmiProviders>
        </V0Provider>
      </body>
    </html>
  )
}
