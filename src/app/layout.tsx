import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWidgets } from "@/components/landing/FloatingWidgets";
import { siteConfig } from "@/lib/site-config";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Best Gynecologist in Sushant Golf City, Lucknow`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.doctor.name,
  publisher: siteConfig.doctor.name,
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Best Gynecologist in Sushant Golf City, Lucknow`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Best Gynecologist in Sushant Golf City, Lucknow`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Physician", "LocalBusiness"],
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}${siteConfig.logo}`,
    "image": `${siteConfig.url}${siteConfig.logo}`,
    "description": siteConfig.description,
    "telephone": siteConfig.contact.phone,
    "priceRange": "₹₹",
    "hasMap": siteConfig.contact.mapsLink,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": "Sushant Golf City, Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226030",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.781136",
      "longitude": "80.9897343"
    },
    "openingHours": siteConfig.contact.hoursShort,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.reviews.rating,
      "reviewCount": siteConfig.reviews.count,
      "bestRating": "5",
      "worstRating": "1"
    },
    "medicalSpecialty": [
      "ObstetricianGynecologist",
      "GynecologicSurgery",
      "InfertilitySpecialist"
    ],
    "areaServed": siteConfig.serviceAreas.secondary.map((area) => ({
      "@type": "AdministrativeArea",
      "name": area
    })),
    "physician": {
      "@type": "Physician",
      "name": siteConfig.doctor.name,
      "jobTitle": siteConfig.doctor.role,
      "honorificPrefix": "Dr.",
      "description": `${siteConfig.doctor.name} (${siteConfig.doctor.qualifications}) is a Senior Consultant Obstetrician, Gynaecologist & Laparoscopic Surgeon with ${siteConfig.doctor.experience} experience specializing in normal delivery, high risk pregnancy, PCOD care, and laparoscopic surgeries in Sushant Golf City, Lucknow.`
    }
  };

  return (
    <html lang="en" className={`${onest.variable} scroll-smooth antialiased overflow-x-hidden`}>
      <head>
        <meta name="theme-color" content="#3E4E36" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background">
        <Header />
        {children}
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}

