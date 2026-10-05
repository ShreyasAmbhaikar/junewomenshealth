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
  Scissors,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Tubal Ligation & Reversal Doctor in Sushant Golf City, Lucknow | June Women's Health",
  description: "Laparoscopic tubal ligation (tubectomy) & microsurgical tubal reversal under Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow. Book a consult.",
  alternates: {
    canonical: '/tubal-ligation-reversal-in-lucknow/',
  }
};

export default function TubalLigationPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Tubal Ligation & Reversal' },
  ];

  const reversalFactors = [
    { 
      title: "Sterilization Technique Used", 
      description: "Tubes occluded with mechanical Hulka clips or Falope rings have minimal tissue destruction and yield the highest re-canalization success compared to extensive bipolar electrocautery.", 
      icon: <Scissors className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Healthy Tubal Length (>4cm)", 
      description: "Successful natural conception requires at least 4 to 5 cm of functional, vascularized fallopian tube with an intact fimbrial end to capture ovulated eggs from the ovary.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Ovarian Reserve & Maternal Age", 
      description: "Evaluating serum Anti-Müllerian Hormone (AMH) and antral follicle counts to confirm robust ovulatory reserve, with optimal reversal outcomes achieved in women under 38.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Paternal Semen Parameters", 
      description: "Conducting an updated semen analysis for the partner to ensure adequate sperm count and progressive motility before proceeding with surgical reconstruction.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Operative Record & HSG Audit", 
      description: "Reviewing previous surgical discharge summaries and performing hysterosalpingography (HSG dye test) to measure proximal tubal stumps and cavity contour.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pre-Anesthesia Fitness Clearance", 
      description: "Microsurgical tubal re-anastomosis is performed under general anesthesia. Pre-op blood counts, coagulation screens, ECG, and chest radiography ensure total safety.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Convalescence & Rest Protocol", 
      description: "Planning for 7 to 10 days of home rest, keeping the mini-laparotomy bikini incision clean and dry, and avoiding strenuous core exercise or heavy lifting for 3 weeks.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const processTimeline = [
    {
      title: 'Step 1: Comprehensive Reversal Feasibility Assessment',
      description: 'Dr. Shamim Sultana Yashine reviews past sterilization documents, performs pelvic sonography, tests maternal AMH, and verifies partner semen health.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: General Anesthesia & Mini-Laparotomy Access',
      description: 'Under general anesthesia, a discreet 4cm to 5cm cosmetic transverse mini-laparotomy incision is placed low along the pubic hairline.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: High-Magnification Microsurgical Re-Anastomosis',
      description: 'Under microscopic magnification, scarred tubal ends are excised, the inner lumens are re-approximated, and delicate 8-0/9-0 sutures restore tubal continuity.',
      icon: <Scissors className="w-5 h-5" />
    },
    {
      title: 'Step 4: Intraoperative Chromopertubation & Closure',
      description: 'Dilute methylene blue dye is injected transcervically to visually verify bilateral tubal patency and watertight lumen repair before cosmetic sub-cuticular closure.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What is the difference between tubal ligation and tubal reversal?',
      answer: 'Tubal ligation (female sterilization or tubectomy) is a permanent birth control procedure where the fallopian tubes are clipped, tied, or sealed to prevent sperm from meeting the egg. Tubal ligation reversal (microsurgical tubal re-anastomosis) is a delicate reconstructive microsurgery that removes scar tissue, unblocks the remaining tube segments, and reconnects them to restore natural fertility.'
    },
    {
      question: 'What are the realistic pregnancy success rates after tubal ligation reversal in Lucknow?',
      answer: 'Pregnancy success rates after microsurgical tubal reversal typically range between 50% and 75%. The highest success is seen in women under 35 with at least 4cm of remaining healthy tubal length and healthy partner semen parameters. Many couples successfully conceive naturally within 6 to 12 months following surgery.'
    },
    {
      question: 'What is the cost of Laparoscopic Tubectomy and Tubal Reversal at June Women\'s Health?',
      answer: 'We maintain 100% upfront financial clarity. A laparoscopic daycare tubal ligation ranges from ₹22,000 to ₹38,000. An advanced microsurgical tubal reversal (which requires specialized micro-instruments, high-magnification optics, general anesthesia, and hospital daycare stay) typically ranges from ₹65,000 to ₹1,15,000.'
    },
    {
      question: 'Should I choose Tubal Ligation Reversal or In Vitro Fertilization (IVF)?',
      answer: 'Both are viable options. Tubal reversal is often preferred for women under 37 with good ovarian reserve who wish to conceive naturally multiple times without repetitive medical cycles. IVF is recommended if the remaining fallopian tube length is under 3cm, if there is severe male subfertility, or if maternal age is above 38 with diminished ovarian reserve.'
    },
    {
      question: 'What is the recovery period after tubal ligation and reversal surgery?',
      answer: 'Following a laparoscopic tubectomy, patients walk home the same day and resume light work within 3 to 5 days. For microsurgical reversal via mini-laparotomy, hospital stay is usually 24 hours, with light desk work resuming after 7 to 10 days and full physical activity after 3 to 4 weeks.'
    },
    {
      question: 'How do I schedule a tubal reversal consultation with Dr. Shamim Sultana Yashine?',
      answer: 'Consultations at our Sushant Golf City clinic operate strictly by prior appointment during dedicated morning and evening hours. Dr. Shamim Sultana Yashine reviews your previous sterilization discharge summary, performs baseline fertility testing, and discusses all natural conception and IVF options transparently.'
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
        <PageHeader title="Tubal Ligation & Reversal" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is Tubal Ligation & Reversal? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/tubal-ligation-overview.webp" 
                  alt="Anatomical representation of fallopian tubes ligation and microsurgical reversal in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Tubal Ligation &amp; Microsurgical Reversal?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Tubal Ligation (Tubectomy)</strong> is a safe, permanent contraception method chosen by women who have completed their childbearing years. In contrast, <strong>Tubal Ligation Reversal (Microsurgical Tubal Re-anastomosis)</strong> is an intricate reconstructive surgical procedure designed to unblock and re-align previously tied or clipped fallopian tubes, reopening the natural biological pathway to spontaneous conception.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we provide compassionate, evidence-based reproductive surgery. Whether you are seeking a minimally invasive laparoscopic tubal ligation or exploring whether you are a suitable candidate for fallopian tube recanalization, Dr. Shamim Sultana Yashine provides candid clinical assessments.
                </p>
                <p>
                  Serving families from Sushant Golf City, Raebareli Road, Sultanpur Road, Alambagh, Awadh Vihar Yojna, and greater Lucknow, our private single-doctor clinic near Lulu Mall on Shaheed Path ensures total confidentiality, unhurried evaluations, and state-of-the-art microsurgical hospital care.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Family Planning Consultation Today
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

        {/* === SECTION 2: Tubal Ligation (Tubectomy) vs. Tubal Ligation Reversal: Method Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Tubal Ligation vs. Tubal Reversal Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              While ligation is a quick, straightforward procedure to permanently block the tubes, reversal is a highly complex microsurgery designed to meticulously put them back together.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Tubal Ligation */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Tubal Ligation (Tubectomy)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Permanent Sterilization. Contraception.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Goal</span>
                      <p className="text-text text-[14px] leading-relaxed">Provide highly reliable, permanent sterilization to prevent future pregnancy.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Quick surgical execution, typically taking 20 to 30 minutes to complete.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Surgical Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Fallopian tubes are cut, tied, sealed using heat (electrocautery), or clipped.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Offered as a daycare procedure; patients return home the same day.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Efficacy Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Boasts over 99% efficacy in preventing pregnancy; highly secure contraception.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Tubal Reversal */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Tubal Ligation Reversal</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Fertility Reconstruction. Re-anastomosis.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Goal</span>
                      <p className="text-text text-[14px] leading-relaxed">Reconstruct the fallopian tubes to restore natural fertility pathways.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Delicate microsurgery requiring 2 to 3 hours of precise micro-suturing.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Surgical Method</span>
                      <p className="text-text text-[14px] leading-relaxed">Removing blocked scar segments and joining healthy ends using microscopic sutures.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Admission</span>
                      <p className="text-text text-[14px] leading-relaxed">Typically requires a 1 to 2 night inpatient admission for observation.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Efficacy Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Success averages 40% to 80% depending on age, tube length, and sterilization type.</p>
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

        {/* === SECTION 3: Key Factors Influencing Reversal Success (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Factors Influencing Reversal Success" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Not everyone is a candidate for tubal reversal. Dr. Shamim Sultana Yashine conducts a rigorous clinical evaluation of these primary success indicators to give you a realistic success probability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {reversalFactors.map((factor, index) => {
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
                        {factor.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {factor.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {factor.description}
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
              Reconstructing fallopian pathways requires surgical precision and pre-operative preparation. Let us review the primary guidelines.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/tubal-ligation-prep.webp" 
                alt="Safe recovery and fertility guidelines after Tubal Reversal microsurgery" 
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

        {/* === SECTION 5: The Reversal Microsurgery Journey Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Reversal Microsurgery Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Microsurgical tubal re-anastomosis is an incredibly delicate reconstructive surgery. Let us walk through our precise clinical journey map.
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

        {/* === SECTION 6: Why Choose June Women's Health for Tubal Ligation & Reversal? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for Tubal Surgery
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
                      <strong className="block text-[16px] text-white">Microsurgical Reconstructive Precision</strong>
                      <span className="text-white/80 text-[14px]">Advanced surgical expertise in high-magnification fallopian re-anastomosis using ultra-fine micro-sutures to restore natural lumen patency.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Honest Fertility Feasibility Audits</strong>
                      <span className="text-white/80 text-[14px]">Dr. Shamim Sultana Yashine conducts rigorous pre-op HSG and ovarian reserve checks, advising reversal only when natural pregnancy odds are realistically high.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Private Surgical Planning in Sushant Golf City</strong>
                      <span className="text-white/80 text-[14px]">All consultations are held strictly by prior appointment in our calm, sterilized clinic, with procedures scheduled in premier tertiary hospital theatres.</span>
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
