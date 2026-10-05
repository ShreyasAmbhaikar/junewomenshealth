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
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Menstrual Hygiene & Period Health Doctor in Sushant Golf City, Lucknow | June Women's Health",
  description: "Evidence-based menstrual hygiene advice, period cramp (dysmenorrhea) relief, and infection prevention under Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow.",
  alternates: {
    canonical: '/menstrual-hygiene-in-lucknow/',
  }
};

export default function MenstrualHygienePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Menstrual Hygiene' },
  ];

  const menstrualServices = [
    { 
      title: "Menstrual Product & Hygiene Guidance", 
      description: "Medical counseling on selecting and safely utilizing sanitary napkins, tampons, or medical-grade silicone menstrual cups without disrupting vaginal microflora.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Dysmenorrhea & Period Cramp Care", 
      description: "Investigating the root causes of incapacitating pelvic cramps to distinguish primary dysmenorrhea from underlying endometriosis, adenomyosis, or pelvic infections.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Heavy Bleeding & Menorrhagia Therapy", 
      description: "Evaluating prolonged periods (lasting >7 days) or heavy flooding flows associated with hormonal fluctuations, anovulatory cycles, or early uterine fibroids.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Vaginal Infection & UTI Prevention", 
      description: "Targeted clinical diagnosis and treatment for recurrent bacterial vaginosis, candidiasis, and urinary tract infections triggered by suboptimal menstrual hygiene habits.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const selfCareGuidelines = [
    { 
      title: "Safe Absorbent Changing Intervals", 
      description: "Replacing sanitary pads every 4 to 6 hours and tampons within 4 hours to avoid bacterial accumulation. Emptying and washing silicone cups every 8 to 10 hours.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Front-to-Back Intimate Cleansing", 
      description: "Washing only the external vulva with lukewarm plain water, always wiping from front to back to prevent transferring perianal bacteria into the vaginal vault.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Menstrual Symptom & Flow Logging", 
      description: "Maintaining a detailed digital or physical log of cycle intervals, flow heaviness, and cramp intensity to enable accurate clinical pattern evaluation.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const journeySteps = [
    {
      title: 'Step 1: In-Depth Menstrual History Review',
      description: 'A private discussion with Dr. Shamim Sultana Yashine exploring cycle timing, duration, pain intensity, flow volume, and current hygiene practices.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Gentle Pelvic Examination',
      description: 'Conducting a gentle, non-invasive pelvic assessment to inspect mucosal health, rule out local vulvovaginitis, and assess pelvic floor comfort.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Sonography & Hormonal Profiling',
      description: 'High-resolution pelvic sonography to evaluate endometrial thickness and ovarian follicles, accompanied by blood tests for hemoglobin and thyroid levels.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Individualized Management Blueprint',
      description: 'Formulating a personalized treatment roadmap featuring targeted anti-inflammatories, cycle-regulating medical therapy, and customized hygiene counseling.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const comparisonData: [any, any] = [
    {
      title: "Healthy Menstruation Milestones",
      theme: "secondary",
      items: [
        { feature: "Cycle Rhythm", isAvailable: "Cycles recur reliably every 21 to 35 days." },
        { feature: "Bleeding Duration", isAvailable: "Menstrual flow lasts between 3 to 7 days." },
        { feature: "Pain Intensity", isAvailable: "Mild pelvic ache that resolves with rest or heating pads." },
        { feature: "Product Usage", isAvailable: "Changing sanitary pads or tampons comfortably every 4 to 6 hours." },
        { feature: "Between-Cycle Spotting", isAvailable: "Clean intervals with zero unexpected bleeding between periods." }
      ]
    },
    {
      title: "Clinical Warning Signs (Seek Help)",
      theme: "primary",
      items: [
        { feature: "Cycle Rhythm", isAvailable: "Cycles consistently shorter than 21 days or longer than 35 days." },
        { feature: "Bleeding Duration", isAvailable: "Bleeding or spotting that continues for more than 7 to 8 days." },
        { feature: "Pain Intensity", isAvailable: "Debilitating cramps causing absenteeism from school, college, or work." },
        { feature: "Product Usage", isAvailable: "Soaking through pads or tampons every 1 to 2 hours or passing large clots." },
        { feature: "Between-Cycle Spotting", isAvailable: "Unexplained intermenstrual spotting or bleeding after sexual intercourse." }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What are the essential golden rules of healthy menstrual hygiene?',
      answer: 'The core rules of menstrual hygiene include changing sanitary pads every 4 to 6 hours (and tampons within 4 hours), washing only the external vulva with clean warm water from front to back, wearing breathable cotton undergarments, avoiding harsh scented soaps or vaginal douches, and disposing of used sanitary products safely.'
    },
    {
      question: 'Are menstrual cups safe to use and how should they be sterilized?',
      answer: 'Yes, medical-grade silicone menstrual cups are clinically safe, eco-friendly, and cost-effective. While on your period, empty and rinse the cup with clean water and mild pH-balanced soap every 8 to 10 hours. Between cycles, sanitize the cup by boiling it in water for 5 to 10 minutes before storing it in a breathable cotton pouch.'
    },
    {
      question: 'What is the genuine cost of menstrual health consultations at June Women\'s Health?',
      answer: 'We maintain 100% transparent pricing. A comprehensive private consultation with Dr. Shamim Sultana Yashine is ₹600. A baseline screening pelvic ultrasound (TVS/TAS to check for uterine fibroids, adenomyosis, or ovarian cysts) is ₹1,500 to ₹2,200. Basic diagnostic blood panels (hemoglobin, thyroid TSH, and prolactin) range from ₹1,200 to ₹2,500.'
    },
    {
      question: 'When is period pain (dysmenorrhea) considered abnormal and in need of medical evaluation?',
      answer: 'While mild cramping during the first 24 to 48 hours of menstruation is normal, severe pain that impairs daily functioning, causes nausea or vomiting, or does not respond to standard pain relievers is abnormal. This severe pain may indicate underlying conditions such as endometriosis, adenomyosis, or pelvic infections.'
    },
    {
      question: 'How can poor menstrual hygiene lead to vaginal and urinary tract infections?',
      answer: 'Wearing sanitary pads or tampons for prolonged periods traps warmth, moisture, and blood, creating an ideal breeding ground for bacteria and yeast. This can cause Bacterial Vaginosis, Candida infections, and ascending UTIs. Wiping backwards can also introduce intestinal bacteria into the urethra.'
    },
    {
      question: 'How do I book a menstrual wellness consultation in Sushant Golf City?',
      answer: 'Consultations at our Sushant Golf City clinic operate strictly by prior appointment during dedicated morning and evening hours. Dr. Shamim Sultana Yashine personally conducts all consultations in a private, supportive, and sanitized clinic setting.'
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
        <PageHeader title="Menstrual Hygiene & Health" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Menstrual Hygiene & Health? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/menstrual-hygiene-overview.webp" 
                  alt="Eco-friendly sanitary pad and medical-grade silicone menstrual cup on clean background in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Menstrual Hygiene &amp; Cycle Health?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Menstrual Hygiene &amp; Health</strong> encompasses the hygienic practices, sanitary management, and clinical care necessary to ensure pain-free periods, prevent ascending pelvic infections, and protect long-term reproductive health. Proper menstrual care involves managing cycle regularity, diagnosing dysmenorrhea (severe period pain), evaluating heavy bleeding (menorrhagia), and addressing underlying hormonal or structural disorders.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we provide compassionate, evidence-based guidance for adolescent girls and adult women across Sushant Golf City, Awadh Vihar Yojna, Sultanpur Road, Ashiyana, Alambagh, and greater Lucknow.
                </p>
                <p>
                  Our private single-doctor clinic near Lulu Mall on Shaheed Path provides an unhurried, reassuring environment where sensitive cycle irregularities, menstrual cup usage, and pelvic pain concerns are evaluated with total confidentiality.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Menstrual Wellness Consultation Today
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

        {/* === SECTION 2: Normal Menstruation vs. Abnormal Signs: Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Normal Menstruation vs. Abnormal Signs" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Understanding the difference between standard menstrual symptoms and indicators of an underlying clinical disorder is crucial for early intervention.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Normal Menstruation Indicators */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Normal Menstruation</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Healthy Rhythm. Standard Vitals.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cycle Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Cycles occur regularly and consistently every 21 to 35 days.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Flow Span</span>
                      <p className="text-text text-[14px] leading-relaxed">Active menstrual bleeding lasts between 3 to 7 days per cycle.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cramp Severity</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild pelvic cramping that resolves with basic warmth, stretching, or rest.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Bleeding Volume</span>
                      <p className="text-text text-[14px] leading-relaxed">A standard sanitary pad, tampon, or cup change every 4 to 6 hours.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Intermenstrual Spotting</span>
                      <p className="text-text text-[14px] leading-relaxed">No unexpected bleeding, bleeding after intercourse, or mid-cycle spotting.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Abnormal Signs (Seek Help) */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Abnormal Signs</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Clinical Indications. Medical Audit.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cycle Duration</span>
                      <p className="text-text text-[14px] leading-relaxed">Cycles consistently shorter than 21 days or longer than 35 days.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Flow Span</span>
                      <p className="text-text text-[14px] leading-relaxed">Active bleeding consistently lasting longer than 7 days per cycle.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Cramp Severity</span>
                      <p className="text-text text-[14px] leading-relaxed">Severe, debilitating pelvic pain that forces you to miss work or school.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Bleeding Volume</span>
                      <p className="text-text text-[14px] leading-relaxed">Soaking through one or more sanitary pads/tampons every 1 to 2 hours.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Intermenstrual Spotting</span>
                      <p className="text-text text-[14px] leading-relaxed">Frequent spotting, bleeding after intercourse, or entirely skipped periods.</p>
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

        {/* === SECTION 3: Key Menstrual Health & Hygiene Services (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Menstrual Health & Hygiene Services" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinic delivers comprehensive gynaecological checkups, testing, and therapies to help women regulate their menstrual cycles comfortably.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {menstrualServices.map((service, index) => {
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
                        {service.icon}
                      </div>
                      <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                        {service.title}
                      </h3>
                      <p className={`${style.descText} text-[14px] leading-relaxed`}>
                        {service.description}
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
              Adopting structured menstrual self-care routines is the most reliable way to prevent reproductive tract infections and manage cramps.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/menstrual-hygiene-prep.webp" 
                alt="Educational cycle tracking chart and pelvic health metrics display in a clinic" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selfCareGuidelines.map((card, index) => {
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

        {/* === SECTION 5: Our Menstrual Diagnostic Protocol Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our Menstrual Diagnostic Protocol" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                If you experience irregular cycles, abnormal flows, or severe pelvic cramps, we follow a strict clinical protocol to identify and treat the issue.
              </p>
              <VerticalTimeline items={journeySteps} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose June Women's Health for Menstrual Hygiene & Health? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for Period Care
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
                      <strong className="block text-[16px] text-white">Direct Senior Gynecologist Counseling</strong>
                      <span className="text-white/80 text-[14px]">You consult Dr. Shamim Sultana Yashine directly for every checkup, ensuring private, non-judgmental guidance on menstrual cups, pads, and hygiene practices.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Root-Cause Period Disorder Diagnostics</strong>
                      <span className="text-white/80 text-[14px]">We don&apos;t just prescribe painkillers; we investigate severe cramps and heavy flows for underlying conditions like adenomyosis, PCOD, or pelvic infections.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Booking</strong>
                      <span className="text-white/80 text-[14px]">Consultations in Sushant Golf City operate strictly by appointment, providing a calm, sterilized space without crowded lobbies.</span>
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
