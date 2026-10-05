import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import ComparisonCards from '@/components/ui/ComparisonCards';
import { Button } from '@/components/ui/Button';
import CardStack from '@/components/ui/CardStack';
import { 
  Heart, 
  CheckCircle, 
  Baby, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Home, 
  Shield, 
  Stethoscope,
  Apple,
  BookOpen,
  ClipboardList,
  HeartPulse,
  Smile,
  Calendar,
  Sparkles,
  Star
} from 'lucide-react';

export const metadata = {
  title: "Best Infertility, IUI & IVF Specialist in Sushant Golf City, Lucknow | June Women's Health",
  description: "Consult Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) for expert IUI, IVF support, and female fertility care in Sushant Golf City, Lucknow. Transparent, ethical & evidence-based treatment.",
  alternates: {
    canonical: '/infertility-iui-ivf-in-lucknow/',
  }
};

export default function InfertilityIuiIvfPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Infertility, IUI & IVF' },
  ];

  const seekTreatmentData = [
    {
      title: "Chronic Anovulation & Cycle Irregularity",
      description: "Infrequent or unpredictable menstruation—commonly driven by PCOS or thyroid disorders—indicating that healthy eggs are not releasing predictably.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Pelvic Pathology & Tubal Obstruction",
      description: "Clinical conditions including deep endometriosis, adenomyosis, submucosal fibroids, or fallopian tube blockage obstructing natural fertilization.",
      icon: <Stethoscope className="w-7 h-7" />
    },
    {
      title: "Recurrent Implantation Failure & Miscarriages",
      description: "Undergoing repeated early pregnancy losses requires comprehensive thrombophilia, uterine anatomical, and immunological diagnostic audits.",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Diminished Ovarian Reserve (Low AMH)",
      description: "Declining anti-müllerian hormone (AMH) levels or maternal age above 35 requiring accelerated, individualized fertility management protocols.",
      icon: <Activity className="w-7 h-7" />
    }
  ];

  const comparisonData: [any, any] = [
    {
      title: "Intrauterine Insemination (IUI)",
      theme: "secondary",
      items: [
        { feature: "Core Process", isAvailable: "Processed, motile sperm is placed directly inside the uterine cavity." },
        { feature: "Invasiveness", isAvailable: "Minimal; performed comfortably in outpatient room with zero sedation." },
        { feature: "Fertilization", isAvailable: "Occurs naturally within maternal fallopian tubes." },
        { feature: "Investment & Time", isAvailable: "Highly affordable, completed within a single natural or stimulated cycle." },
        { feature: "Ideal Candidates", isAvailable: "Mild male factor, hostile cervical mucus, unexplained subfertility, mild PCOS." }
      ]
    },
    {
      title: "In Vitro Fertilization (IVF)",
      theme: "primary",
      items: [
        { feature: "Core Process", isAvailable: "Oocytes are surgically aspirated, fertilized in lab, and transferred as embryos." },
        { feature: "Invasiveness", isAvailable: "Moderate; involves short daycare sedation for transvaginal egg retrieval." },
        { feature: "Fertilization", isAvailable: "Achieved externally inside state-of-the-art embryology incubators." },
        { feature: "Investment & Time", isAvailable: "Higher financial commitment requiring 4 to 6 weeks per treatment cycle." },
        { feature: "Ideal Candidates", isAvailable: "Bilateral tubal blockage, severe oligospermia/azoospermia, advanced age." }
      ]
    }
  ];

  const servicesStack = [
    {
      title: "Controlled Ovulation Induction",
      description: "Administering tailored low-dose oral aromatase inhibitors or gonadotropins to recruit healthy dominant follicles, verified by serial transvaginal ultrasound scans.",
      icon: <Activity className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description: "A precision daycare procedure where highly concentrated, washed sperm is deposited directly into the fundus of the uterus at the peak LH surge, boosting fertilization rates.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Comprehensive Pre & Post IVF Support",
      description: "Optimizing endometrial thickness, hormonal supplementation, and luteal phase support before and after embryo transfer to maximize healthy clinical pregnancy outcomes.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const treatmentJourney = [
    {
      title: 'Phase 1: Dual Fertility Diagnostic Workup',
      description: 'Evaluating ovarian reserve (serum AMH, antral follicle count), semen morphology and motility analysis, and verifying tubal patency via hysterosalpingography (HSG) or sonosalpingography.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Phase 2: Tailored Ovarian Stimulation',
      description: 'Prescribing personalized low-dose ovulation induction agents to stimulate 1-2 mature follicles while safeguarding against ovarian hyperstimulation syndrome (OHSS).',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Phase 3: Serial Folliculometry (TVS)',
      description: 'Conducting high-precision transvaginal ultrasound monitoring to measure follicle diameter and endometrial trilaminar pattern to time hCG/rhCG trigger administration.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Phase 4: Timed Insemination & Luteal Support',
      description: 'Performing sterile intrauterine insemination (IUI) 36 hours post-trigger or coordinating advanced IVF transfer protocols supported with evidence-based luteal progesterone.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Antioxidant & Nutritional Priming", description: "Consuming a Mediterranean-style fertility diet packed with micronutrients, folate, and lean proteins to elevate oocyte and sperm cellular health.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Metabolic & Weight Optimization", description: "Balancing BMI through moderate physical workouts and insulin stabilization to optimize uterine endometrial receptivity.", icon: <Activity className="w-6 h-6 text-accent" /> },
    { title: "Targeted Preconception Vitamins", description: "Supplementing with active methylfolate, CoQ10, Vitamin D3, and inositol to support mitochondrial vitality in developing gametes.", icon: <Sparkles className="w-6 h-6 text-accent" /> },
    { title: "Stress & Endocrine Harmony", description: "Lowering systemic cortisol through structured sleep cycles and relaxation techniques to support gonadotropin pulsatility.", icon: <Smile className="w-6 h-6 text-accent" /> },
    { title: "Transparent Treatment Alignment", description: "Discussing realistic cycle success probabilities, medical steps, and treatment costs with Dr. Shamim Sultana Yashine.", icon: <BookOpen className="w-6 h-6 text-accent" /> }
  ];

  const faqs = [
    {
      question: 'What is the actual cost of IUI and IVF fertility treatments in Lucknow?',
      answer: 'At June Women\'s Health, we ensure complete cost transparency without hidden expenses. An IUI cycle in Lucknow generally ranges from ₹8,500 to ₹22,000, depending on whether oral medication or injectable gonadotropins are required. IVF cycle costs range from ₹1,20,000 to ₹1,90,000 depending on embryology laboratory procedures (ICSI, blastocyst culture). Dr. Shamim Sultana Yashine explains all diagnostic and procedural costs upfront before commencing treatment.'
    },
    {
      question: 'Is the IUI procedure painful, and what is the recovery period?',
      answer: 'Intrauterine Insemination (IUI) is virtually painless and feels very similar to a routine cervical pap smear. The sterile catheter insertion takes only 2 to 3 minutes, requires no anesthesia, and allows you to walk out and resume your standard daily schedule immediately.'
    },
    {
      question: 'What is the realistic success rate of IUI treatment per cycle?',
      answer: 'IUI success rates range between 12% and 20% per completed cycle, influenced by maternal age, sperm motile fraction, and tubal health. In clinical practice, undergoing a structured series of 3 to 4 IUI cycles yields cumulative pregnancy rates exceeding 40% to 50% before considering advanced IVF.'
    },
    {
      question: 'Can women with PCOS get pregnant through IUI or natural timed intercourse?',
      answer: 'Yes! PCOS is one of the most treatable causes of subfertility. Because the primary challenge is anovulation (irregular egg release), gentle medical ovulation induction paired with ultrasound follicle tracking and timed intercourse or IUI leads to successful conception for the vast majority of PCOS patients.'
    },
    {
      question: 'When should a couple escalate from IUI to IVF?',
      answer: 'We recommend moving to IVF if 3 to 4 well-monitored IUI cycles do not result in pregnancy, or if primary diagnostic evaluations reveal bilateral tubal blockage, severe male factor subfertility (very low sperm count/motility), or advanced maternal age with severely diminished ovarian reserve.'
    },
    {
      question: 'Is complete bed rest necessary after an IUI or embryo transfer?',
      answer: 'No! Scientific clinical trials have proven that strict bed rest does not improve implantation rates and may actually increase emotional stress and venous thrombosis risk. We recommend continuing light, normal daily routines while avoiding strenuous heavy lifting and high-impact exercises.'
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
        <PageHeader title="Infertility, IUI & IVF Support" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: Overview (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group">
                <Image 
                  src="/images/iui-vs-ivf.webp" 
                  alt="IUI vs IVF Medical Diagram - Intrauterine Insemination and In Vitro Fertilization Processes in Sushant Golf City Lucknow" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Infertility, IUI & IVF Support?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Infertility is medically defined as the inability to achieve clinical pregnancy after 12 months of consistent, unprotected intercourse (or after 6 months for women aged 35 or older). <strong>Intrauterine Insemination (IUI)</strong> and <strong>In-Vitro Fertilization (IVF)</strong> support are evidence-backed assisted reproductive technologies designed to overcome biological obstacles to conception. While IUI optimizes the natural fertilization journey by placing washed motile sperm directly inside the uterus at peak ovulation, IVF support delivers end-to-end medical preparation, follicular stimulation, and post-transfer luteal care.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we champion an ethical, stepped-care philosophy. We avoid rushing couples into invasive, expensive procedures, choosing instead to begin with comprehensive diagnostic mapping, ovulation induction, and timed IUI whenever clinically viable.
                </p>
                <p>
                  Serving families across Sushant Golf City, Vrindavan Yojna, Omaxe City, Arjunganj, Nilmatha, Awadh Vihar Yojna, and greater Lucknow, our private single-doctor clinic near Lulu Mall on Shaheed Path provides compassionate, unhurried consultations and transparent guidance at every step of your fertility journey.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Fertility Consultation Today
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

        {/* === SECTION 2: Indications / When to Seek (White bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="When Should You Seek Female Infertility Treatment?" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {seekTreatmentData.map((benefit, index) => {
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
                      {benefit.icon}
                    </div>
                    <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                      {benefit.title}
                    </h3>
                    <p className={`${style.descText} text-[14px] leading-relaxed`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === Wave Divider 2 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 3: IUI vs IVF (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="IUI vs. IVF: Understanding the Difference" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Many couples are unsure whether they need IUI or IVF. Understanding the key differences helps you plan your fertility journey with confidence.
            </p>
            {/* Custom Comparison layout styled exactly like PCOD vs PCOS comparison */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: IUI */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Intrauterine Insemination (IUI)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Simpler. Natural. Effective.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure</span>
                      <p className="text-text text-[14px] leading-relaxed">Washed sperm is placed directly into the uterus.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Invasiveness</span>
                      <p className="text-text text-[14px] leading-relaxed">Low; feels similar to a routine Pap smear.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Fertilization</span>
                      <p className="text-text text-[14px] leading-relaxed">Occurs naturally inside the fallopian tubes.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cost & Time</span>
                      <p className="text-text text-[14px] leading-relaxed">Lower cost, shorter cycle duration.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Best For</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild male factor, unexplained infertility.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: IVF */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">In Vitro Fertilization (IVF)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Advanced. Precise. Powerful.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Procedure</span>
                      <p className="text-text text-[14px] leading-relaxed">Eggs are retrieved and fertilized in a lab, then transferred.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Invasiveness</span>
                      <p className="text-text text-[14px] leading-relaxed">Moderate; requires light sedation for egg retrieval.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Fertilization</span>
                      <p className="text-text text-[14px] leading-relaxed">Occurs externally in a highly controlled laboratory.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cost & Time</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher investment, requires 4-6 weeks per cycle.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Best For</span>
                      <p className="text-text text-[14px] leading-relaxed">Blocked tubes, severe male factor, advanced age.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Services Stack (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Comprehensive Fertility Services" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              We provide a structured, holistic approach to overcoming fertility challenges under the personal guidance of Dr. Shamim Sultana Yashine.
            </p>
            <CardStack items={servicesStack} />
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 5: Treatment Journey Timeline (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Your Fertility Treatment Journey" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We follow a methodical, tracking-based clinical process to map your ovulation cycles precisely, maximizing success rates for IUI.
              </p>
              <VerticalTimeline items={treatmentJourney} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Preparation Bento Grid (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Preparing for Your Fertility Treatment" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Maximizing your chances of conception starts even before your medical treatment begins. At our clinic, we emphasize holistic preparation to boost your fertility naturally.
            </p>
            
            {/* Bento image banner */}
            <div className="rounded-[24px] overflow-hidden shadow-lg relative min-h-[320px] md:min-h-0 md:aspect-[21/9] w-full mb-8 group cursor-pointer">
              <Image 
                src="/images/fertility-care.webp" 
                alt="Doctor pointing to ultrasound screen showing follicle study" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#151722]/90 via-[#151722]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-md z-10">
                <h4 className="text-[24px] font-bold mb-2 text-white drop-shadow-md">Follicular Study Support</h4>
                <p className="text-white text-[15px] leading-relaxed drop-shadow-sm font-medium">Tracking and monitoring of ovaries via digital ultrasound to observe egg maturation and identify optimal insemination timings.</p>
              </div>
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preparationCards.map((card, index) => {
                const prepColors = [
                  { bg: 'bg-[#FDE8EC]', num: 'text-[#E8475F]', iconBg: 'bg-[#F9CDD5]' },
                  { bg: 'bg-[#FFF3E0]', num: 'text-[#F5A623]', iconBg: 'bg-[#FFE0B2]' },
                  { bg: 'bg-[#E8F5E9]', num: 'text-[#4CAF50]', iconBg: 'bg-[#C8E6C9]' },
                  { bg: 'bg-[#EDE7F6]', num: 'text-[#7C4DFF]', iconBg: 'bg-[#D1C4E9]' },
                  { bg: 'bg-[#E3F2FD]', num: 'text-[#2196F3]', iconBg: 'bg-[#BBDEFB]' },
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

        {/* === Wave Divider 6 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 7: Trust card, FAQs & Final CTA (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">

            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Couples Choose June Women&apos;s Health for Fertility &amp; IUI Care
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
                      <strong className="block text-[16px] text-white">Ethical Stepped-Care Approach</strong>
                      <span className="text-white/80 text-[14px]">We exhaust gentle ovulation tracking and minimally invasive IUI procedures before considering invasive or costly ART cycles.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Specialist Continuity</strong>
                      <span className="text-white/80 text-[14px]">Every consultation, diagnostic ultrasound scan, and IUI procedure is personally executed by Dr. Shamim Sultana Yashine.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Transparent &amp; Empathetic Guidance</strong>
                      <span className="text-white/80 text-[14px]">We maintain 100% upfront financial clarity with zero hidden testing costs, offering compassionate support through your conception journey.</span>
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
