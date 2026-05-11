import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "GhostChat - Chat Without a Trace",
  description:
    "Fully anonymous, peer-to-peer encrypted messaging. No phone number. No email. Just a key only you control.",
  openGraph: {
    title: "GhostChat",
    description: "Chat without a trace. No number. No server. Just you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080808] text-[#f0f0f0]">{children}</body>
    </html>
  );
}
