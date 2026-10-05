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
  Scale, 
  AlertTriangle,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Confidential MTP & D&E Services in Sushant Golf City, Lucknow | June Women's Health",
  description: "Safe, legal, and confidential Medical Termination of Pregnancy (MTP) & D&E under Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow. Book today.",
  alternates: {
    canonical: '/mtp-d-e-services-in-lucknow/',
  }
};

export default function MtpDePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'MTP, D & E Services' },
  ];

  const safetyLegalCards = [
    { 
      title: "100% Confidentiality & Patient Privacy", 
      description: "We protect your identity and personal medical records with strict doctor-patient confidentiality, offering a non-judgmental, compassionate clinical haven.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Strict Compliance with MTP Act 2021", 
      description: "All medical consultations and clinical procedures strictly adhere to the statutory guidelines and legal parameters outlined by the Government of India's MTP Act.", 
      icon: <Scale className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Zero OTC Self-Medication Dangers", 
      description: "Unsupervised counter pills risk life-threatening pelvic hemorrhage, septic shock, and incomplete tissue retention that can permanently compromise future fertility.", 
      icon: <AlertTriangle className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Mandatory Ectopic Ultrasound Audit", 
      description: "Dr. Shamim Sultana Yashine performs an immediate transvaginal ultrasound to verify intrauterine sac location, safely ruling out ruptured ectopic pregnancies.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Diagnostic & Rh Factor Profiling", 
      description: "Screening complete blood counts, hemoglobin, and Rh blood group (administering Anti-D immunoglobulin if Rh-negative to safeguard future pregnancies).", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Sedation & Fasting Protocols", 
      description: "For daycare surgical D&E or suction evacuation, a 6-hour fasting window (no solid food or liquids) is required to ensure safe intravenous sedation.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Supportive Companion Discharge", 
      description: "While procedures are outpatient daycare, arranging for a trusted companion ensures a safe, relaxing, and comfortable journey home after recovery.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const protocolTimeline = [
    {
      title: 'Step 1: Private Consultation & Ultrasound Mapping',
      description: 'A confidential, compassionate evaluation with Dr. Shamim Sultana Yashine including pelvic ultrasound to accurately date the pregnancy and confirm intrauterine location.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Clinical Method Selection & Informed Consent',
      description: 'Selecting either medically supervised pill regimens or minor daycare surgical evacuation (D&E) based on gestation, followed by standard statutory documentation.',
      icon: <Scale className="w-5 h-5" />
    },
    {
      title: 'Step 3: Sterile Daycare Procedure Execution',
      description: 'Medical regimens are supervised with precise step-by-step guidance. Surgical evacuations are carried out in certified sterile suites under gentle sedation in 10-15 minutes.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: 14-Day Ultrasound Clearance Check',
      description: 'A mandatory follow-up visit and sonography scan 14 days post-procedure to clinically confirm complete uterine clearance and normal endometrial recovery.',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What are the legal regulations governing pregnancy termination (MTP) in India?',
      answer: 'Under the MTP Amendment Act 2021 in India, women can legally seek medical termination of pregnancy up to 20 weeks with the opinion of one registered gynecologist for reasons including contraceptive failure, maternal physical/mental health protection, or fetal abnormalities. Terminations between 20 and 24 weeks are permitted for specific vulnerable categories upon evaluation by two registered medical practitioners.'
    },
    {
      question: 'What is the difference between Medical Abortion (MTP pills) and Surgical D&E?',
      answer: 'Medical abortion utilizes prescribed oral medication (mifepristone and misoprostol) to induce natural uterine shedding, recommended strictly up to 7 weeks of gestation under clinical supervision. Surgical abortion (Dilation and Evacuation / Suction Aspiration) is a minor 10-to-15 minute daycare procedure performed under light sedation to evacuate uterine contents safely, suitable up to 12 weeks of pregnancy.'
    },
    {
      question: 'Why is taking over-the-counter (OTC) abortion pills without a doctor dangerous?',
      answer: 'Taking OTC abortion pills without a doctor\'s ultrasound and prescription is extremely dangerous. If the pregnancy is ectopic (lodged in the fallopian tube), pills will not terminate it and can cause fatal tubal rupture and internal bleeding. Unsupervised usage also leads to high rates of incomplete abortion, heavy hemorrhaging, and severe pelvic infections that cause tubal scarring and infertility.'
    },
    {
      question: 'What is the genuine cost of MTP and D&E services at June Women\'s Health?',
      answer: 'We maintain 100% transparent pricing with zero hidden charges. A pre-MTP evaluation (consultation, pelvic ultrasound scan, and basic blood profile) is ₹2,500 to ₹4,000. Supervised Medical MTP (including prescribed medication, support, and follow-up scan) ranges from ₹4,500 to ₹7,500. Daycare surgical evacuation (D&E / Suction under gentle sedation in a certified hospital suite) ranges from ₹14,000 to ₹24,000 depending on gestational duration and clinical requirements.'
    },
    {
      question: 'What is the recovery time following a surgical D&E or suction evacuation?',
      answer: 'The surgical evacuation itself takes only 10 to 15 minutes. After resting in our comfortable daycare recovery room for 2 to 3 hours, you can return home. Most women resume desk work and normal routines within 24 to 48 hours. Mild spotting and slight cramping for a few days are normal. Strenuous exercise and intercourse should be avoided for 2 weeks.'
    },
    {
      question: 'How do I book a confidential consultation with Dr. Shamim Sultana Yashine?',
      answer: 'Consultations at our Sushant Golf City clinic operate strictly by prior appointment during dedicated morning and evening hours. This ensures 100% privacy, zero crowded waiting rooms, and unhurried clinical attention. You can schedule your confidential appointment by calling our clinic directly.'
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
        <PageHeader title="MTP, D & E Services" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is MTP, D & E Services? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/mtp-overview.webp" 
                  alt="Confidential MTP and D&E medical documentation and clinical indicators in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What are Medical MTP &amp; D&amp;E Services?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Medical Termination of Pregnancy (MTP)</strong> and <strong>Dilation &amp; Evacuation (D&amp;E)</strong> are safe, medically approved procedures performed to end an unintended pregnancy or complete the management of missed and incomplete miscarriages. Receiving professional clinical care from a registered gynecologist guarantees maternal safety, minimizes complications, and preserves future reproductive health.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we provide strictly confidential, legally compliant reproductive healthcare under the MTP Act of India. We support women from Sushant Golf City, Vrindavan Yojna, Omaxe City, Arjunganj, Nilmatha, Awadh Vihar Yojna, and greater Lucknow with non-judgmental counseling and sterile medical facilities.
                </p>
                <p>
                  Our private single-doctor clinic near Lulu Mall on Shaheed Path ensures that your appointments remain private, unhurried, and completely secure from start to post-procedure recovery.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Confidential Consultation Today
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

        {/* === SECTION 2: Medical vs. Surgical Abortion: Method Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Medical vs. Surgical Abortion: Method Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Depending on gestational age and clinical history, Dr. Shamim Sultana Yashine will safely guide you to choose the most appropriate method under the MTP Act.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Medical Termination */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Medical Abortion (MTP Pills)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Non-Surgical. Early Gestation.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Gestational Age</span>
                      <p className="text-text text-[14px] leading-relaxed">Applicable strictly up to 7 weeks (49 days) of pregnancy.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Non-invasive. Involves taking prescribed DCGI-approved oral tablets.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Process</span>
                      <p className="text-text text-[14px] leading-relaxed">Induces contractions; pregnancy passes as heavy cramping at home.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Pain Management</span>
                      <p className="text-text text-[14px] leading-relaxed">Managed at home with oral analgesics; no anesthesia required.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Final Clearance</span>
                      <p className="text-text text-[14px] leading-relaxed">Highly effective, but mandatory ultrasound needed to confirm complete clearance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Surgical Termination */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Surgical Abortion (D&E / Suction)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Minor Surgical. 100% Effective.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Gestational Age</span>
                      <p className="text-text text-[14px] leading-relaxed">Performed up to 12 weeks of pregnancy (first trimester limit).</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Minor clinical procedure using sterile vacuum suction aspiration.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Process</span>
                      <p className="text-text text-[14px] leading-relaxed">Takes 10–15 minutes in a sterile operating theatre; outpatient basis.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Pain Management</span>
                      <p className="text-text text-[14px] leading-relaxed">Performed under local cervical block or light intravenous sedation.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Final Clearance</span>
                      <p className="text-text text-[14px] leading-relaxed">Provides immediate 100% complete clearing of the uterine cavity.</p>
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

        {/* === SECTION 3: Key Safety & Legal Safeguards (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Safety & Legal Safeguards" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Your health safety and complete confidentiality are our primary commitments. We maintain strict compliance with legal frameworks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {safetyLegalCards.map((card, index) => {
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
                        {card.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {card.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {card.description}
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

        {/* === SECTION 4: Our Pre-Procedure Preparation & Safe Guidelines (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Procedure Preparation & Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Meticulous preparation is vital to prevent clinical side effects and support rapid uterine healing. Review our standard safety preparation rules.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/mtp-prep.webp" 
                alt="Safe recovery guidelines and clinical MTP preparation indicators" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prepGuidelines.map((card, index) => {
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

        {/* === SECTION 5: The Confidential Protocol Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Confidential Protocol Step-by-Step" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We manage each step of the termination process in accordance with strict legal and medical safety protocols, keeping you safe and fully informed.
              </p>
              <VerticalTimeline items={protocolTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose June Women's Health for MTP, D & E Services? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for MTP &amp; D&amp;E Care
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
                      <strong className="block text-[16px] text-white">Guaranteed Confidentiality &amp; Compassion</strong>
                      <span className="text-white/80 text-[14px]">You consult directly with Dr. Shamim Sultana Yashine in an empathetic, judgment-free setting where your privacy and records are 100% safeguarded.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Full MTP Act Legal &amp; Medical Safety</strong>
                      <span className="text-white/80 text-[14px]">All clinical protocols follow the MTP Act of India with DCGI-approved regimens and sterile surgical daycare facilities in accredited tertiary hospitals.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Private Prior-Appointment Access</strong>
                      <span className="text-white/80 text-[14px]">Consultations are scheduled strictly by prior appointment in Sushant Golf City, ensuring zero waiting room crowds, prompt entry, and rapid care.</span>
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
