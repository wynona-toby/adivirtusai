import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkModeExtensionDetector from "./components/DarkModeExtensionDetector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adivirtus AI - Intelligent Solutions",
  description: "Advanced AI solutions for modern businesses",
  icons: {
    icon: [
      { url: '/icon.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' }
    ],
    shortcut: '/icon.svg',
    apple: '/icon-192.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <DarkModeExtensionDetector />
      </body>
    </html>
  );
}
