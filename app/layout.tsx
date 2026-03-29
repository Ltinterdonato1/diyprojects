import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diyprojects-500ad.web.app"),
  title: "DIY Projects ",
  description: "Premier builder for custom sheds, tiny homes, modern fencing, and high-quality home remodeling.",
  openGraph: {
    title: "DIY Projects",
    description: "Premier builder for custom sheds, tiny homes, modern fencing, and high-quality home remodeling.",
    url: "https://diyprojects-500ad.web.app",
    siteName: "DIY Projects",
    images: [
      {
        url: "/TinyHouse2.webp",
        width: 1200,
        height: 630,
        alt: "DIY Projects - Modern Tiny Home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIY Projects",
    description: "Premier builder for custom sheds, tiny homes, modern fencing, and high-quality home remodeling.",
    images: ["/TinyHouse2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
