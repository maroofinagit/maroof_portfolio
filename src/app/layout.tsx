import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import CursorMask from "@/components/ui/CursorMask";
import DockNavbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maroof Ali Syed | Portfolio",
  description: "Portfolio of Maroof Ali Syed - Full-Stack Developer, UI/UX Designer, Writer, and Photographer.",
  openGraph: {
    title: "Maroof Ali Syed — Full-Stack Developer | Writer",
    description:
      "Explore my projects, writings, and creative space — all in one portfolio.",
    url: "https://maroofalysyed.vercel.app/",
    siteName: "Maroof Ali Syed Portfolio",
    images: [
      {
        url: "https://maroofalysyed.vercel.app/maroof.jpg",
        width: 1200,
        height: 630,
        alt: "Maroof Ali Syed Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maroof Ali Syed — Web Developer & Writer",
    description:
      "A creative portfolio featuring projects, blogs, and poetries.",
    images: ["https://maroofalysyed.vercel.app/maroof.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DockNavbar />
        {children}
        <CursorMask />
      </body>
    </html>
  );
}
