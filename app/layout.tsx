import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Jarayid.com - Coming Soon",
  description: "Jarayid.com ‏ يضع اللّمسات الأخيرة على أول تطبيقٍ وموقعٍ إخباري عربي مؤتمت بالكامل،يعمل بالذكاء الاصطناعي من دون أيّ تدخّلٍ بشري،ليقدّم لكم تجربةً إخباريّة ذكيّة، سريعة،",
  keywords: [
    "Jarayid",
    "أخبار عربية",
    "إخباري عربي",
    "ذكاء اصطناعي",
    "AI news",
    "Arabic news",
    "automated news",
    "news app",
    "تطبيق أخبار",
    "موقع إخباري",
    "artificial intelligence",
    "automation",
    "news automation"
  ],
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
    title: "Jarayid.com - Coming Soon",
    description: "Jarayid.com ‏ يضع اللّمسات الأخيرة على أول تطبيقٍ وموقعٍ إخباري عربي مؤتمت بالكامل،يعمل بالذكاء الاصطناعي من دون أيّ تدخّلٍ بشري،ليقدّم لكم تجربةً إخباريّة ذكيّة، سريعة،",
    siteName: "Jarayid.com",
    url: "https://jarayid.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarayid.com - Coming Soon",
    description: "Jarayid.com ‏ يضع اللّمسات الأخيرة على أول تطبيقٍ وموقعٍ إخباري عربي مؤتمت بالكامل،يعمل بالذكاء الاصطناعي من دون أيّ تدخّلٍ بشري،ليقدّم لكم تجربةً إخباريّة ذكيّة، سريعة،",
  },
  alternates: {
    canonical: "https://jarayid.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-auto`}
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
