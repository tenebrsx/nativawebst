import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { GeoProvider } from "@/lib/geo-context";
import WhatsappFunnel from "@/components/whatsapp-funnel";
import { JsonLd } from "@/components/json-ld";
import { organizationGraph } from "@/lib/json-ld";
import {
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_KEYWORDS,
  SITE_BRAND,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F7F8FA",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_DEFAULT_TITLE,
    template: `%s | ${SITE_BRAND}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_DO",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "r7iOJEf1fAiej4Xxha2R1AnPQ2dxDJ-VO6ZLnLNZW-M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-3WZSQRVG5G";

  return (
    <html lang="es" className="h-full" suppressHydrationWarning>
      <body className="min-h-full" suppressHydrationWarning>
        <JsonLd data={organizationGraph()} />
        <GeoProvider>
          {children}
          <WhatsappFunnel />
        </GeoProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
