import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import Accordion from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
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
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Best LSCS (Caesarean Section) Doctor in Sushant Golf City, Lucknow | June Women's Health",
  description: "Expert, sterile Caesarean section (LSCS) surgery and high-risk maternity delivery planning by Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow.",
  alternates: {
    canonical: '/lscs-caesarean-section-in-lucknow/',
  }
};

export default function LscsCaesareanPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'LSCS (Caesarean Section)' },
  ];

  const indicationsData = [
    {
      title: "Acute Fetal Distress & Decelerations",
      description: "Sudden drops in fetal heart rate, abnormal CTG tracings, or meconium aspiration risk necessitating urgent, safe surgical delivery.",
      icon: <Activity className="w-7 h-7" />
    },
    {
      title: "Malpresentation (Breech or Transverse Lie)",
      description: "When the fetus is positioned bottom-down (breech) or lying horizontally (transverse), preventing a safe head-first vaginal birth.",
      icon: <Baby className="w-7 h-7" />
    },
    {
      title: "Repeat Caesarean & Thin Uterine Scars",
      description: "Evaluating prior lower-segment surgical scar thickness on ultrasound to elect the safest delivery route and avert uterine dehiscence.",
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: "Multiple Gestations (Twins & Triplets)",
      description: "Safeguarding mother and babies during twin or triplet deliveries, especially when the presenting twin is non-vertex.",
      icon: <HeartPulse className="w-7 h-7" />
    },
    {
      title: "Placental Abnormalities (Previa / Abruptio)",
      description: "Low-lying placenta blocking the cervical os (placenta previa) or premature placental separation requiring planned surgical intervention.",
      icon: <Shield className="w-7 h-7" />
    },
    {
      title: "Labor Dystocia & Cephalopelvic Disproportion",
      description: "When labor fails to progress despite adequate contractions or when fetal head dimensions exceed maternal pelvic capacity (CPD).",
      icon: <Clock className="w-7 h-7" />
    }
  ];

  const surgicalTimeline = [
    {
      title: 'Step 1: Pre-Surgical Optimization & PAC Clearance',
      description: 'Comprehensive clinical vitals check, fetal CTG tracking, complete blood count cross-matching, and pre-anesthetic consultation for total surgical safety.',
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      title: 'Step 2: Precision Regional Anesthesia',
      description: 'Administration of targeted spinal or combined spinal-epidural anesthesia, ensuring complete lower-body pain block while the mother stays awake and aware.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 3: Delicate Lower-Segment Hysterotomy',
      description: 'A precise, low-transverse bikini incision is created to gently deliver the newborn within minutes, followed by immediate cord clamping and pediatrician evaluation.',
      icon: <Baby className="w-5 h-5" />
    },
    {
      title: 'Step 4: Cosmetic Subcuticular Closure & Golden Hour',
      description: 'Meticulous anatomical layer-by-layer closure using absorbable sutures to minimize scarring, followed immediately by recovery room skin-to-skin newborn bonding.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Structured Antenatal Workup", description: "Regular clinical assessments in Sushant Golf City tracking fetal maturity, placental location, and surgical eligibility.", icon: <Stethoscope className="w-6 h-6 text-accent" /> },
    { title: "Pre-Operative Fasting Protocols", description: "Strictly adhering to 6 to 8-hour pre-surgery fasting guidelines to prevent anesthesia-related gastric aspiration.", icon: <ClipboardList className="w-6 h-6 text-accent" /> },
    { title: "Metabolic & Hemoglobin Priming", description: "Optimizing iron reserves and hydration prior to surgery to accelerate postoperative wound healing and stamina.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Hospital Bag Organization", description: "Packing essential high-waisted post-surgical apparel, nursing bras, baby essentials, and insurance paperwork.", icon: <Home className="w-6 h-6 text-accent" /> },
    { title: "Empowered Surgical Birth Plan", description: "Discussing skin-to-skin preferences, companion presence in the recovery suite, and immediate lactation goals.", icon: <BookOpen className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Incision Healing & Scar Care",
      description: "Detailed instructions on keeping the bikini incision dry, recognizing signs of optimal healing, and safe waterproof dressings under Dr. Shamim Sultana Yashine's supervision.",
      icon: <ShieldCheck className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Ergonomic Post-Surgical Nursing",
      description: "Coaching on specialized nursing holds—such as the football clutch and side-lying positions—that relieve all direct pressure from your abdominal incision.",
      icon: <Baby className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Gradual Mobility & Core Restoration",
      description: "Early gentle mobilization within 12-24 hours to stimulate blood circulation and intestinal motility, paired with supportive emotional post-birth care.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: 'When is an LSCS (Caesarean Section) clinically necessary?',
      answer: 'An LSCS is recommended when a vaginal birth poses clinical hazards. Primary indications include fetal distress, breech or transverse presentations, placenta previa, severe maternal preeclampsia, cephalopelvic disproportion (baby too large for pelvis), failure to progress during active labor, or a prior uterine surgery requiring a planned elective delivery.'
    },
    {
      question: 'Is a Caesarean section safe for both the mother and the baby?',
      answer: 'Yes. Conducted by an experienced obstetric surgeon like Dr. Shamim Sultana Yashine in modern sterile operating suites, a Caesarean section is an exceptionally safe and life-saving procedure backed by advanced anesthesia and dedicated neonatal resuscitation teams.'
    },
    {
      question: 'What is the standard surgical duration for an LSCS delivery?',
      answer: 'The complete surgical procedure typically lasts 40 to 50 minutes. Your baby is gently delivered within the first 10 to 15 minutes, while the remaining time is dedicated to complete placental removal and meticulous anatomical layer closure with minimal scarring.'
    },
    {
      question: 'What is the typical recovery timeline following a Caesarean delivery?',
      answer: 'Most mothers walk comfortably within 24 hours and are discharged within 3 to 4 days. Full abdominal wall and tissue healing progresses over 4 to 6 weeks, during which heavy weight lifting should be avoided.'
    },
    {
      question: 'Can I initiate breastfeeding immediately after a C-section?',
      answer: 'Yes, absolutely! As soon as you enter the recovery suite, our clinical team assists you with comfortable nursing positions like the football hold or side-lying technique to facilitate immediate colostrum bonding without straining your incision.'
    },
    {
      question: 'What is the estimated cost of an LSCS delivery in Sushant Golf City, Lucknow?',
      answer: 'The total cost of a Caesarean delivery in Sushant Golf City generally ranges between ₹60,000 and ₹1,20,000 depending on the chosen partner hospital category, room selection (private/deluxe), surgical complexity, anesthesia, and neonatal nursery charges. We provide complete financial estimates during antenatal consultations.'
    },
    {
      question: 'Can I attempt a normal delivery (VBAC) in my next pregnancy after this C-section?',
      answer: 'Yes! Having one lower segment transverse C-section does not mandate surgical delivery for subsequent pregnancies. Under Dr. Shamim Sultana Yashine\'s evaluation, many mothers safely attempt and succeed at Vaginal Birth After Cesarean (VBAC).'
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
        <PageHeader title="LSCS (Caesarean Section)" breadcrumbs={breadcrumbs} bgImage="/images/lscs-header-indian.webp" />

        {/* === SECTION 1: Overview (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group">
                <Image 
                  src="/images/lscs-overview-indian.webp" 
                  alt="LSCS Caesarean Section Care and Surgical Maternity in Sushant Golf City Lucknow" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is LSCS (Caesarean Section)?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Lower Segment Caesarean Section (LSCS)</strong>, commonly referred to as a C-section, is an essential surgical obstetric procedure where a newborn is safely delivered through a precise transverse incision made in the mother&apos;s lower abdominal wall and lower uterine segment. It is performed when natural vaginal delivery poses acute maternal or fetal risks.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we combine advanced surgical precision with deep empathetic care. We support mothers across Sushant Golf City, Sultanpur Road, Awadh Vihar Yojna, Raebareli Road, New Gomti Nagar, and greater Lucknow through planned elective and emergency surgical deliveries.
                </p>
                <p>
                  Whether your procedure is scheduled in advance due to breech presentation, multi-fetal gestation, or prior uterine surgery, or is performed during active labor, Dr. Shamim Sultana Yashine utilizes refined cosmetic suturing techniques to ensure minimal tissue trauma, rapid recovery, and discreet scarring.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book a Consultation Today
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

        {/* === SECTION 2: Indications (White bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="When is a Caesarean Section Recommended?" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {indicationsData.map((benefit, index) => {
                const pastels = [
                  { cardBg: 'bg-[#F2FBF5]', blob1: 'bg-[#B8E6C4]', blob2: 'bg-[#D1F2D9]', iconBg: 'bg-[#D1F2D9]', text: 'text-[#15332B]', descText: 'text-[#2D5545]' },
                  { cardBg: 'bg-[#EEF4FF]', blob1: 'bg-[#B3D1FF]', blob2: 'bg-[#C4DEFF]', iconBg: 'bg-[#C4DEFF]', text: 'text-[#142952]', descText: 'text-[#2B4A7A]' },
                  { cardBg: 'bg-[#F6F1FF]', blob1: 'bg-[#D4BFFF]', blob2: 'bg-[#E2D4FF]', iconBg: 'bg-[#E2D4FF]', text: 'text-[#2A1650]', descText: 'text-[#4A3270]' },
                  { cardBg: 'bg-[#FFF6EE]', blob1: 'bg-[#FFD4A8]', blob2: 'bg-[#FFE2C2]', iconBg: 'bg-[#FFE2C2]', text: 'text-[#4A2E0F]', descText: 'text-[#6B4A25]' },
                  { cardBg: 'bg-[#FFF1F5]', blob1: 'bg-[#FFC0D4]', blob2: 'bg-[#FFD0DF]', iconBg: 'bg-[#FFD0DF]', text: 'text-[#4A1228]', descText: 'text-[#6B2A45]' },
                  { cardBg: 'bg-[#EFF9F9]', blob1: 'bg-[#A8DEDE]', blob2: 'bg-[#C4EDED]', iconBg: 'bg-[#C4EDED]', text: 'text-[#103838]', descText: 'text-[#255555]' },
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

        {/* === SECTION 3: Timeline (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Understanding the Caesarean Delivery Procedure" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Knowing exactly what happens during a C-section can drastically reduce anxiety and help you feel fully prepared for the big day.
              </p>
              <VerticalTimeline items={surgicalTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Preparation (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Preparing for a Planned Caesarean Section" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Proper preparation helps ensure a smooth, confident surgical experience and a faster postpartum recovery.
            </p>
            
            {/* Hero image banner */}
            <div className="rounded-[24px] overflow-hidden shadow-lg relative min-h-[320px] md:min-h-0 md:aspect-[21/9] w-full mb-8 group cursor-pointer">
              <Image 
                src="/images/lscs-prep-indian.webp" 
                alt="Pregnant Indian Woman Packing Hospital Bag" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#151722]/90 via-[#151722]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-md z-10">
                <h4 className="text-[24px] font-bold mb-2 text-white drop-shadow-md">Preparation is Key</h4>
                <p className="text-white text-[15px] leading-relaxed drop-shadow-sm font-medium">Packing your hospital bag and discussing your birth plan early ensures a stress-free transition on the day of your planned caesarean.</p>
              </div>
            </div>
            
            {/* Grid of numbered cards — 2 columns */}
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
                    {/* Step number watermark */}
                    <div className={`absolute -top-2 -right-1 text-[80px] font-black leading-none opacity-[0.06] ${c.num} pointer-events-none select-none`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {/* Icon */}
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

        {/* === SECTION 5: Recovery + Why Choose + FAQ (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">

            {/* Postnatal Care (Recovery Cards) */}
            <div>
              <AnimatedHeading 
                text="Recovery After a Caesarean Section" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
                While recovery from a C-section takes slightly longer than a normal delivery, dedicated postpartum care will ensure you heal comfortably and safely.
              </p>
              <CardStack items={recoveryCards} />
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Mothers Trust June Women&apos;s Health for Caesarean Section Delivery
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
                      <strong className="block text-[16px] text-white">Surgical Precision &amp; Safety</strong>
                      <span className="text-white/80 text-[14px]">Over 15+ years of surgical expertise ensuring meticulous anatomical lower-segment incisions, minimal blood loss, and discreet cosmetic healing.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Direct Specialist Attention</strong>
                      <span className="text-white/80 text-[14px]">You consult Dr. Shamim Sultana Yashine personally from pre-operative planning to post-surgical discharge, ensuring total continuity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Modern Hospital Facilities</strong>
                      <span className="text-white/80 text-[14px]">Surgeries are conducted at premier affiliated tertiary hospitals in Lucknow equipped with advanced operating theaters, Level-III NICU, and adult ICU support.</span>
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
