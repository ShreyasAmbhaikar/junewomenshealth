'use client';

import React from "react";
import Accordion from "@/components/ui/Accordion";
import { siteConfig } from "@/lib/site-config";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const FaqMapSection = () => {
  const faqItems = [
    {
      question: "Where is June Women's Health clinic located in Lucknow?",
      answer: "June Women's Health is located at Felix Square (2nd Floor, Suite 212, above Axis Bank), Sushant Golf City, Lucknow 226030. The clinic is conveniently situated just 2 minutes from Lulu Mall along Amar Shaheed Path, making it easily accessible from Awadh Vihar Yojna, Sultanpur Road, Raebareli Road, Ashiyana, Alambagh, and New Gomti Nagar."
    },
    {
      question: "Who is the lead doctor at June Women's Health?",
      answer: "The clinic is led by Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon), a Senior Consultant with over 15+ years of dedicated clinical experience specializing in normal delivery, high-risk maternity care, PCOS/PCOD management, and fertility support."
    },
    {
      question: "What specialized treatments are offered at June Women's Health?",
      answer: "We provide comprehensive women's healthcare, including normal delivery, Caesarean section (LSCS), PCOS/PCOD management, infertility diagnostics & IUI guidance, cervical cancer screening & HPV vaccination, scarless hysterectomy (NDVH), and minimally invasive laparoscopic procedures."
    },
    {
      question: "Is normal delivery prioritized for expectant mothers?",
      answer: "Yes, absolutely. Dr. Shamim Sultana Yashine prioritizes natural, safe normal delivery through continuous labor monitoring and evidence-based obstetric protocols, reserving C-sections strictly for medically necessary situations."
    },
    {
      question: "Do you offer PCOS/PCOD and fertility guidance?",
      answer: "Yes. We offer personalized root-cause PCOS/PCOD programs combining low-GI dietary advice, hormonal balancing, and follicle tracking alongside comprehensive IUI and pre-conceptional fertility counselling for couples planning a family."
    }
  ];

  return (
    <section className="py-[80px] lg:py-[120px] bg-background">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-center animate-fade-in-up">
            {/* Subtitle */}

            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
              <span className="text-[13px] font-bold tracking-[0.15em] text-accent uppercase">
                COMMON QUESTIONS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[34px] md:text-[46px] font-bold text-primary leading-[1.15em] mb-8">
              Frequently asked questions
            </h2>

            {/* Accordion */}
            <Accordion items={faqItems} />
          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div 
              className="w-full h-[400px] lg:h-full rounded-[30px] overflow-hidden border border-divider/10 shadow-lg relative min-h-[400px] lg:min-h-[500px] animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <iframe 
                src={siteConfig.contact.embedMapSrc} 
                title={`${siteConfig.name}, Sushant Golf City, Lucknow`} 
                aria-label={`${siteConfig.name}, Sushant Golf City, Lucknow`}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
