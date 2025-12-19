import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import type { Viewport } from "next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
export const metadata: Metadata = {
  metadataBase: new URL("https://jarayid.com"),
  title: "جرائد | منصة أخبار عربية مدعومة بالذكاء الاصطناعي",
  description: "جرائد هي منصة أخبار عربية مدعومة بالذكاء الاصطناعي، تجمع وتلخّص الأخبار الموثوقة من مختلف أنحاء الشرق الأوسط والعالم. اقرأ أقل، وافهم أكثر، عندما تصبح الأخبار ذكية.",
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
  openGraph: {
    type: "website",
    title: "جرائد | منصة أخبار عربية مدعومة بالذكاء الاصطناعي",
    description: "جرائد هي منصة أخبار عربية مدعومة بالذكاء الاصطناعي، تجمع وتلخّص الأخبار الموثوقة من مختلف أنحاء الشرق الأوسط والعالم. اقرأ أقل، وافهم أكثر، عندما تصبح الأخبار ذكية.",
    siteName: "Jarayid.com",
    url: "https://jarayid.com",
     images: [
     {
      url: "/favicon-32x32.png", // relative path works for public folder
      width: 1200,
      height: 630,
      alt: "جرائد | منصة أخبار عربية مدعومة بالذكاء الاصطناعي",
    },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "جرائد | منصة أخبار عربية مدعومة بالذكاء الاصطناعي",
    description: "جرائد هي منصة أخبار عربية مدعومة بالذكاء الاصطناعي، تجمع وتلخّص الأخبار الموثوقة من مختلف أنحاء الشرق الأوسط والعالم. اقرأ أقل، وافهم أكثر، عندما تصبح الأخبار ذكية.",
  },
  
  alternates: {
    canonical: "https://jarayid.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {gaTrackingId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
