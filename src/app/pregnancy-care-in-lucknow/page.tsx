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
  Apple, 
  AlertTriangle,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Pregnancy Care & Maternity Doctor in Sushant Golf City, Lucknow | June Women's Health",
  description: "Get expert maternity care, prenatal checkups, ultrasound scans, and delivery planning under Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow. Book today.",
  alternates: {
    canonical: '/pregnancy-care-in-lucknow/',
  }
};

export default function PregnancyCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pregnancy Care (Maternity)' },
  ];

  const maternalIndicators = [
    { 
      title: "Blood Pressure & Preeclampsia Surveillance", 
      description: "Rigorous arterial pressure tracking and urine protein screening at each antenatal consultation to preempt gestational hypertension and protect placental blood flow.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Gestational Glycemic Control", 
      description: "Standard 75g oral glucose challenge profiling between weeks 24 and 28 to detect gestational diabetes early and formulate customized medical nutrition therapy.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Ultrasound Biometry & Amniotic Index", 
      description: "Serial anatomical scans evaluating abdominal circumference, femur length, and amniotic fluid index (AFI) to safeguard steady fetal maturation.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Hematological & Iron Optimization", 
      description: "Continuous maternal ferritin and complete blood count profiling to avert third-trimester fatigue, support blood volume expansion, and prepare for delivery.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Antenatal Health Diary", 
      description: "Recording daily fetal kick counts, blood pressure readings, and bodily changes after week 28 to review closely during your clinical checkups.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Tailored Micronutrient Protocol", 
      description: "Following prescribed methylfolate, elemental iron, calcium citrate, and DHA supplementation alongside a nutrient-dense, balanced maternal diet.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Birth Readiness & Hospital Alignment", 
      description: "Identifying early labor signs, organizing hospital documentation, and aligning birth preferences with Dr. Shamim Sultana Yashine well before your due date.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const trimesterTimeline = [
    {
      title: 'First Trimester: Embryonic Foundation (Weeks 1-12)',
      description: 'Confirming intrauterine gestational sac viability, dating ultrasound for accurate EDD calculation, baseline metabolic profiling, and starting essential neural tube folic acid supplementation while managing early nausea and fatigue.',
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: 'Second Trimester: Fetal Organogenesis & Growth (Weeks 13-28)',
      description: 'Comprehensive Level-II anomaly scan (18-20 weeks) to assess fetal organ architecture, cervical length screening, glucose tolerance screening (GTT), and nutritional iron-calcium supplementation.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Third Trimester: Fetal Maturation & Labor Prep (Weeks 29-40)',
      description: 'Bi-weekly then weekly clinical evaluations, fetal Doppler flow studies, non-stress testing (NST), pelvic maturity checks, and finalizing your personalized normal or planned birth strategy.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Postnatal Phase: Healing & Lactation Mastery (Weeks 1-6)',
      description: 'Comprehensive postpartum physical evaluation, uterine involution checks, emotional wellness screening, and specialized one-on-one lactation coaching.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What is included in comprehensive pregnancy care at June Women\'s Health?',
      answer: 'Our maternity program covers complete antenatal clinical visits, precision ultrasound growth tracking, maternal hemodynamic monitoring (blood pressure and blood sugar), evidence-based micronutrient prescriptions, high-resolution anomaly scans, and personalized delivery planning under Dr. Shamim Sultana Yashine.'
    },
    {
      question: 'What is the recommended frequency for prenatal visits during pregnancy?',
      answer: 'In an uncomplicated, healthy pregnancy, appointments are scheduled every 4 weeks until week 28, every 2 weeks from weeks 28 to 36, and weekly from week 36 onwards until delivery to closely monitor fetal presentation, amniotic fluid, and labor readiness.'
    },
    {
      question: 'What are the consultation and pregnancy care fees at the clinic in Sushant Golf City?',
      answer: 'At June Women\'s Health, we maintain complete fee clarity. A private antenatal consultation with Dr. Shamim Sultana Yashine is ₹600. Routine trimester laboratory panels range from ₹3,500 to ₹5,500. Hospital delivery packages with our affiliated tertiary hospitals in Lucknow range from ₹35,000 to ₹55,000 for normal deliveries and ₹50,000 to ₹75,000 for cesarean births depending on room category.'
    },
    {
      question: 'How do registered patients reach the doctor for urgent questions or concerns?',
      answer: 'Registered antenatal patients receive direct communication channels with Dr. Shamim Sultana Yashine for non-emergency guidance. If acute symptoms occur—such as bright bleeding, fluid leakage, or severe abdominal pain—patients are admitted immediately to our affiliated tertiary hospital for round-the-clock emergency obstetric care.'
    },
    {
      question: 'Which prenatal scans and blood tests are essential during each trimester?',
      answer: 'Essential milestones include: 1. Early viability dating scan (weeks 6-8); 2. NT Scan and Dual Marker blood screen (weeks 11-13.6) for chromosomal safety; 3. Detailed Level-II Anomaly Scan (weeks 18-20); 4. Oral Glucose Tolerance Test (weeks 24-28); and 5. Third-trimester Growth & Color Doppler scans to evaluate placental circulation.'
    },
    {
      question: 'How are hospital deliveries conducted under Dr. Shamim Sultana Yashine?',
      answer: 'Routine prenatal consultations and outpatient monitoring occur in our clinic in Sushant Golf City. When labor begins, deliveries and procedures are conducted by Dr. Shamim Sultana Yashine at top affiliated hospitals in Lucknow equipped with state-of-the-art labor suites, adult ICUs, and advanced Level-III NICU facilities.'
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
        <PageHeader title="Pregnancy Care (Maternity)" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Pregnancy Care (Maternity)? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/pregnancy-overview.webp" 
                  alt="Detailed medical 3D illustration showing a healthy pregnant uterus with developing fetus in head-down position in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Comprehensive Pregnancy Care?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Pregnancy Care (Maternity Care)</strong> represents the proactive clinical, nutritional, and emotional framework designed to nurture maternal health and foster optimal fetal growth from conception through postpartum recovery. Consistent antenatal evaluations prevent complications, detect subtle maternal-fetal changes early, and build confidence for childbirth.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we provide personalized, unhurried maternity care. Serving families across Sushant Golf City, Vrindavan Yojna, Omaxe City, Arjunganj, Nilmatha, Awadh Vihar Yojna, and greater Lucknow, we ensure every mother understands her ultrasound milestones and test reports in a calm, supportive setting.
                </p>
                <p>
                  Operating as a dedicated single-doctor practice near Lulu Mall on Shaheed Path, our clinic guarantees direct continuity of care with Dr. Shamim Sultana Yashine at every appointment, ensuring zero lobby crowds and a pristine, highly sterilized clinical atmosphere.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Prenatal Consultation Today
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

        {/* === SECTION 2: Routine vs. High-Risk Pregnancy Care: Method Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Low-Risk vs. High-Risk Pregnancy Care" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We monitor both routine low-risk pregnancies and complex high-risk conditions with specialized clinical pathways, prioritizing maternal safety.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Routine Pregnancy Care */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Routine Care (Low-Risk)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Standard Monitoring. Fetal Milestones.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Focus</span>
                      <p className="text-text text-[14px] leading-relaxed">Tracking standard growth indicators, maternal vitals, and checking baby heartbeat.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Visit Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Standard antenatal schedule: monthly up to week 28, bi-weekly up to week 36, then weekly.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Delivery Planning</span>
                      <p className="text-text text-[14px] leading-relaxed">Strong emphasis on normal vaginal birth, pelvic stamina preparation, and breathing cycles.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Diagnostic Profiling</span>
                      <p className="text-text text-[14px] leading-relaxed">Routine trimester lab checks, NT screenings, anomaly scan, and growth check scans.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Postpartum Recovery</span>
                      <p className="text-text text-[14px] leading-relaxed">Standard 6-week recovery checks, newborn care tracking, and basic lactation counseling.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: High-Risk Pregnancy Care */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">High-Risk Pregnancy Care</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Advanced Surveillance. Co-morbidities.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Focus</span>
                      <p className="text-text text-[14px] leading-relaxed">Close monitoring of pre-existing hypertension, gestational diabetes, twins, or history of LSCS.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Visit Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Custom, highly frequent scheduling. Regular monitoring of fetal doppler flows and cervical length.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Delivery Planning</span>
                      <p className="text-text text-[14px] leading-relaxed">Carefully coordinated hospital births at equipped tertiary centers with NICU backup options.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Diagnostic Profiling</span>
                      <p className="text-text text-[14px] leading-relaxed">Frequent ultrasound scans, non-stress tests (NST), Doppler blood flows, and growth audits.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Postpartum Recovery</span>
                      <p className="text-text text-[14px] leading-relaxed">Specialized care for surgical wound healing, blood sugar tracking, and postpartum thyroid control.</p>
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

        {/* === SECTION 3: Key Maternal Health Indicators (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Maternal Health Indicators" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Regularly checking these vital biological markers during your pregnancy is essential to prevent complications and support healthy development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {maternalIndicators.map((indicator, index) => {
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
                        {indicator.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {indicator.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {indicator.description}
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
              Preparing step-by-step during each pregnancy milestone is key to ensuring maternal safety, supporting normal births, and promoting fetal development.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pregnancy-prep.webp" 
                alt="Sterile ultrasound monitor displaying fetal scan and antenatal checklist chart" 
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

        {/* === SECTION 5: The Antenatal Care Journey Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Antenatal Care Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Antenatal care is a step-by-step process built to guide and support mother and baby through every trimester milestones successfully.
              </p>
              <VerticalTimeline items={trimesterTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose June Women's Health for Pregnancy Care (Maternity)? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Expectant Mothers Choose June Women&apos;s Health in Lucknow
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
                      <strong className="block text-[16px] text-white">Direct One-on-One Physician Relationship</strong>
                      <span className="text-white/80 text-[14px]">You are seen personally by Dr. Shamim Sultana Yashine at every single antenatal appointment, guaranteeing unhurried consultations and medical continuity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Calm &amp; Private Clinical Environment</strong>
                      <span className="text-white/80 text-[14px]">Dedicated appointment slots eliminate crowded hospital lobbies, ensuring a peaceful, sterilized space for expectant mothers and families.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Premier Hospital Delivery Partnerships</strong>
                      <span className="text-white/80 text-[14px]">Deliveries are conducted by Dr. Shamim Sultana Yashine at top-tier tertiary hospitals across Lucknow with 24/7 neonatal intensive care (NICU) backup.</span>
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
