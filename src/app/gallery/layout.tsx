import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Clinic Gallery & Facilities | June Women's Health Lucknow",
  description: "Explore the modern facilities, sanitized consulting suites, and ultrasound equipment at June Women's Health in Sushant Golf City, Lucknow. Book your appointment.",
  alternates: {
    canonical: '/gallery/',
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
