import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { MainLayout } from "@/components/layout/MainLayout";
import { Providers } from "@/components/layout/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bagy.dev"),
  title: {
    default: "Bagy Studio",
    template: "%s | Bagy Studio",
  },
  description: "A polished foundation portfolio experience prepared for future sections.",
  applicationName: "Bagy Studio",
  keywords: ["portfolio", "frontend", "nextjs", "typescript", "cybersecurity"],
  authors: [{ name: "Bagy Oussama" }],
  creator: "Bagy Oussama",
  openGraph: {
    title: "Bagy Studio",
    description: "A polished foundation portfolio experience prepared for future sections.",
    type: "website",
    url: "https://bagy.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagy Studio",
    description: "A polished foundation portfolio experience prepared for future sections.",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
