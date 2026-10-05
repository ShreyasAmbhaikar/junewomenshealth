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
  AlertTriangle,
  Calendar, 
  Clock, 
  ClipboardList,
  Shield,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best High Risk Pregnancy Doctor in Sushant Golf City, Lucknow | June Women's Health",
  description: "Specialized High Risk Pregnancy Management by Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow. Meticulous care for gestational diabetes, hypertension, and twins. Book today.",
  alternates: {
    canonical: '/high-risk-pregnancy-management-in-lucknow/',
  }
};

export default function HighRiskPregnancyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'High Risk Pregnancy Management' },
  ];

  const highRiskConditions = [
    { 
      title: "Gestational Diabetes & Glycemic Mapping", 
      description: "Structured medical nutrition therapy, daily capillary blood sugar monitoring, and insulin optimization to safeguard maternal metabolic health and prevent fetal macrosomia.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Preeclampsia & Hypertensive Disorders", 
      description: "Rigorous arterial blood pressure audits, proteinuria screenings, and placental vascular resistance checks to shield mothers from eclampsia and premature placental detachment.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Multiple Gestations (Twin & Higher-Order)", 
      description: "Advanced bi-weekly ultrasound tracking of inter-twin discordant growth, chorionicity assessment, amniotic fluid volume mapping, and preterm labor prevention.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Recurrent Pregnancy Loss & Cervical Incompetence", 
      description: "Clinical management of recurrent miscarriages, thrombophilia screening, cervical cerclage placement (encirclage), and uterine scar integrity evaluation for planned VBAC.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const prepGuidelines = [
    { 
      title: "Biometric Self-Monitoring Protocol", 
      description: "Maintaining precise home records of daily blood pressure logs, post-meal glucose readings, and third-trimester fetal kick count patterns for clinical audit.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Serial Doppler & Biophysical Surveillance", 
      description: "Conducting targeted umbilical artery and middle cerebral artery Doppler velocity studies to ensure optimal oxygenation and placental nutrient transfer.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Advanced Tertiary Hospital Integration", 
      description: "Pre-coordinating delivery admissions at premier multi-specialty hospitals in Lucknow equipped with Level-III NICU facilities and 24/7 adult intensive care.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const managementTimeline = [
    {
      title: 'Phase 1: Comprehensive Maternal-Fetal Risk Audit',
      description: 'Detailed maternal history review, preconception risk assessment, early viability scan, and baseline metabolic profiling under Dr. Shamim Sultana Yashine to categorize clinical risk parameters.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Phase 2: Placental Hemodynamics & Targeted Ultrasound',
      description: 'Executing high-resolution Level-II anatomical scans, uterine artery Doppler waveform studies, and serial cervical length assessments to preempt preterm labor risks.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Phase 3: Therapeutic Modulation & Fetal Non-Stress Testing',
      description: 'Stabilizing blood pressure with pregnancy-safe antihypertensives, titrating glycemic therapies, and administering regular computerized Cardiotocography (CTG/NST) for fetal cardiac evaluation.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Phase 4: Multi-Disciplinary Delivery Execution',
      description: 'Carefully determining the safest gestational delivery milestone (weeks 37-39) to protect mother and child. Deliveries are conducted personally by Dr. Shamim Sultana Yashine at tertiary hospital centers.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What medical conditions classify a pregnancy as high-risk in Lucknow?',
      answer: 'A pregnancy is designated as high-risk when maternal or fetal conditions require heightened clinical surveillance. Common indicators include advanced maternal age (35+), pre-existing or gestational diabetes, chronic or gestational hypertension, thyroid imbalances, twin pregnancies, recurrent pregnancy loss, previous C-section scars, or intrauterine growth restriction (IUGR).'
    },
    {
      question: 'Can a patient with a high-risk pregnancy still achieve a safe normal delivery?',
      answer: 'Yes! A high-risk pregnancy does not automatically require a Cesarean section. Under Dr. Shamim Sultana Yashine\'s evidence-based clinical protocols, many expectant mothers with well-managed gestational diabetes, controlled hypertension, or twin gestations achieve successful, safe normal vaginal births.'
    },
    {
      question: 'What are the consultation and diagnostic fees for high-risk pregnancy in Sushant Golf City?',
      answer: 'At June Women\'s Health, we ensure total financial transparency. A specialized high-risk pregnancy consultation with Dr. Shamim Sultana Yashine is ₹600. Detailed fetal growth and color Doppler scans range between ₹2,500 and ₹4,500. Fetal Cardiotocography (NST/CTG) monitoring is ₹800 per session. Hospital delivery packages at our tertiary partner hospitals in Lucknow range from ₹35,000 to ₹55,000 for normal deliveries and ₹50,000 to ₹75,000 for cesarean deliveries.'
    },
    {
      question: 'What urgent warning signs in high-risk pregnancy require immediate hospital contact?',
      answer: 'Contact Dr. Shamim Sultana Yashine immediately if you observe vaginal bleeding, sudden watery discharge (water breaking), severe persistent headaches, blurred vision, sudden facial or hand edema (preeclampsia indicators), acute abdominal cramping, or noticeable reduction in baby movements after week 28.'
    },
    {
      question: 'How is gestational diabetes managed to ensure fetal safety?',
      answer: 'We manage gestational diabetes through customized medical nutrition therapy, low-glycemic meal charting, safe prenatal exercise, daily capillary home blood sugar tracking, and pregnancy-safe oral medications or insulin therapy if dietary adjustments alone do not achieve ideal glycemic control.'
    },
    {
      question: 'Where are high-risk hospital deliveries and emergencies conducted?',
      answer: 'Outpatient consultations and diagnostic monitoring are conducted at our private clinic in Sushant Golf City. Hospital deliveries and emergency admissions are personally overseen by Dr. Shamim Sultana Yashine at leading tertiary care hospitals in Lucknow with 24/7 adult intensive care and Level-III neonatal ICUs (NICU).'
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
        <PageHeader title="High Risk Pregnancy Care" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is High Risk Pregnancy Management? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/high-risk-overview.webp" 
                  alt="Realistic 3D medical illustration showing twin gestation in separate amniotic sacs within the uterus in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is High Risk Pregnancy Management?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>High Risk Pregnancy Management</strong> encompasses specialized obstetric surveillance, advanced hemodynamic tracking, and targeted medical interventions designed to protect maternal health and optimize fetal outcomes when underlying risks are present. Pre-existing chronic illnesses (like diabetes and hypertension) or gestation-specific challenges (such as preeclampsia, gestational diabetes, twin pregnancies, or previous Cesarean scars) require rigorous, experienced clinical oversight.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we provide dedicated high-risk obstetric protocols for families across Sushant Golf City, Raebareli Road, Sultanpur Road, Ashiyana, New Gomti Nagar, Awadh Vihar Yojna, and greater Lucknow. Combining 15+ years of surgical and obstetric expertise, Dr. Shamim Sultana Yashine delivers reassuring, highly detailed maternal-fetal care.
                </p>
                <p>
                  Operating as an individualized single-doctor practice near Lulu Mall on Shaheed Path, our clinic guarantees direct physician continuity without intermediary junior doctors, providing unhurried visits and an impeccably sterilized clinical atmosphere.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your High-Risk Assessment Today
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
              text="Routine vs. High-Risk Pregnancy Care Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              A high-risk pregnancy classification simply means that your pregnancy requires extra monitoring, specialized scans, and customized safety paths.
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
                      <span className="font-bold text-primary text-[15px] mb-1 block">Antenatal Monitoring</span>
                      <p className="text-text text-[14px] leading-relaxed">Routine prenatal checkups, standard weight, and vital tracking.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Scan Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Standard 3 to 4 major scans: dating, NT, anomaly, and late growth check.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Doctor Visits</span>
                      <p className="text-text text-[14px] leading-relaxed">Once a month up to week 28, bi-weekly up to week 36, then weekly.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Delivery Preparation</span>
                      <p className="text-text text-[14px] leading-relaxed">Aims for a normal vaginal delivery with natural labor exercises.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Postpartum Needs</span>
                      <p className="text-text text-[14px] leading-relaxed">Routine 6-week recovery check and newborn breastfeeding coaching.</p>
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
                      <span className="font-bold text-primary text-[15px] mb-1 block">Antenatal Monitoring</span>
                      <p className="text-text text-[14px] leading-relaxed">Vigilant mapping of blood pressure, blood glucose, fetal Doppler, and cervical lengths.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Scan Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Frequent growth and umbilical artery Doppler scans to check baby blood flows.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Doctor Visits</span>
                      <p className="text-text text-[14px] leading-relaxed">More frequent visits; weekly or bi-weekly starting much earlier in gestation.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Delivery Preparation</span>
                      <p className="text-text text-[14px] leading-relaxed">Planned labor induction or C-section at equipped tertiary hospitals.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Postpartum Needs</span>
                      <p className="text-text text-[14px] leading-relaxed">Specialized surgical wound checks, metabolic tracking, or BP control.</p>
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

        {/* === SECTION 3: High-Risk Conditions We Manage (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="High-Risk Conditions We Manage" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinical protocol provides dedicated surveillance and personalized therapies to protect mothers facing the following high-risk factors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {highRiskConditions.map((condition, index) => {
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

        {/* === SECTION 4: Our Pre-Procedure Preparation & Safe Guidelines (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Our Pre-Procedure Preparation & Safe Guidelines" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Managing a high-risk pregnancy successfully requires structured clinical scheduling, home vitals logs, and advanced fetal scans.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/high-risk-prep.webp" 
                alt="High-resolution Cardiotocography CTG monitoring display showing fetal heart rate patterns" 
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

        {/* === SECTION 5: Our High-Risk Management Protocol Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Our High-Risk Management Protocol" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We follow a rigorous, step-by-step surveillance protocol to preempt complications, support fetal growth, and coordinate deliveries safely.
              </p>
              <VerticalTimeline items={managementTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose June Women's Health for High Risk Pregnancy Care? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why High-Risk Mothers Trust June Women&apos;s Health in Lucknow
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
                      <strong className="block text-[16px] text-white">Direct Access to Senior Obstetrician</strong>
                      <span className="text-white/80 text-[14px]">You consult Dr. Shamim Sultana Yashine personally at every visit. Registered high-risk mothers receive direct communication channels for timely clinical decisions.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Calm &amp; Sterilized Clinical Setting</strong>
                      <span className="text-white/80 text-[14px]">Private appointments in Sushant Golf City ensure minimal waiting times, zero lobby crowds, and a safe, infection-free clinical environment.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Equipped Tertiary Hospital Tie-ups</strong>
                      <span className="text-white/80 text-[14px]">Complex hospital admissions and deliveries are personally conducted by Dr. Shamim Sultana Yashine at premier tertiary hospital centers in Lucknow with Level-III NICU facilities.</span>
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
