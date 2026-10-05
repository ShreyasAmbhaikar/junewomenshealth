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
  Star,
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const metadata = {
  title: "Best PCOD & PCOS Care in Sushant Golf City, Lucknow | June Women's Health",
  description: "Consult Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) for personalized PCOD & PCOS treatment in Sushant Golf City, Lucknow. Holistic hormonal balancing, weight management, and ovulation restoration.",
  alternates: {
    canonical: '/pcod-pcos-care-in-lucknow/',
  }
};

export default function PcodCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'PCOD & PCOS Care' },
  ];

  const symptomsData = [
    {
      title: "Oligomenorrhea & Irregular Cycles",
      description: "Delayed, unpredictable, or infrequent menstrual cycles signaling chronic anovulation and delayed follicular maturation.",
      icon: <Calendar className="w-7 h-7" />
    },
    {
      title: "Visceral Adiposity & Metabolic Resistance",
      description: "Stubborn weight accumulation around the lower abdomen and hips driven by cellular insulin resistance and impaired glucose utilization.",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Hyperandrogenism & Cystic Acne",
      description: "Elevated circulating free testosterone causing persistent jawline acne, sebum overproduction, and androgenic scalp hair thinning.",
      icon: <AlertCircle className="w-7 h-7" />
    },
    {
      title: "Hirsutism & Unwanted Hair Growth",
      description: "Coarse terminal hair distribution along the chin, upper lip, chest, and central abdominal midline caused by ovarian androgen excess.",
      icon: <Activity className="w-7 h-7" />
    }
  ];

  const treatmentTimeline = [
    {
      title: 'Step 1: Endocrine Assays & Antral Follicle Scans',
      description: 'Comprehensive serum hormone profiling (AMH, LH/FSH ratio, fasting insulin, DHEA-S, thyroid panel) paired with high-resolution pelvic ultrasound to evaluate ovarian stromal volume.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Low-Glycemic Anti-Inflammatory Nutrition',
      description: 'Crafting tailored nutritional protocols calibrated for Indian households to stabilize post-prandial glycemic spikes, reduce visceral inflammation, and curb sugar cravings.',
      icon: <Apple className="w-5 h-5" />
    },
    {
      title: 'Step 3: Insulin-Sensitizing Fitness Protocols',
      description: 'Prescribing progressive resistance training and brisk interval cardio regimens to upregulate muscular GLUT-4 glucose transporters and restore metabolic rate.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Targeted Ovulatory & Medical Management',
      description: 'Prescribing evidence-based insulin sensitizers, cyclic micronized progesterone, or gentle ovulation induction protocols for patients actively planning pregnancy.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Personalized Low-GI Meal Charting", description: "Eliminating refined starches and incorporating high-fiber complex grains to normalize post-meal insulin surges.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Progressive Muscle Conditioning", description: "Engaging in 150 minutes of weekly resistance and aerobic workouts to reduce abdominal fat and boost insulin sensitivity.", icon: <Activity className="w-6 h-6 text-accent" /> },
    { title: "Precision Endocrine Therapy", description: "Administering targeted inositol blends, metformin, or ovulation-inducing medications tailored to your fertility goals.", icon: <Stethoscope className="w-6 h-6 text-accent" /> },
    { title: "Cortisol & Circadian Optimization", description: "Implementing sleep hygiene and stress-reduction routines to lower adrenal androgens and stabilize hormonal rhythm.", icon: <Clock className="w-6 h-6 text-accent" /> },
    { title: "Serial Follicular Surveillance (TVS)", description: "Tracking dominant follicle growth and endometrial receptivity to verify healthy, timely spontaneous ovulation.", icon: <ClipboardList className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Metabolic & Glycemic Reset",
      description: "Reversing cellular insulin resistance through structured nutrition. Stabilizing fasting insulin halts rapid weight gain and reduces testosterone synthesis within 8-12 weeks.",
      icon: <HeartPulse className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Spontaneous Ovulatory Cycles",
      description: "Achieving predictable menstrual rhythms and natural egg release without dependence on recurring withdrawal bleeds, significantly improving fertility potential.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Sustained Endocrine Remission",
      description: "Maintaining clear skin, healthy hair density, balanced metabolic markers, and long-term protection against type 2 diabetes and cardiovascular risks.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: 'What is the diagnostic and treatment cost for PCOD and PCOS in Lucknow?',
      answer: 'Initial diagnostic evaluation at June Women\'s Health typically ranges between ₹3,000 and ₹7,500, covering complete hormonal panels (AMH, LH, FSH, thyroid, prolactin, fasting insulin) and high-resolution pelvic ultrasound follicle imaging. Ongoing monthly management, including follow-up consultations and customized lifestyle therapy, averages between ₹1,000 and ₹2,500. Dr. Shamim Sultana Yashine maintains 100% transparent pricing with zero unnecessary testing.'
    },
    {
      question: 'What is the clinical difference between PCOD and PCOS?',
      answer: 'PCOD (Polycystic Ovarian Disease) is primarily an ovarian condition where immature eggs form small cysts due to temporary hormonal imbalances, readily corrected through nutrition and activity. PCOS (Polycystic Ovarian Syndrome) is a broader metabolic and endocrine disorder involving chronic insulin resistance, elevated androgens, and systemic metabolic risks requiring targeted medical therapy.'
    },
    {
      question: 'Can women with PCOD or PCOS conceive naturally without IVF?',
      answer: 'Yes, absolutely! The primary barrier to pregnancy in PCOS is anovulation (irregular or absent egg release). Under Dr. Shamim Sultana Yashine\'s specialized care, insulin sensitization combined with targeted low-dose ovulation induction and follicular tracking enables the vast majority of women to achieve natural conception.'
    },
    {
      question: 'Why does weight reduction dramatically improve PCOS symptoms?',
      answer: 'Shedding even 5% to 8% of body weight significantly reduces circulating insulin levels. This reduction stops the ovaries from overproducing androgens, rapidly restoring spontaneous ovulation, regulating menstrual frequency, and clearing cystic acne.'
    },
    {
      question: 'Can PCOD and PCOS be completely cured or reversed?',
      answer: 'While PCOS is a genetic and metabolic predisposition without an overnight magic cure, it can be driven into complete long-term remission. With consistent low-glycemic eating, strength workouts, and appropriate medical support, women remain completely symptom-free and fertile throughout their lives.'
    },
    {
      question: 'Which dietary habits are most effective for managing PCOS in Indian kitchens?',
      answer: 'Focus on high-fiber whole grains (millets, oats, brown rice), lean proteins (paneer, lentils, eggs, sprouts), green leafy vegetables, and healthy fats while eliminating refined flour (maida), bakery sweets, deep-fried snacks, and sugary drinks that trigger rapid insulin spikes.'
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
        <PageHeader title="PCOD & PCOS Care" breadcrumbs={breadcrumbs} bgImage="/images/fertility-header.webp" />

        {/* === SECTION 1: What is PCOD & PCOS Care? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group bg-white border border-black/[0.03]">
                <Image 
                  src="/images/pcod-overview.webp" 
                  alt="Normal Ovary vs Polycystic Ovary (PCOS) Medical Diagram in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-4 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Comprehensive PCOD & PCOS Care?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Polycystic Ovarian Disease (PCOD) and Polycystic Ovarian Syndrome (PCOS) are complex metabolic and endocrine disorders impacting women across reproductive age. Underpinned by cellular insulin resistance and chronic hormonal dysregulation, the ovaries accumulate multiple immature antral follicles, disrupting regular ovulation. This presents as irregular menstrual periods, stubborn weight gain, persistent cystic acne, hirsutism, and subfertility.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong> delivers holistic, root-cause medical therapies rather than temporary symptom-masking pills. Serving patients across Sushant Golf City, New Gomti Nagar, Indira Nagar, Alambagh, Ashiyana, Sultanpur Road, and greater Lucknow, we focus on reversing insulin resistance, restoring spontaneous ovulation, and supporting natural conception.
                </p>
                <p>
                  In our unhurried, private clinic near Lulu Mall on Shaheed Path, Dr. Shamim Sultana Yashine personally conducts your hormonal audits and ultrasound follicle tracking, creating a collaborative, sustainable pathway to permanent endocrine wellness.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your PCOD/PCOS Consultation Today
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

        {/* === SECTION 2: PCOD vs PCOS Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="PCOD vs. PCOS: Understanding the Difference" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Although often used interchangeably, PCOD and PCOS are distinct conditions. Understanding these key differences is essential for effective treatment.
            </p>

            {/* Custom Comparison layout styled exactly like Image Attachment 3 */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: PCOD */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Polycystic Ovarian Disease (PCOD)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Hormonal Imbalance. Lifestyle Managed.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Nature of Condition</span>
                      <p className="text-text text-[14px] leading-relaxed">Mild hormonal imbalance where ovaries release immature, partially mature eggs.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Severity Level</span>
                      <p className="text-text text-[14px] leading-relaxed">Considered less severe. Ovaries still function relatively normally with proper care.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Fertility Impact</span>
                      <p className="text-text text-[14px] leading-relaxed">Women can often still ovulate and conceive naturally with basic lifestyle shifts.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Systemic Effects</span>
                      <p className="text-text text-[14px] leading-relaxed">Primarily affects the ovaries; exhibits minimal long-term metabolic health complications.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Management Approach</span>
                      <p className="text-text text-[14px] leading-relaxed">Managed successfully through exercise, target diets, and minor lifestyle revisions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: PCOS */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Polycystic Ovarian Syndrome (PCOS)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Endocrine Disorder. Medical Management.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Nature of Condition</span>
                      <p className="text-text text-[14px] leading-relaxed">Complex endocrine and metabolic disorder involving high androgen levels.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Severity Level</span>
                      <p className="text-text text-[14px] leading-relaxed">More severe, significantly disrupting the entire endocrine and metabolic pathways.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Fertility Impact</span>
                      <p className="text-text text-[14px] leading-relaxed">Leading cause of anovulatory infertility; requires ovulation induction and support.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Systemic Effects</span>
                      <p className="text-text text-[14px] leading-relaxed">Linked to insulin resistance, obesity, type 2 diabetes, and cardiovascular risks.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Management Approach</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires medical management, lifestyle revisions, and insulin sensitizers.</p>
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

        {/* === SECTION 3: Symptoms Grid (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Common Symptoms to Watch For" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {symptomsData.map((symptom, index) => {
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
                      {symptom.icon}
                    </div>
                    <h3 className={`text-[20px] font-bold mb-2 ${style.text} tracking-tight leading-snug`}>
                      {symptom.title}
                    </h3>
                    <p className={`${style.descText} text-[14px] leading-relaxed`}>
                      {symptom.description}
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

        {/* === SECTION 4: Timeline / Our Holistic Treatment Pathway (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our Holistic Treatment Pathway" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Our clinical method targets metabolic restoration. We guide patients in Sushant Golf City and Lucknow through systematic hormonal stabilization.
              </p>
              <VerticalTimeline items={treatmentTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 5: Lifestyle Shifts & Metabolic Support (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Lifestyle Shifts & Metabolic Support" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Addressing PCOS is a continuous lifestyle shift. Reversing metabolic resistance mends clinical outcomes.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/pcod-prep.webp" 
                alt="PCOS Holistic Lifestyle Shifts and Metabolic Support Diagram" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
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

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Recovery / Metabolic Restoration (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Expected Treatment Milestones" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Hormonal balance mends progressively. Here is what you can expect during your metabolic recovery journey under Dr. Shamim Sultana Yashine's care.
            </p>
            <CardStack items={recoveryCards} />
          </div>
        </section>

        {/* === Wave Divider 6 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 7: Trust, FAQs & Final CTA (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px] flex flex-col gap-[70px]">

            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for PCOD &amp; PCOS Care
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
                      <strong className="block text-[16px] text-white">Root-Cause Endocrine Optimization</strong>
                      <span className="text-white/80 text-[14px]">We target the cellular insulin resistance and metabolic dysfunction driving your symptoms, avoiding reliance on temporary birth control pills.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Culturally Tailored Indian Nutrition</strong>
                      <span className="text-white/80 text-[14px]">We provide realistic, delicious low-glycemic dietary plans and active movement structures designed seamlessly for Indian lifestyles.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Empowered Natural Fertility</strong>
                      <span className="text-white/80 text-[14px]">Personalized follicular monitoring and gentle ovulation induction under Dr. Shamim Sultana Yashine for women aiming for spontaneous conception.</span>
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
