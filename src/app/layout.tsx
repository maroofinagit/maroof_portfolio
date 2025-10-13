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
