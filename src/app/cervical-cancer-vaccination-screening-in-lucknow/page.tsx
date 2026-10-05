import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import { Button } from '@/components/ui/Button';
import { 
  ShieldCheck, 
  CheckCircle, 
  Activity, 
  Heart, 
  Stethoscope, 
  Calendar, 
  Clock, 
  Shield, 
  HeartPulse, 
  Smile, 
  Star, 
  Sparkles,
  ClipboardList
} from 'lucide-react';

export const metadata = {
  title: "Best Cervical Cancer Screening & HPV Vaccine in Sushant Golf City, Lucknow | June Women's Health",
  description: "Gentle Pap Smear tests, HPV DNA testing, and cervical cancer vaccinations (Gardasil 9 & Cervavac) under Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow. Book a confidential consult.",
  alternates: {
    canonical: '/cervical-cancer-vaccination-screening-in-lucknow/',
  }
};

export default function CervicalCancerPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cervical Screening & HPV Vaccine' },
  ];

  const screeningPrograms = [
    { 
      title: "Liquid-Based Cytology (LBC Pap Smear)", 
      description: "Collecting cervical cellular samples using gentle, sterile cytobrushes to detect pre-malignant cervical dysplasias up to a decade before oncogenic progression.", 
      icon: <Stethoscope className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "High-Risk HPV DNA Genotyping", 
      description: "PCR-based molecular screening to isolate oncogenic Human Papillomavirus strains (specifically HPV 16, 18, 31, 33, 45) responsible for the vast majority of cervical neoplasms.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Magnified Colposcopic Assessment", 
      description: "Utilizing binocular optical colposcopy with acetic acid and Lugol's iodine staining to evaluate abnormal Pap smears and guide targeted micro-punch biopsies.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Preventive Well-Woman Checkups", 
      description: "Routine physical examinations of the cervix, vaginal mucosa, and bimanual pelvic organs in an unhurried, respectful, and private clinical environment.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const vaccineSchedules = [
    { 
      title: "Adolescent Protocol (Ages 9 to 14)", 
      description: "Administering a 2-dose regimen (0 and 6 months). Vaccinating early stimulates peak humoral antibody titers before any potential exposure to the virus.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Young Adult Catch-Up (Ages 15 to 45)", 
      description: "Administering a 3-dose regimen (0, 1-2, and 6 months) to deliver robust protective immunity for sexually active or adult women against oncogenic strains.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Co-Testing Surveillance Intervals", 
      description: "For women aged 30+, combining Pap smear and HPV DNA co-testing every 5 years (or standalone Pap smear every 3 years starting from age 21) ensures complete safety.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const vaccinationTimeline = [
    {
      title: 'Step 1: Clinical History & Vaccine Selection',
      description: 'Dr. Shamim Sultana Yashine reviews your previous screening history, age, and individual preferences to recommend either Gardasil 9 or Cervavac according to national guidelines.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Gentle Cervical Specimen Collection',
      description: 'If screening is indicated, a painless liquid-based Pap smear or HPV DNA swab is collected with soft cytobrushes, ensuring complete comfort and privacy.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Cold-Chain Vaccine Administration',
      description: 'Administering the chosen HPV vaccine via a gentle intramuscular injection into the deltoid muscle under strict cold-chain and sterile clinic protocols.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Dose Tracking & Digital Reminders',
      description: 'Logging the vaccine batch details and sending automated digital scheduling reminders to ensure timely completion of all required follow-up doses.',
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What is the clinical difference between a Pap smear and an HPV DNA test?',
      answer: 'A Pap smear checks for abnormal cellular morphology (cytology) on the surface of the cervix caused by viral injury, whereas an HPV DNA test detects the actual viral genetic material of high-risk HPV strains. For women aged 30 and older, combining both tests (co-testing) provides over 98% clinical accuracy in preventing cervical cancer.'
    },
    {
      question: 'What is the recommended age to receive the HPV vaccine in Lucknow?',
      answer: 'The ideal window to receive the HPV vaccine is between the ages of 9 and 14, requiring only 2 doses for lifelong antibody protection. However, women and young adults aged 15 to 45 who missed their childhood vaccination can receive the 3-dose catch-up schedule with excellent preventive efficacy.'
    },
    {
      question: 'What is the cost of Pap smears and HPV vaccines at June Women\'s Health?',
      answer: 'We believe in 100% financial transparency. A Liquid-Based Cytology (LBC) Pap smear test is ₹1,600 to ₹2,000, while an HPV DNA co-test is ₹3,200 to ₹4,200. For vaccination, India\'s quadrivalent Cervavac (Serum Institute) is approximately ₹2,200 per dose, and the international nonavalent Gardasil 9 (MSD) is approximately ₹10,850 per dose.'
    },
    {
      question: 'Can married or sexually active women still benefit from the HPV vaccine?',
      answer: 'Yes! Sexually active and married women still gain immense protective value from the vaccine. Even if you have been exposed to one strain in the past, the multi-strain vaccine shields you against all other high-risk oncogenic HPV types covered in the formulation.'
    },
    {
      question: 'Do I still need routine Pap smear tests if I have taken all HPV vaccine doses?',
      answer: 'Yes. While HPV vaccines protect against the strains responsible for 70% to 90% of cervical cancers, they do not cover every rare viral subtype. Continued screening with Pap smears or co-testing every 3 to 5 years is recommended by international gynecological guidelines.'
    },
    {
      question: 'How do I book a cervical cancer screening appointment in Sushant Golf City?',
      answer: 'Consultations and screenings at our Sushant Golf City clinic operate strictly by prior appointment during dedicated morning and evening hours. Dr. Shamim Sultana Yashine personally conducts all Pap smear collections and vaccine counseling in a sanitized, confidential environment.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <PageHeader title="Cervical Screening & HPV Vaccine" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is Cervical Screening & HPV Vaccine? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/cervical-overview.webp" 
                  alt="Cervical Screening and HPV Vaccine Vial representation for Cervical Cancer Prevention in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Cervical Cancer Screening &amp; HPV Vaccination?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Cervical cancer is almost entirely preventable when proactive medical screening is paired with protective immunization. Caused primarily by persistent infections with high-risk strains of the <strong>Human Papillomavirus (HPV)</strong>, it develops silently over many years through detectable pre-cancerous cervical cellular changes (dysplasia).
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we offer gentle, evidence-based cervical wellness programs. From high-accuracy Liquid-Based Cytology (LBC) Pap smears and high-risk HPV DNA testing to DCGI-approved HPV vaccines (Gardasil 9 and Cervavac), we provide complete preventive care.
                </p>
                <p>
                  Serving women and families across Sushant Golf City, Vrindavan Yojna, Omaxe City, Arjunganj, Nilmatha, Awadh Vihar Yojna, and greater Lucknow, our private single-doctor clinic near Lulu Mall on Shaheed Path ensures total confidentiality and unhurried clinical attention.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Preventative Consultation Today
              </Button>
            </div>

          </div>
        </section>

        {/* === Wave Divider 1 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 2: Cervavac vs. Gardasil 9: HPV Vaccine Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Cervavac vs. Gardasil 9: HPV Vaccine Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We offer both globally established vaccines and India's newly developed indigenous cervical cancer vaccine. Understanding their differences helps you make an informed preventive choice.
            </p>

            {/* Custom Comparison layout styled exactly like Image Attachment 3 in PCOS section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Gardasil 9 */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Gardasil 9 (Nonavalent)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Broad Protection. Global Standard.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Strain Coverage</span>
                      <p className="text-text text-[14px] leading-relaxed">Protects against 9 HPV strains (6, 11, 16, 18, 31, 33, 45, 52, 58).</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Data</span>
                      <p className="text-text text-[14px] leading-relaxed">Over a decade of global clinical data confirming high efficacy in cancer prevention.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Target Age Range</span>
                      <p className="text-text text-[14px] leading-relaxed">Approved for males and females aged 9 to 45 years to prevent genital warts and cancers.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Approval Status</span>
                      <p className="text-text text-[14px] leading-relaxed">WHO pre-qualified and widely approved internationally as the primary preventive tool.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cost Indication</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher cost per dose (~₹10,850) due to imported nonavalent formulation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Cervavac */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Cervavac (Quadrivalent)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Indigenous Efficacy. Affordable Care.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Strain Coverage</span>
                      <p className="text-text text-[14px] leading-relaxed">Protects against 4 high-risk HPV strains (6, 11, 16, 18), covering main Indian variants.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Data</span>
                      <p className="text-text text-[14px] leading-relaxed">Developed by Serum Institute of India; shows robust antibody response for the Indian population.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Target Age & Gender</span>
                      <p className="text-text text-[14px] leading-relaxed">Approved for girls and young women aged 9 to 26 years to prevent cervical cancer risk.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Approval Status</span>
                      <p className="text-text text-[14px] leading-relaxed">Approved by DCGI (Drugs Controller General of India) for local public vaccination campaigns.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cost Indication</span>
                      <p className="text-text text-[14px] leading-relaxed">Highly cost-effective formulation (~₹2,200 per dose), lowering the financial barrier.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* === Wave Divider 2 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 3: Comprehensive Cervical Screening Programs (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Comprehensive Cervical Screening Programs" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Early detection is the single most powerful defense against cervical anomalies. We utilize modern diagnostic methods to identify changes years before they turn malignant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {screeningPrograms.map((program, index) => {
                const pastels = [
                  { cardBg: 'bg-[#F2FBF5]', blob1: 'bg-[#B8E6C4]', blob2: 'bg-[#D1F2D9]', iconBg: 'bg-[#D1F2D9]', text: 'text-[#15332B]', descText: 'text-[#2D5545]' },
                  { cardBg: 'bg-[#EEF4FF]', blob1: 'bg-[#B3D1FF]', blob2: 'bg-[#C4DEFF]', iconBg: 'bg-[#C4DEFF]', text: 'text-[#142952]', descText: 'text-[#2B4A7A]' },
                  { cardBg: 'bg-[#F6F1FF]', blob1: 'bg-[#D4BFFF]', blob2: 'bg-[#E2D4FF]', iconBg: 'bg-[#E2D4FF]', text: 'text-[#2A1650]', descText: 'text-[#4A3270]' },
                  { cardBg: 'bg-[#FFF6EE]', blob1: 'bg-[#FFD4A8]', blob2: 'bg-[#FFE2C2]', iconBg: 'bg-[#FFE2C2]', text: 'text-[#4A2E0F]', descText: 'text-[#6B4A25]' },
                ];
                const style = pastels[index % pastels.length];
                
                return (
                  <div key={index} className={`${style.cardBg} p-7 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 group relative overflow-hidden hover:-translate-y-1 border border-black/[0.04]`}>
                    <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[35px] opacity-70 ${style.blob1} group-hover:scale-150 transition-transform duration-1000 ease-out`}></div>
                    <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[35px] opacity-70 ${style.blob2} group-hover:scale-150 transition-transform duration-1000 ease-out`}></div>
                    
                    <div className="relative z-10">
                      <div className={`mb-5 ${style.iconBg} w-14 h-14 rounded-[16px] flex items-center justify-center ${style.text} group-hover:scale-110 transition-transform duration-500`}>
                        {program.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {program.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {program.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Recommended HPV Vaccination & Screening Schedules (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="HPV Vaccination & Screening Schedules" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Adhering to correct age-based guidelines ensures the highest level of preventive immunity. Let us review the primary dosing schedules.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/cervical-prep.webp" 
                alt="PCOS and Cervical Cancer Prevention Lifestyle and Timeline Support Diagram" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vaccineSchedules.map((card, index) => {
                const prepColors = [
                  { bg: 'bg-[#FDE8EC]', num: 'text-[#E8475F]', iconBg: 'bg-[#F9CDD5]' },
                  { bg: 'bg-[#FFF3E0]', num: 'text-[#F5A623]', iconBg: 'bg-[#FFE0B2]' },
                  { bg: 'bg-[#E8F5E9]', num: 'text-[#4CAF50]', iconBg: 'bg-[#C8E6C9]' },
                ];
                const c = prepColors[index % prepColors.length];
                return (
                  <div key={index} className={`${c.bg} p-7 rounded-[24px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden border border-black/[0.03]`}>
                    <div className={`absolute -top-2 -right-1 text-[80px] font-black leading-none opacity-[0.06] ${c.num} pointer-events-none select-none`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className={`${c.iconBg} w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <h3 className="text-[18px] font-bold text-primary mb-2 leading-snug">{card.title}</h3>
                    <p className="text-text text-[14px] leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 5: The Clinical Screening and Vaccination Journey (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Clinical Screening & Vaccination Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We maintain strict sterilized clinical environment protocols for every procedure. Your screening or vaccination is structured systematically to guarantee comfort and clinical accuracy.
              </p>
              <VerticalTimeline items={vaccinationTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose June Women's Health for Cervical Screening & HPV Vaccine? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for Cervical Prevention
                </h3>
                
                {/* Google Rating (Mobile Only - Below Heading) */}
                <div className="block md:hidden w-full max-w-[280px] bg-white/10 border border-white/15 p-6 rounded-[24px] text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="text-[42px] font-bold text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] leading-none">5.0</div>
                  </div>
                  <p className="text-[13px] font-bold uppercase tracking-wider text-white/90 mb-1">Google Rating</p>
                  <p className="text-[14px] text-white/80">Based on 11 Reviews</p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Gynecologist Sample Collection</strong>
                      <span className="text-white/80 text-[14px]">Avoid delegated lab tech sampling. Every Pap smear cytology swab is personally collected by Dr. Shamim Sultana Yashine, ensuring clinical accuracy and gentle comfort.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">DCGI-Approved Cold-Chain Vaccines</strong>
                      <span className="text-white/80 text-[14px]">Direct access to authentic, refrigerated vaccines including India's indigenous Cervavac and the global standard nonavalent Gardasil 9.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Strict Prior-Appointment Privacy</strong>
                      <span className="text-white/80 text-[14px]">Screenings and vaccine schedules are coordinated strictly by appointment during dedicated clinic hours in Sushant Golf City, ensuring total confidentiality and zero wait times.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="hidden md:flex w-full md:w-[35%] lg:w-[30%] justify-center md:justify-end shrink-0 relative z-10">
                <div className="bg-white/10 border border-white/15 p-8 rounded-[24px] text-center w-full max-w-[280px] backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="text-[52px] font-bold text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] leading-none">5.0</div>
                  </div>
                  <p className="text-[14px] font-bold uppercase tracking-wider text-white/90 mb-1">Google Rating</p>
                  <p className="text-[15px] text-white/80">Based on 11 Reviews</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* === Wave Divider 6 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 7: Frequently Asked Questions (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* FAQs */}
            <div>
              <AnimatedHeading 
                text="Frequently Asked Questions" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[30px] leading-tight text-center" 
              />
              <Accordion items={faqs} />
              
              <div className="mt-[50px] text-center">
                <Button href="/contact-us" variant="primary" icon size="lg">
                  Have More Questions? Schedule a Visit Today
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
