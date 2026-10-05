import React from "react";
import Image from "next/image";
import PageHeader from "@/components/landing/PageHeader";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "About June Women's Health | Best Gynecologist in Sushant Golf City, Lucknow",
  description: "Meet Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) with 15+ years of experience at June Women's Health, Felix Square, Sushant Golf City, Lucknow. Delivering compassionate, evidence-based care in pregnancy, normal delivery, PCOD, and fertility.",
  alternates: {
    canonical: "/about-us/",
  },
};

export default function AboutUsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ];


  const coreValues = [
    {
      number: "01",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14 transition-transform duration-500 group-hover:scale-110" fill="none">
          <path d="M22 10C35 8 54 14 56 28C58 42 46 54 32 56C18 58 10 46 8 32C6 18 9 12 22 10Z" className="fill-primary/5 group-hover:fill-accent/15 transition-colors duration-300" />
          <path d="M32 46C20 38 16 30 16 23C16 16.5 21 12 27 12C30.5 12 33.5 14.5 35 17C36.5 14.5 39.5 12 43 12C49 12 54 16.5 54 23C54 30 50 38 38 46L35 49L32 46Z" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 23C24 23 27 27 35 27C43 27 46 23 46 23" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="35" cy="20" r="3" className="fill-accent" />
        </svg>
      ),
      title: "Patient-First Care",
      desc: "Every healthcare journey is deeply personal. We customize every treatment plan around your physical comfort and emotional wellbeing.",
    },
    {
      number: "02",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14 transition-transform duration-500 group-hover:scale-110" fill="none">
          <path d="M18 12C32 6 48 10 54 22C60 34 56 48 42 54C28 60 14 52 10 38C6 24 4 18 18 12Z" className="fill-primary/5 group-hover:fill-accent/15 transition-colors duration-300" />
          <circle cx="28" cy="32" r="14" stroke="var(--color-primary)" strokeWidth="2.2" strokeDasharray="3 2" />
          <circle cx="28" cy="32" r="9" className="fill-accent/10 stroke-accent" strokeWidth="2" />
          <circle cx="26" cy="30" r="2.5" className="fill-accent" />
          <circle cx="31" cy="34" r="2" className="fill-accent" />
          <path d="M56 18L42 29" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M42 29L39 31.2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 32H12" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
      title: "Clinical Excellence",
      desc: "Our clinic offers state-of-the-art diagnostic screening and treatment options for pregnancy care, fertility support, advanced laparoscopic & hysteroscopic procedures, cancer screening, and cervical cancer screening and prevention.",
    },
    {
      number: "03",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14 transition-transform duration-500 group-hover:scale-110" fill="none">
          <path d="M20 8C34 6 50 14 52 26C54 38 46 52 32 56C18 60 12 46 10 32C8 18 6 10 20 8Z" className="fill-primary/5 group-hover:fill-accent/15 transition-colors duration-300" />
          <path d="M32 10L48 15V32C48 42.5 41.5 50 32 54C22.5 50 16 42.5 16 32V15L32 10Z" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 31L30 37L40 25" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Complete Transparency",
      desc: "No hidden charges or unnecessary testing. We explain every clinical finding clearly so you can make informed decisions with full confidence.",

    },
  ];

  return (
    <>
      <main>
        <PageHeader title="About Us" breadcrumbs={breadcrumbs} />
        {/* Section 1: Clinic Story */}
        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[60px] items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7">
                <span className="block text-accent text-[16px] font-bold tracking-wider uppercase mb-3">About Our Clinic</span>
                <h2 className="text-[36px] md:text-[46px] font-bold text-primary mb-6 leading-[1.2]">
                  Dedicated to providing compassionate women&apos;s healthcare
                </h2>
                <div className="text-text space-y-4 mb-8">
                  <p>
                    At <strong>June Women&apos;s Health</strong>, we believe every woman deserves access to safe, empathetic, and premium healthcare. Located at <strong>Felix Square in Sushant Golf City</strong> and serving patients across <strong>Awadh Vihar Yojna, Sultanpur Road, Raebareli Road, Ashiyana, Alambagh, Aminabad, Chowk, Indira Nagar, New Gomti Nagar</strong>, and surrounding Lucknow neighborhoods, our clinic provides state-of-the-art diagnostic screening and treatment options tailored to support you through every stage of life. Our practice is built on a foundation of clinical safety, patient-first care, and complete transparency.
                  </p>
                  <p>
                    Our clinical director, <strong>Dr. Shamim Sultana Yashine</strong>, is a board-certified <strong>Senior Consultant Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon (MS)</strong> with <strong>over 15+ Years of dedicated practice</strong>. Bringing extensive expertise in managing high-risk pregnancies, normal deliveries, and reproductive concerns, she provides unhurried, personalized single-doctor consultations. From PCOS therapies and pre-conceptional planning to advanced laparoscopic procedures and scarless surgeries, we are here to guide your health journey with absolute peace of mind.
                  </p>
                </div>
                
                {/* Mobile-only Image (above the checks) */}
                <div className="block lg:hidden mb-8 max-w-[400px] mx-auto">
                  <img
                    src="/images/june-gallery-image-2.webp"
                    alt="Dr. Shamim Sultana Yashine at her consultation desk inside June Women's Health"
                    className="w-full h-auto rounded-[30px] shadow-xl"
                    loading="lazy"
                  />
                </div>

                {/* Check list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold text-primary">15+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold text-primary">Normal Delivery Specialist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold text-primary">Infertility, IUI &amp; IVF Guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-semibold text-primary">Laparoscopic Procedures</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="hidden lg:block lg:col-span-5 xl:col-span-4 xl:col-start-9 relative">
                <img
                  src="/images/june-gallery-image-2.webp"
                  alt="Dr. Shamim Sultana Yashine at her consultation desk inside June Women's Health"
                  className="w-full h-auto rounded-[30px] shadow-xl"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Doctor Profile */}
        <section className="py-[80px] lg:py-[120px] bg-secondary">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[60px] items-center">
              
              {/* Doctor Image */}
              <div className="hidden lg:flex lg:col-span-5 justify-center">
                <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[30px] overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/images/june-gallery-image-1.webp"
                    alt="Dr. Shamim Sultana Yashine"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Doctor Details */}
              <div className="lg:col-span-7">
                <span className="block text-accent text-[16px] font-bold tracking-wider uppercase mb-3">Meet Our Expert</span>
                <h2 className="text-[36px] md:text-[44px] font-bold text-primary mb-2">Dr. Shamim Sultana Yashine</h2>
                <p className="text-[18px] text-accent font-semibold mb-6">Senior Consultant Obstetrician, Gynaecologist &amp; Laparoscopic Surgeon</p>
                
                {/* Mobile-only Doctor Image */}
                <div className="flex justify-center mb-6 lg:hidden">
                  <div className="relative w-full aspect-[4/5] rounded-[30px] overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/images/june-gallery-image-1.webp"
                      alt="Dr. Shamim Sultana Yashine"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Qualifications box */}
                <div className="bg-white rounded-[20px] p-6 border border-divider/10 shadow-sm mb-6">
                  <h3 className="text-[18px] font-bold text-primary mb-4 border-b border-divider/20 pb-2">Academic Qualifications &amp; Credentials</h3>
                  <ul className="space-y-3 text-text">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                      <span><strong>MS</strong> – Master of Surgery in Obstetrics &amp; Gynaecology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                      <span><strong>Certified Laparoscopic Surgeon</strong> – Minimally Invasive &amp; Keyhole Gynecological Surgeries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                      <span><strong>Specialized Training</strong> – Trained in Fertility Management and Advanced Laparoscopic and Hysteroscopic Procedures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                      <span><strong>Senior Consultant</strong> – Over 15+ Years of specialized clinical practice in Maternal and Reproductive Health</span>
                    </li>
                  </ul>
                </div>

                <div className="text-text italic border-l-4 border-accent pl-4 py-1 leading-[1.6]">
                  <p>
                    &ldquo;Our mission at June Women&apos;s Health is simple: to combine clinical excellence with warm, personalized attention. We walk alongside every woman to ensure her safety, comfort, and wellbeing at every milestone.&rdquo;
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Core Values */}

        <section className="py-[80px] lg:py-[120px] bg-secondary/30">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <div className="text-center max-w-[600px] mx-auto mb-[60px]">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                <span className="text-accent text-[16px] font-bold tracking-wider uppercase">Our Standards</span>
              </div>
              <h2 className="text-[32px] md:text-[44px] font-bold text-primary leading-tight">Core values that guide our practice</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {coreValues.map((val, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden bg-white p-8 md:p-10 rounded-[32px] border border-divider/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(62,78,54,0.08)] hover:-translate-y-2 transition-all duration-500 ease-out"
                >
                  {/* Interactive left accent border */}
                  <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-accent/30 group-hover:bg-accent group-hover:w-[8px] transition-all duration-300"></div>

                  {/* Faded background serial number */}
                  <div className="text-[84px] font-extrabold text-accent/5 absolute right-6 top-2 select-none group-hover:text-accent/15 transition-colors duration-500 pointer-events-none font-sans">
                    {val.number}
                  </div>

                  {/* Corner glow element */}
                  <div className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-accent/5 group-hover:bg-accent/10 group-hover:scale-150 transition-all duration-700 blur-xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="mb-8 inline-block">{val.icon}</div>                    <h3 className="text-[22px] font-bold text-primary mb-3.5 group-hover:text-accent transition-colors duration-300">{val.title}</h3>
                    <p className="text-text leading-[1.65] text-[15px] group-hover:text-text/95 transition-colors duration-300">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
