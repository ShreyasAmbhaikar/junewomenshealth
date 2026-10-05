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
  Crosshair,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Laparoscopic Gynecologist Surgeon in Sushant Golf City, Lucknow | June Women's Health",
  description: "Advanced laparoscopic keyhole surgeries (cystectomy, fibroid myomectomy, endometriosis) by Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow.",
  alternates: {
    canonical: '/laparoscopic-procedures-in-lucknow/',
  }
};

export default function LaparoscopicProceduresPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Laparoscopic Procedures' },
  ];

  const treatableConditions = [
    { 
      title: "Ovarian Cyst Removal (Cystectomy)", 
      description: "Carefully enucleating complex ovarian cysts (dermoid, chocolate endometrioma, or simple cystadenomas) while preserving ovarian cortex tissue and baseline egg reserve.", 
      icon: <Crosshair className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Uterine Fibroid Excision (Myomectomy)", 
      description: "Extracting symptomatic intramural or subserosal fibroids causing menorrhagia or pelvic pressure through 5mm keyholes, reconstructing uterine musculature for future pregnancy.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Endometriosis & Pelvic Adhesiolysis", 
      description: "Ablating and excising deep infiltrating endometriotic lesions and releasing pelvic adhesions to resolve severe dysmenorrhea and restore pelvic anatomy.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Fertility Chromopertubation & Audit", 
      description: "Performing diagnostic laparoscopy with methylene blue dye instillation to verify bilateral fallopian tube patency and detect hidden pelvic factors in subfertility.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Pre-Anesthetic Fitness Clearance", 
      description: "Completing mandatory blood coagulation panels, complete hemogram, viral markers, and chest/ECG evaluations to confirm fitness for general anesthesia.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pre-Operative Fasting & Bowel Prep", 
      description: "Adhering to an 8-hour fasting window (nil by mouth) accompanied by gentle bowel cleansing to maximize visual clearance inside the peritoneal cavity.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Early Ambulation & Recovery Care", 
      description: "Encouraging gentle walking within 4 to 6 hours post-op to disperse residual carbon dioxide gas, keeping keyhole dressings dry, and resuming normal diet gradually.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const processTimeline = [
    {
      title: 'Step 1: General Anesthesia & Optical Entry',
      description: 'Under gentle general anesthesia, a miniature 5mm to 10mm incision is placed discreetly within the umbilicus (belly button) for optical port access.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Gentle Carbon Dioxide Insufflation',
      description: 'Medical-grade CO2 gas is introduced under controlled low pressure to gently elevate the abdominal wall, creating a clear and safe working dome.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: High-Definition Scope Visualization',
      description: 'An advanced high-magnification laparoscope is introduced, projecting ultra-clear 4K visual feeds of reproductive organs onto surgical monitors.',
      icon: <Crosshair className="w-5 h-5" />
    },
    {
      title: 'Step 4: Precision Excision & Cosmetic Closure',
      description: 'Through two 5mm secondary ports, micro-instruments perform precise cyst/fibroid removal, followed by complete gas evacuation and dissolvable sutures.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What is gynecological laparoscopic surgery and what are its key clinical benefits?',
      answer: 'Gynecological laparoscopic surgery (often called keyhole or minimally invasive surgery) utilizes tiny 5mm to 10mm incisions and a miniature camera rather than a large abdominal incision. Its major clinical advantages include drastically less postoperative pain, negligible blood loss, minimal scarring, lower infection risk, and a swift return to daily life within 3 to 7 days.'
    },
    {
      question: 'Which gynecological conditions are routinely managed via laparoscopy in Lucknow?',
      answer: 'Dr. Shamim Sultana Yashine routinely treats complex ovarian cysts (dermoids, endometriomas), uterine fibroids (myomectomy), pelvic endometriosis, tubal ectopic pregnancies, pelvic adhesions, and diagnostic tubal patency assessments for subfertility via laparoscopy.'
    },
    {
      question: 'What is the genuine cost of laparoscopic gynecological surgery in Sushant Golf City?',
      answer: 'At June Women\'s Health, we ensure absolute cost transparency. Diagnostic laparoscopy with chromotubation generally ranges from ₹25,000 to ₹38,000. Operative procedures like laparoscopic cystectomy or myomectomy range from ₹55,000 to ₹1,10,000 depending on tissue pathology, surgical complexity, and the chosen hospital room category.'
    },
    {
      question: 'Why do patients sometimes experience mild shoulder pain after keyhole surgery?',
      answer: 'Mild shoulder tip soreness is a temporary, harmless phenomenon caused by residual carbon dioxide gas used during surgery to inflate the abdomen. The gas can momentarily irritate the diaphragmatic phrenic nerve, which shares nerve pathways with the shoulder. It resolves completely within 24 to 48 hours with gentle walking and warm fluids.'
    },
    {
      question: 'How quickly can I resume work and regular activities after laparoscopy?',
      answer: 'Most patients are discharged within 24 hours (or even same-day daycare for diagnostic procedures). You can walk comfortably the same evening, resume light desk work within 5 to 7 days, and return to full physical exercise within 2 to 3 weeks.'
    },
    {
      question: 'How do I schedule a laparoscopic surgical evaluation with Dr. Shamim Sultana Yashine?',
      answer: 'Consultations at our Sushant Golf City clinic operate strictly by prior appointment during dedicated morning and evening hours. Dr. Shamim Sultana Yashine personally reviews your ultrasound scans, discusses surgical alternatives, and plans your procedure with complete clinical transparency.'
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
        <PageHeader title="Laparoscopic Procedures" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is Laparoscopic Procedures? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/laparoscopy-overview.webp" 
                  alt="High definition laparoscopy camera console and keyhole surgery port visualization in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What are Advanced Laparoscopic Gynecological Procedures?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Laparoscopic (Keyhole) Surgery</strong> represents the modern benchmark in advanced gynecological surgery. By operating through tiny 5mm to 10mm incisions using high-definition surgical cameras and precision micro-instruments, surgeons can resolve deep pelvic pathologies with microscopic accuracy while leaving abdominal muscles and surrounding healthy tissues unharmed.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we deliver evidence-based minimally invasive surgical care. Dr. Shamim Sultana Yashine brings over 15+ years of dedicated surgical expertise performing laparoscopic ovarian cystectomies, fibroid myomectomies, endometriosis management, and fertility chromotubations.
                </p>
                <p>
                  Serving patients from Sushant Golf City, Raebareli Road, Sultanpur Road, New Gomti Nagar, Alambagh, Ashiyana, and greater Lucknow, our clinic provides thorough diagnostic workups, honest surgical recommendations, and personalized recovery roadmaps.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Laparoscopy Consultation Today
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

        {/* === SECTION 2: Laparoscopic Surgery vs. Traditional Open Surgery: Method Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Laparoscopic vs. Traditional Open Surgery Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Whenever medically feasible, Dr. Shamim Sultana Yashine prioritizes minimally invasive keyhole procedures over open surgery to secure faster healing and fewer clinical risks.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Laparoscopic Surgery */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Laparoscopic (Keyhole) Surgery</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Minimally Invasive. Fast Recovery.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Incision Size</span>
                      <p className="text-text text-[14px] leading-relaxed">Tiny keyhole cuts measuring 0.5 cm to 1 cm in size.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Daycare procedure or brief inpatient stay (usually under 24 hours).</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Post-Op Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Significantly lower pain level; minimal muscle or tissue disruption.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Visible Scarring</span>
                      <p className="text-text text-[14px] leading-relaxed">Minimal, dot-like scars that fade and become barely visible over time.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Recovery Timeline</span>
                      <p className="text-text text-[14px] leading-relaxed">Return to light household activities and office work within 1 to 2 weeks.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Traditional Open Surgery */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Traditional Open Surgery</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Invasive Approach. Longer Healing.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Incision Size</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires a large 10 cm to 15 cm incision across the lower abdomen.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 3 to 5 days of inpatient admission for pain monitoring.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Post-Op Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher pain levels; requires intravenous analgesics and muscle relaxants.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Visible Scarring</span>
                      <p className="text-text text-[14px] leading-relaxed">Leaves a permanent, prominent linear scar across the abdominal wall.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Recovery Timeline</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires 4 to 6 weeks of resting for muscle layer healing and strength.</p>
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

        {/* === SECTION 3: Gynecological Conditions Treated via Laparoscopy (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Gynecological Conditions Treated via Laparoscopy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              This minimally invasive technique is highly versatile, providing both diagnostic visualization and therapeutic surgical solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {treatableConditions.map((condition, index) => {
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
                        {condition.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {condition.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {condition.description}
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

        {/* === SECTION 4: Our Pre-Surgery Preparation & Safe Guidelines (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Surgery Preparation & Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Proper pre-operative alignment guarantees a smooth surgical process and lays the groundwork for rapid post-operative healing.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/laparoscopy-prep.webp" 
                alt="Safe recovery and pre-surgical guidelines for Laparoscopic procedures" 
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

        {/* === SECTION 5: The Surgical Keyhole Journey (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Surgical Keyhole Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Understanding the stages of keyhole surgery helps alleviate patient anxiety. We ensure complete clinical accuracy at every step.
              </p>
              <VerticalTimeline items={processTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose June Women's Health for Laparoscopic Procedures? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for Laparoscopic Surgery
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
                      <strong className="block text-[16px] text-white">Board-Certified Laparoscopic Surgeon</strong>
                      <span className="text-white/80 text-[14px]">Over 15+ years of advanced laparoscopic surgical experience preserving ovarian tissue, uterine integrity, and reproductive health.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">State-of-the-Art Surgical Infrastructure</strong>
                      <span className="text-white/80 text-[14px]">Operating in advanced tertiary operation theatres equipped with 4K HD visualization towers, precision harmonic scalpels, and sterile modular suites.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Pre-Op &amp; Post-Op Continuity</strong>
                      <span className="text-white/80 text-[14px]">Dr. Shamim Sultana Yashine personally manages your surgical counseling, performs the operation, and supervises your postoperative recovery visits.</span>
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
