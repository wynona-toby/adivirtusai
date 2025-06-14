import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkModeExtensionDetector from "./components/DarkModeExtensionDetector";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adivirtus AI - Learning & Training Solutions | Agentic AI",
  description: "Adivirtus AI transforms workforce training with personalized learning roadmaps, skill gap analysis, and agentic AI agents. Revolutionize corporate learning with AI-powered skill assessments and future-ready training solutions.",
  metadataBase: new URL('https://adivirtus.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' }
    ],
    shortcut: '/icon.svg',
    apple: '/icon-192.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adivirtus.com',
    title: 'Adivirtus AI - Learning & Training Solutions | Agentic AI',
    description: 'Adivirtus AI transforms workforce training with personalized learning roadmaps, skill gap analysis, and agentic AI agents.',
    siteName: 'Adivirtus AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adivirtus AI - Learning & Training Solutions | Agentic AI',
    description: 'Transform workforce training with AI-powered personalized learning roadmaps and skill assessments.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adivirtus AI",
    "description": "AI-powered workforce training and learning solutions with personalized learning roadmaps and skill gap analysis",
    "url": "https://adivirtus.com",
    "logo": "https://adivirtus.com/icon-192.svg",
    "foundingDate": "2024",
    "industry": "Artificial Intelligence, EdTech, Corporate Training",
    "serviceType": "AI-powered learning and development solutions",
    "areaServed": "Global",
    "offers": [
      {
        "@type": "Service",
        "name": "AI-Driven Skill Assessments",
        "description": "Adaptive AI assessments that analyze technical, soft, and cognitive skills to create comprehensive skill profiles"
      },
      {
        "@type": "Service", 
        "name": "Personalized Learning Roadmaps",
        "description": "Custom learning journeys designed with AI that curates content and adapts to individual learning styles"
      },
      {
        "@type": "Service",
        "name": "Real-Time HR Analytics",
        "description": "Comprehensive analytics dashboard showing team skill gaps, training progress, and business impact"
      },
      {
        "@type": "Service",
        "name": "Athena AI Assistant",
        "description": "24/7 AI Learning & Development advisor for instant guidance on skill development and training strategies"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://adivirtus.com"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <DarkModeExtensionDetector />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID || ''} />
      </body>
    </html>
  );
}
