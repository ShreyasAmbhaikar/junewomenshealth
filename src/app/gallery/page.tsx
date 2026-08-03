"use client";

import React, { useState } from "react";
import PageHeader from "@/components/landing/PageHeader";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
  categoryLabel: string;
  title: string;
}

export default function GalleryPage() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/best-gynecologist-in-lucknow/" },
    { label: "Gallery" },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 101,
      type: "video",
      src: "/images/june-gallery-video-1.mp4",
      alt: "Clinic walkthrough and overview video of June Women's Health in Lucknow",
      categoryLabel: "Clinic Tour",
      title: "June Women's Health Tour Video",
    },
    {
      id: 102,
      type: "video",
      src: "/images/june-gallery-video-2.mp4",
      alt: "Patient care and consultation overview video at June Women's Health",
      categoryLabel: "Patient Care",
      title: "Patient Care & Consultation Video",
    },
    {
      id: 1,
      type: "image",
      src: "/images/june-gallery-image-1.webp",
      alt: "Modern consultation suite at June Women's Health, Sushant Golf City, Lucknow",
      categoryLabel: "Consulting Suite",
      title: "Doctor's Consulting Room",
    },
    {
      id: 2,
      type: "image",
      src: "/images/june-gallery-image-2.webp",
      alt: "State-of-the-art diagnostic and medical equipment at June Women's Health",
      categoryLabel: "Medical Equipment",
      title: "Advanced Diagnostic Systems",
    },
    {
      id: 3,
      type: "image",
      src: "/images/june-gallery-image-3.webp",
      alt: "Comfortable patient waiting lounge at June Women's Health, Lucknow",
      categoryLabel: "Waiting Lounge",
      title: "Clinic Waiting Area",
    },
    {
      id: 4,
      type: "image",
      src: "/images/june-gallery-image-4.webp",
      alt: "Sterilized examination and treatment table at June Women's Health",
      categoryLabel: "Treatment Room",
      title: "Clinical Treatment Room",
    },
    {
      id: 5,
      type: "image",
      src: "/images/june-gallery-image-5.webp",
      alt: "Main reception and patient billing desk at June Women's Health",
      categoryLabel: "Reception Desk",
      title: "Reception & Billing Desk",
    },
    {
      id: 6,
      type: "image",
      src: "/images/june-gallery-image-6.webp",
      alt: "Specialized consultation desk of Dr. Shamim Sultana Yashine",
      categoryLabel: "Consulting Suite",
      title: "Doctor's Private Consultation Desk",
    },
    {
      id: 7,
      type: "image",
      src: "/images/june-gallery-image-7.webp",
      alt: "Patient recovery area and comfortable reclining chairs at June Women's Health",
      categoryLabel: "Patient Recovery",
      title: "Comfortable Recovery Bay",
    },
    {
      id: 8,
      type: "image",
      src: "/images/june-gallery-image-8.webp",
      alt: "Clinical sanitation station and storage space inside June Women's Health",
      categoryLabel: "Clinic Interior",
      title: "Sanitized Medical Storage Area",
    },
    {
      id: 9,
      type: "image",
      src: "/images/june-gallery-image-9.webp",
      alt: "Doctor's consultation seat and desk setup at June Women's Health",
      categoryLabel: "Consulting Suite",
      title: "Physician Consultation Area",
    },
    {
      id: 10,
      type: "image",
      src: "/images/june-gallery-image-10.webp",
      alt: "Patient examination area equipped with ultrasonic scanners at June Women's Health",
      categoryLabel: "Treatment Room",
      title: "Obstetrics Ultrasound Scan Setup",
    },
    {
      id: 11,
      type: "image",
      src: "/images/june-gallery-image-11.webp",
      alt: "Front signage and entry door of June Women's Health in Felix Square, Lucknow",
      categoryLabel: "Clinic Exterior",
      title: "Main Entrance & Signage",
    },
    {
      id: 12,
      type: "image",
      src: "/images/june-gallery-image-12.webp",
      alt: "Clean corridor connecting patient rooms at June Women's Health",
      categoryLabel: "Clinic Interior",
      title: "Clinic Access Corridor",
    },
    {
      id: 13,
      type: "image",
      src: "/images/june-gallery-image-13.webp",
      alt: "Comfortable seating arrangement inside the waiting lobby at June Women's Health",
      categoryLabel: "Waiting Lounge",
      title: "Patient Seating Area",
    },
    {
      id: 14,
      type: "image",
      src: "/images/june-gallery-image-14.webp",
      alt: "Clinical patient screening desk at June Women's Health, Sushant Golf City",
      categoryLabel: "Patient Care",
      title: "Patient Intake & Vitals Area",
    },
  ];

  const openLightbox = (index: number) => {
    setActiveItemIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setActiveItemIndex(null);
    setIsZoomed(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex(
        activeItemIndex === 0 ? galleryItems.length - 1 : activeItemIndex - 1
      );
      setIsZoomed(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex(
        activeItemIndex === galleryItems.length - 1 ? 0 : activeItemIndex + 1
      );
      setIsZoomed(false);
    }
  };

  return (
    <>
      <main>
        <PageHeader title="Our Clinic Gallery" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            {/* Header intro */}
            <div className="text-center max-w-[750px] mx-auto mb-[50px] flex flex-col gap-4">
              <span className="text-accent text-[14px] font-bold tracking-widest uppercase">
                Take a Tour
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary leading-tight">
                Step Inside {siteConfig.name}
              </h2>
              <p className="text-text text-[16px] leading-relaxed">
                Explore our state-of-the-art facilities in Sushant Golf City, Lucknow. We maintain a warm, welcoming, and sterile clinical environment equipped with premium diagnostic and patient care systems to make your visit safe and stress-free.
              </p>
            </div>

            {/* Masonry CSS Column Gallery */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border">
              {galleryItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="break-inside-avoid mb-6 group relative overflow-hidden rounded-[24px] border border-divider/10 shadow-sm cursor-zoom-in transition-all duration-500 hover:shadow-lg"
                >
                  {/* Media Element */}
                  {item.type === "video" ? (
                    <div className="relative w-full h-[240px] bg-primary flex items-center justify-center overflow-hidden">
                      <video
                        src={item.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                      {/* Play Icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  )}

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 z-10" />

                  {/* Absolute UI overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between">
                    <div>
                      <span className="text-[12px] font-bold text-accent uppercase tracking-wider block mb-1">
                        {item.categoryLabel}
                      </span>
                      <h3 className="text-white font-bold text-[18px] leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Maximize Icon */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Ribbon */}
            <div className="mt-[60px] bg-secondary border border-divider/10 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="font-bold text-[20px] text-primary mb-1">
                  Want to consult {siteConfig.doctor.name} in person?
                </h4>
                <p className="text-text text-[15px]">
                  Book an appointment online or call us directly to schedule a clinic visit today.
                </p>
              </div>
              <a
                href="/contact-us"
                className="bg-accent text-white font-bold text-[15px] px-6 py-3 rounded-[12px] hover:bg-primary transition-all duration-300 shrink-0 shadow-sm"
              >
                Schedule Clinic Visit
              </a>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeItemIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 cursor-zoom-out"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Previous Item"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Item Container */}
            <div 
              className="relative max-w-[95vw] max-h-[92vh] flex flex-col items-center justify-center z-40 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-auto max-w-full max-h-[78vh] md:max-h-[83vh] rounded-[12px] scrollbar-thin">
                {galleryItems[activeItemIndex].type === "video" ? (
                  <video
                    src={galleryItems[activeItemIndex].src}
                    controls
                    autoPlay
                    className="max-w-full max-h-[78vh] md:max-h-[83vh] rounded-[12px] shadow-2xl border border-white/10"
                  />
                ) : (
                  <img
                    src={galleryItems[activeItemIndex].src}
                    alt={galleryItems[activeItemIndex].alt}
                    onClick={() => setIsZoomed(!isZoomed)}
                    className={`object-contain shadow-2xl border border-white/10 transition-all duration-300 ${
                      isZoomed 
                        ? "max-w-none max-h-none w-[130vw] md:w-[110vw] cursor-zoom-out" 
                        : "max-w-full max-h-[78vh] md:max-h-[83vh] cursor-zoom-in"
                    }`}
                  />
                )}
              </div>
              {/* Description strip at the bottom */}
              <div className="mt-4 text-center text-white/90 px-4 max-w-[700px] pointer-events-none">
                <p className="text-[15px] md:text-[18px] font-bold leading-snug">
                  {galleryItems[activeItemIndex].title}
                </p>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Next Item"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </main>
    </>
  );
}
