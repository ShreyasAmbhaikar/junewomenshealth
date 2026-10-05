import React from "react";
import PageHeader from "@/components/landing/PageHeader";
import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `Contact Best Gynecologist in Sushant Golf City, Lucknow | ${siteConfig.name}`,
  description: `Book consultation with Dr. Shamim Sultana Yashine at June Women's Health, Felix Square, Sushant Golf City, Lucknow. 2 mins from Lulu Mall, easily accessible from Vrindavan Yojna and Omaxe City. Call 080900 99133.`,
  alternates: {
    canonical: "/contact-us/",
  },
};

export default function ContactUsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  return (
    <>
      <main>
        <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />

        {/* Info Boxes Section */}
        <section className="py-[80px] lg:py-[100px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Schedule Hours */}
              <div className="bg-secondary p-8 rounded-[30px] border border-divider/10 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full text-primary">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-[24px] font-bold text-primary mb-2">Schedule Hours</h3>
                <p className="text-text mb-6 text-[15px]">Clinic timing and consultation schedule.</p>
                <ul className="space-y-3 text-text">
                  <li className="flex justify-between pb-2">
                    <span className="capitalize font-semibold text-primary">Monday - Sunday</span>
                    <div className="flex flex-col items-end text-right font-medium">
                      <span>Open 24 Hours</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Our Locations */}
              <div className="bg-accent text-white p-8 rounded-[30px] border border-white/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center text-white mb-6 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-2">Our Location</h3>
                <p className="text-white/80 mb-6 text-[15px]">Felix Square, 2nd Floor, Above Axis Bank (2 mins from Lulu Mall).</p>
                <a 
                  href={siteConfig.contact.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors duration-300 font-semibold leading-[1.6] block"
                >
                  {siteConfig.contact.address}
                </a>
              </div>

              {/* Contact Us */}
              <div className="bg-primary text-white p-8 rounded-[30px] border border-white/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-2">Contact Us</h3>
                <p className="text-white/80 mb-6 text-[15px]">Reach out for pregnancy and gynecological support.</p>
                <div className="space-y-3">
                  <a 
                    href={`tel:${siteConfig.contact.phoneRaw}`} 
                    className="flex items-center gap-3 text-white font-bold hover:text-white/80 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Section (Full Width aligned) */}
        <section className="pb-[80px] lg:pb-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="w-full h-[450px] lg:h-[550px] rounded-[30px] overflow-hidden border border-divider/10 shadow-lg relative">
              <iframe 
                src={siteConfig.contact.embedMapSrc} 
                title={`${siteConfig.name}, Golf City, Lucknow`} 
                aria-label={`${siteConfig.name}, Golf City, Lucknow`}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
