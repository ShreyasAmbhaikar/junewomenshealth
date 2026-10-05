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
  title: "Best Contraception Advice & Family Planning Doctor in Sushant Golf City, Lucknow | June Women's Health",
  description: "Expert, safe contraception advice & family planning. IUD/Copper T insertion, oral birth control, and counseling under Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow.",
  alternates: {
    canonical: '/contraception-advice-in-lucknow/',
  }
};

export default function ContraceptionAdvicePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contraception Advice' },
  ];

  const contraceptiveServices = [
    { 
      title: "Customized Oral Contraceptive Regimens", 
      description: "Prescribing modern, ultralow-dose oral contraceptive pills (OCPs) tailored to regulate menstrual cycles and prevent pregnancy with minimal metabolic side effects.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Intrauterine Devices (Copper T & Mirena IUD)", 
      description: "High-precision, sterile in-clinic placement and painless removal of hormone-free Copper T (5/10 yr) and levonorgestrel-releasing Mirena IUDs.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Quarterly Injectable Contraception", 
      description: "Administering 3-month progestin depot injections (DMPA) for busy working women and nursing mothers seeking reliable birth control without daily pill compliance.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Emergency Post-Coital Contraception", 
      description: "Providing confidential, time-critical clinical advice on emergency hormonal contraception and emergency copper IUD insertions within post-intercourse safety windows.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const selectionGuidelines = [
    { 
      title: "Efficacy & Pearl Index Review", 
      description: "Analyzing actual clinical failure rates, which range from ~91% for typical user oral pills to over 99.8% for sterile intrauterine devices (IUDs).", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Lifestyle Routine & Compliance Audit", 
      description: "Assessing whether you prefer an active daily pill schedule or a convenient, long-term 'fit-and-forget' intrauterine solution that requires zero daily tracking.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Cardiovascular & Hormonal Screening", 
      description: "Screening blood pressure, migraine history, hepatic function, and venous thromboembolism risk factors before selecting estrogen-containing options.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const journeySteps = [
    {
      title: 'Step 1: Systemic Medical & History Audit',
      description: 'A private evaluation with Dr. Shamim Sultana Yashine screening your blood pressure, metabolic profile, and medical history to ensure 100% safety.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Reproductive Spacing & Timeline Goals',
      description: 'Discussing your family planning timeline to determine whether a temporary short-acting method or a long-acting reversible contraceptive (LARC) is ideal.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: Comparative Contraceptive Counseling',
      description: 'Dr. Shamim Sultana Yashine explains the mechanisms, advantages, and possible minor adaptations of suitable methods, empowering your autonomous choice.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Sterile Placement or Precise Prescription',
      description: 'Providing comprehensive dosage guidelines for oral methods or performing sterile, gentle in-clinic IUD insertion in our modern procedure room.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const comparisonData: [any, any] = [
    {
      title: "Daily Oral Contraceptive Pills",
      theme: "secondary",
      items: [
        { feature: "Daily Routine", isAvailable: "Must be ingested at the exact same hour daily to maintain peak hormonal efficacy." },
        { feature: "Duration of Action", isAvailable: "Short-acting. Natural ovulatory fertility resumes immediately upon stopping." },
        { feature: "Hormone Composition", isAvailable: "Combined estrogen + progestin, or progestin-only minipills (POPs)." },
        { feature: "Non-Contraceptive Perks", isAvailable: "Regulates heavy bleeding, reduces dysmenorrhea, and improves hormonal acne." },
        { feature: "Maintenance", isAvailable: "Requires monthly pharmacy purchases and disciplined personal tracking." }
      ]
    },
    {
      title: "Intrauterine Devices (IUD)",
      theme: "primary",
      items: [
        { feature: "Daily Routine", isAvailable: "Hassle-free 'fit-and-forget' protection; zero daily or weekly memory burden." },
        { feature: "Duration of Action", isAvailable: "Long-term reversible. Provides uninterrupted contraception for 3 to 10 years." },
        { feature: "Hormone Composition", isAvailable: "Available as hormone-free (Copper T) or localized progestin (Mirena IUD)." },
        { feature: "Non-Contraceptive Perks", isAvailable: "Hormonal IUDs (Mirena) drastically reduce heavy menorrhagia and period cramps." },
        { feature: "Maintenance", isAvailable: "Requires a single sterile in-clinic placement, followed by brief annual checks." }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What birth control and contraception options are available at June Women\'s Health?',
      answer: 'We provide temporary short-term methods (combined oral contraceptive pills, progestin-only minipills, barrier methods), medium-term methods (3-month injectable progestins), and long-acting reversible contraceptives (Copper T 380A and hormonal Mirena IUDs). We also offer counseling for permanent laparoscopic tubal ligation.'
    },
    {
      question: 'How does Dr. Shamim Sultana Yashine help choose the safest contraceptive method?',
      answer: 'Dr. Shamim Sultana Yashine evaluates your age, blood pressure, BMI, lactation status, medical/clotting history, and future pregnancy timeline. By matching clinical safety guidelines with your lifestyle preference, she helps you select the most convenient and well-tolerated method.'
    },
    {
      question: 'What is the genuine cost of contraception advice and IUD placement in Lucknow?',
      answer: 'We provide complete pricing transparency. A family planning and contraception consultation with Dr. Shamim Sultana Yashine is ₹600. A standard Copper-T insertion (including sterile device, local analgesic block, and procedure) is ₹2,500 to ₹4,000. Hormonal IUD placement (Mirena) ranges from ₹6,500 to ₹9,500 depending on device cost. Quarterly injectable contraception is ₹600 per dose.'
    },
    {
      question: 'Are intrauterine devices (Copper T / Mirena) safe and will they cause long-term pain?',
      answer: 'Yes, modern IUDs are over 99.8% effective and exceptionally safe. Copper T is non-hormonal and lasts 5 to 10 years, while Mirena releases micro-doses of localized progestin to reduce heavy periods. In-clinic insertion takes less than 10 minutes with mild cramping that subsides quickly.'
    },
    {
      question: 'Will taking birth control pills or using an IUD impact my future chances of pregnancy?',
      answer: 'No. Reversible contraceptives do not harm your long-term fertility. Once you discontinue oral pills or have your IUD removed at our clinic, your natural menstrual and ovulatory cycles resume, allowing you to conceive normally.'
    },
    {
      question: 'How do I book a confidential contraception consultation in Sushant Golf City?',
      answer: 'Consultations at our Sushant Golf City clinic operate strictly by prior appointment during dedicated morning and evening hours. This guarantees complete confidentiality, zero waiting room crowds, and dedicated time with Dr. Shamim Sultana Yashine.'
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
        <PageHeader title="Contraception Advice" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Contraception Advice? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/contraception-overview.webp" 
                  alt="Contraception methods layout including pills, calendar, and anatomical family planning models in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Contraception Advice &amp; Family Planning?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Contraception Advice &amp; Family Planning</strong> delivers clinical guidance, health risk assessment, and precise medical placement of modern birth control methods. Choosing the right contraceptive—whether temporary daily pills, quarterly injections, or long-acting reversible intrauterine devices (IUDs)—empowers women to prevent unintended pregnancies, space births safely, and manage heavy menstrual cycles with autonomy.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we provide personalized, judgment-free contraception counseling. We serve women across Sushant Golf City, Sultanpur Road, Ashiyana, Raebareli Road, New Gomti Nagar, and greater Lucknow with clinical excellence.
                </p>
                <p>
                  Our private single-doctor clinic near Lulu Mall on Shaheed Path ensures that your appointments remain unhurried, comfortable, and strictly confidential, allowing for personalized health screenings and sterile in-clinic procedures.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Contraception Consultation Today
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

        {/* === SECTION 2: Daily Oral Pills vs. Intrauterine Devices (IUD): Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Daily Oral Pills vs. Intrauterine Devices (IUD)" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Deciding between a self-administered daily pill and a long-acting, clinical \"fit and forget\" IUD depends on your medical history and lifestyle preference.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Daily Oral Contraceptive Pills */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Daily Oral Pills</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Self-Administered. Temporary Option.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Daily Routine</span>
                      <p className="text-text text-[14px] leading-relaxed">Must be taken at the exact same time every day to maintain maximum efficacy.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Protection Span</span>
                      <p className="text-text text-[14px] leading-relaxed">Short-term. Natural fertility returns immediately upon discontinuing usage.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hhormonal Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Contains estrogen and progestin, or progestin-only formulations.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Non-Contraceptive Perks</span>
                      <p className="text-text text-[14px] leading-relaxed">Highly effective at regulating menstrual cycles, reducing flow, and clearing acne.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Maintenance</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires regular pharmacy refills and self-disciplined daily tracking.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Intrauterine Devices (IUD) */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Intrauterine Devices (IUD)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Clinical Fitting. Long-Acting.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Daily Routine</span>
                      <p className="text-text text-[14px] leading-relaxed">Hassle-free \"fit and forget\" method; zero daily tracking required.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Protection Span</span>
                      <p className="text-text text-[14px] leading-relaxed">Long-term. Provides continuous protection for 3 to 10 years.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hormonal Profile</span>
                      <p className="text-text text-[14px] leading-relaxed">Available as hormonal (Mirena) or entirely hormone-free (Copper T).</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Non-Contraceptive Perks</span>
                      <p className="text-text text-[14px] leading-relaxed">Hormonal IUDs (Mirena) significantly reduce heavy bleeding and cramping.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Maintenance</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires an initial clinic insertion, followed by minor annual checks.</p>
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

        {/* === SECTION 3: Key Contraceptive Services We Provide (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Key Contraceptive Services We Provide" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinic offers a wide range of contraceptive options, helping you select the most suitable, safe, and comfortable solution for your body.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {contraceptiveServices.map((service, index) => {
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
              Selecting contraception wisely requires checking multiple parameters to rule out physical side effects and support pelvic health.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/contraception-prep.webp" 
                alt="Clean medical charts and birth control options checklist preparing for a clinic fitting" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectionGuidelines.map((card, index) => {
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

        {/* === SECTION 5: The Contraceptive Process Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our Evaluation & Fitting Process" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We believe in a highly customized approach to family planning. Every prescription or fitting is preceded by a meticulous clinical audit.
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

        {/* === SECTION 6: Why Choose June Women's Health for Contraception Advice? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for Family Planning
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
                      <strong className="block text-[16px] text-white">Absolute Confidentiality &amp; Respect</strong>
                      <span className="text-white/80 text-[14px]">We maintain a strictly private, non-judgmental space where family planning goals and contraceptive decisions can be discussed with absolute anonymity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Sterile In-Clinic IUD Placement Mastery</strong>
                      <span className="text-white/80 text-[14px]">Dr. Shamim Sultana Yashine exhibits specialized skills in the gentle, sterile, and high-precision insertion and removal of Copper T and Mirena IUDs.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Prior-Appointment Schedule</strong>
                      <span className="text-white/80 text-[14px]">We coordinate consultations strictly by prior appointment during dedicated hours. This keeps wait times short and limits exposure in a highly sterilized lobby.</span>
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
