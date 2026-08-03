import React from "react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/best-gynecologist-in-lucknow/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact Us", href: "/contact-us" },
];

const OUR_SERVICES = [
  { label: "Normal Delivery", href: "/normal-delivery-in-lucknow/" },
  { label: "LSCS (Caesarean Section)", href: "/lscs-caesarean-section-in-lucknow/" },
  { label: "Infertility, IUI & IVF", href: "/infertility-iui-ivf-in-lucknow/" },
  { label: "Scarless Hysterectomy (NDVH)", href: "/scarless-hysterectomy-in-lucknow/" },
  { label: "PCOD / PCOS Care", href: "/pcod-pcos-care-in-lucknow/" },
  { label: "Cervical Cancer Vaccine", href: "/cervical-cancer-vaccination-screening-in-lucknow/" },
  { label: "Pre Conceptional Counselling", href: "/pre-conceptional-counselling-in-lucknow/" },
  { label: "MTP, D & E Services", href: "/mtp-d-e-services-in-lucknow/" },
  { label: "Tubal Ligation & Reversal", href: "/tubal-ligation-reversal-in-lucknow/" },
  { label: "Laparoscopic Procedures", href: "/laparoscopic-procedures-in-lucknow/" },
  { label: "Hysteroscopy", href: "/hysteroscopy-in-lucknow/" },
  { label: "Pregnancy Care", href: "/pregnancy-care-in-lucknow/" },
  { label: "High Risk Pregnancy Management", href: "/high-risk-pregnancy-management-in-lucknow/" },
  { label: "Pubertal Counselling", href: "/pubertal-counselling-in-lucknow/" },
  { label: "Menstrual Hygiene", href: "/menstrual-hygiene-in-lucknow/" },
  { label: "Contraception Advice", href: "/contraception-advice-in-lucknow/" },
  { label: "Lactational Counselling", href: "/lactational-counselling-in-lucknow/" },
  { label: "Family Planning Center", href: "/family-planning-center-in-lucknow/" },
  { label: "Pelvic Infections", href: "/pelvic-infections-treatment-in-lucknow/" },
  { label: "Cancer Screening", href: "/cancer-screening-in-lucknow/" },
  { label: "Addressing Menstrual Cycle Problems", href: "/menstrual-cycle-problems-in-lucknow/" },
];

import { siteConfig } from "@/lib/site-config";

export const Footer = () => {
  return (
    <footer className="bg-primary pt-[100px] text-white">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[40px] lg:gap-[30px] mb-[60px]">
          {/* Logo & About */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Link href="/best-gynecologist-in-lucknow/" prefetch={false} className="flex items-center gap-3 md:gap-4 shrink-0">
              <Image
                src={siteConfig.footerLogo}
                alt={siteConfig.name}
                width={131}
                height={172}
                className="w-[42px] h-[55px] md:w-[50px] md:h-[66px] object-contain"
              />
              <div className="flex flex-col text-left justify-center">
                <span className="text-[18px] md:text-[22px] font-black text-white tracking-wider leading-none font-onest uppercase">JUNE</span>
                <span className="text-[10px] md:text-[12px] font-bold text-accent-secondary tracking-[0.18em] leading-none mt-1.5 font-onest uppercase">WOMEN'S HEALTH</span>
              </div>
            </Link>
            <p className="text-white/80 text-[15px] leading-[1.6em]">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 lg:col-span-2 lg:pl-4">
            <h3 className="text-[20px] font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    prefetch={false}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <h3 className="text-[20px] font-semibold text-white">Our Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-[14px]">
              {OUR_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    prefetch={false}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3">
            <h3 className="text-[20px] font-semibold text-white">Working Hours</h3>
            <ul className="flex flex-col gap-4 text-white/80">
              <li className="flex justify-between border-b border-dark-divider pb-3">
                <span>Monday to Sunday</span>
                <div className="flex flex-col items-end text-white font-medium text-[14px]">
                  <span>Open 24 Hours</span>
                </div>
              </li>
            </ul>
            {/* Doctor Address & Phone interactive links */}
            <div className="flex flex-col gap-3.5 text-[16px] text-white/80 mt-2">
              <div className="flex items-start gap-3 leading-normal">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span>Call Clinic: </span>
                  <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-accent transition-colors duration-300">{siteConfig.contact.phone}</a>
                </div>
              </div>


              <a 
                href={siteConfig.contact.mapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 hover:text-accent transition-colors duration-300 leading-normal"
              >
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{siteConfig.contact.address}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-divider py-[30px]">
        <div className="container mx-auto max-w-[1300px] px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[15px] text-white/80">
            <p>Copyright © 2026 {siteConfig.name}. All rights reserved.</p>
            <div>
              Developed with <span className="text-accent mx-1">❤️</span> by <a href="https://wa.me/919284394722" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors duration-300">QuantumReach Media</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
