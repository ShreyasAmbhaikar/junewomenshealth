import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const InfoStrip = () => {
  return (
    <div className="relative -mt-[50px] z-30">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-[30px] md:p-[40px] grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-0 items-center">
          
          {/* Phone Info */}
          <div className="flex items-center gap-[20px] w-full lg:pr-6 lg:border-r lg:border-divider h-full lg:col-span-4">
            <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-accent uppercase tracking-[0.1em] mb-1">
                Need Gynecologist Services?
              </p>
              <div className="text-[15px] font-bold text-primary leading-snug">
                Call on : <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-accent transition-colors duration-300 whitespace-nowrap">{siteConfig.contact.phone}</a>
              </div>
            </div>
          </div>

          {/* Hours Info */}
          <div className="flex items-center gap-[20px] w-full lg:px-6 lg:border-r lg:border-divider h-full lg:col-span-3">
            <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-accent uppercase tracking-[0.1em] mb-1">
                Opening Hours
              </p>
              <h4 className="text-[15px] font-bold text-primary leading-tight">
                Monday to Sunday: <br />
                <span>Open 24 Hours</span>
              </h4>
            </div>
          </div>

          {/* Address Info */}
          <div className="flex items-center gap-[20px] w-full lg:pl-6 h-full lg:col-span-5">
            <div className="w-[60px] h-[60px] rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-accent uppercase tracking-[0.1em] mb-1">
                Clinic Location
              </p>
              <a 
                href={siteConfig.contact.mapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[15px] font-bold text-primary hover:text-accent transition-colors duration-300 leading-snug"
              >
                {siteConfig.contact.address}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
