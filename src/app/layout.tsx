import type { Metadata } from "next";
import "./globals.css";
import { GeoProvider } from "@/lib/geo-context";

export const metadata: Metadata = {
  title: "Nativa | High-Performance Websites & Local SEO in Santo Domingo",
  description: "We build blazing-fast websites and handle your local Google Maps optimization in Santo Domingo, Dominican Republic. No tech jargon, zero monthly platform fees.",
  keywords: ["diseño web santo domingo", "paginas web dominicana", "desarrollo web rd", "google maps seo dominicana", "nativa web studio", "seo local santo domingo"],
  openGraph: {
    title: "Nativa | High-Performance Websites & Local SEO",
    description: "We build fast, professional websites and handle your Google Maps ranking. Based in Santo Domingo, DR.",
    url: "https://nativa.studio",
    siteName: "Nativa Web Studio",
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nativa | High-Performance Websites & Local SEO",
    description: "We build fast, professional websites and handle your Google Maps ranking. Santo Domingo, DR.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full" suppressHydrationWarning>
        {/* Local Business Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Nativa Web Studio",
              "image": "https://nativa.studio/og-image.jpg",
              "@id": "https://nativa.studio/#website",
              "url": "https://nativa.studio",
              "telephone": "+18093588113",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Winston Churchill",
                "addressLocality": "Santo Domingo",
                "addressCountry": "DO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.479,
                "longitude": -69.939
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
        <GeoProvider>
          {children}
        </GeoProvider>
      </body>
    </html>
  );
}
