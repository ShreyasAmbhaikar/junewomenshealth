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
  Sparkles,
  Baby,
  Smile
} from 'lucide-react';

export const metadata = {
  title: "Best Gynecological Cancer Screening & Pap Smears in Sushant Golf City, Lucknow | June Women's Health",
  description: "Gentle cervical and breast cancer screenings under Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow. Pap smears, HPV DNA tests, & breast exams. Book today.",
  alternates: {
    canonical: '/cancer-screening-in-lucknow/',
  }
};

export default function CancerScreeningPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cancer Screening' },
  ];

  const subServices = [
    { 
      title: "Liquid-Based Pap Smear (LBC)", 
      description: "A gentle in-office cervical swab that isolates cellular layers to identify atypical pre-malignant dysplasias before they progress into invasive neoplasia.", 
      icon: <Activity className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "High-Risk HPV DNA Testing", 
      description: "PCR molecular assays detecting persistent oncogenic strains (HPV 16, 18, and related high-risk variants) responsible for cervical malignancies.", 
      icon: <ShieldCheck className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Clinical Breast Examination (CBE)", 
      description: "Comprehensive physical palpation of breast tissue and axillary lymph nodes to identify discreet nodules or structural shifts, plus personalized self-exam instruction.", 
      icon: <Heart className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Pelvic & Endometrial Sonography", 
      description: "High-definition transvaginal ultrasound imaging (TVS) assessing ovarian morphology, cyst architecture, and endometrial thickness to rule out uterine hyperplasia.", 
      icon: <Sparkles className="w-6 h-6 text-accent" /> 
    }
  ];

  const safetyGuidelines = [
    { 
      title: "Mid-Cycle Scheduling Window", 
      description: "Plan your screening appointment 10 to 20 days after the onset of your menstrual period to ensure the clearest cytological specimen without red blood cell interference.", 
      icon: <Calendar className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Avoid Intravaginal Products", 
      description: "Refrain from using vaginal washes, intimate douches, contraceptive jellies, or medicated suppositories for 48 hours prior to your Pap smear collection.", 
      icon: <Clock className="w-6 h-6 text-accent" /> 
    },
    { 
      title: "Abstain from Intercourse", 
      description: "Avoid sexual intercourse for 24 to 48 hours before testing to prevent temporary mucosal inflammation or residual fluid from altering laboratory cytology results.", 
      icon: <ClipboardList className="w-6 h-6 text-accent" /> 
    }
  ];

  const careProtocol = [
    {
      title: 'Step 1: Confidential Risk & Family History Audit',
      description: 'A private consultation with Dr. Shamim Sultana Yashine reviewing gynecological history, familial cancer history, and mapping an individualized screening interval.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Gentle Clinical Swab & Exam',
      description: 'While resting comfortably, Dr. Shamim Sultana Yashine uses sterile, soft cytobrushes to harvest cervical cells in a gentle, painless process taking under a minute.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 3: NABL-Accredited Molecular Profiling',
      description: 'Samples are processed via advanced liquid-based cytology and PCR molecular diagnostics through high-precision NABL-accredited pathology partners.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 4: Report Counseling & Preventive Roadmap',
      description: 'Dr. Shamim Sultana Yashine interprets your findings in detail, outlines routine follow-up intervals, and guides you through HPV vaccination options if eligible.',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'Why is proactive gynecological cancer screening essential for every woman?',
      answer: 'Proactive screening is life-saving because reproductive tract malignancies—particularly cervical and early endometrial lesions—develop insidiously over several years without causing pain or visible symptoms. Liquid-based Pap smears and HPV DNA tests detect microscopic pre-cancerous transformations early, allowing complete curative treatment before cancer ever takes hold.'
    },
    {
      question: 'What is the genuine cost of cancer screening profiles at June Women\'s Health?',
      answer: 'We maintain 100% upfront financial clarity. A comprehensive preventive gynecological consultation is ₹600. A Liquid-Based Cytology (LBC) Pap smear is ₹1,400 to ₹1,900. High-risk HPV DNA molecular testing is ₹3,000 to ₹4,200. Combined Co-testing (Pap Smear + HPV DNA) is ₹3,800 to ₹5,200. A screening pelvic ultrasound (TVS) to evaluate ovarian and endometrial thickness is ₹1,600 to ₹2,400.'
    },
    {
      question: 'What is the clinical difference between a Pap smear and an HPV DNA test?',
      answer: 'A Pap smear examines the actual structure and shape of cervical cells under a microscope to identify cellular dysplasia (abnormal changes). An HPV DNA test is a molecular assay that checks for the genetic material of high-risk Human Papillomavirus strains that trigger those cellular changes in the first place.'
    },
    {
      question: 'At what age should women begin cervical and breast cancer screening?',
      answer: 'Cervical Pap smear screening should begin at age 21, repeated every 3 years. From age 30 onwards, co-testing with an HPV DNA test every 5 years is recommended. Clinical breast examinations should begin in your 20s during routine annual checkups, and annual screening mammograms are advised starting at age 40 (or earlier with a family history).'
    },
    {
      question: 'How do HPV vaccines complement routine cancer screening?',
      answer: 'HPV vaccines (such as Gardasil 9 and Cervavac) build protective humoral antibodies against the primary oncogenic HPV strains responsible for up to 90% of cervical cancers. Combining vaccination with regular screening provides near-complete lifelong protection against cervical malignancies.'
    },
    {
      question: 'What happens if my Pap smear or HPV report shows abnormal cells?',
      answer: 'An abnormal report is not a diagnosis of cancer; it simply highlights minor cellular changes (such as ASC-US or LSIL) that warrant closer medical observation. Dr. Shamim Sultana Yashine will review the specific findings and recommend repeat testing, colposcopic optical evaluation, or targeted biopsy.'
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
        <PageHeader title="Cancer Screening" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: What is Cancer Screening? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[926/418] w-full max-h-[420px] max-w-[926px] mx-auto bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/cancer-screening-overview.webp" 
                  alt="Cervical cytobrush and pap smear screening collection kit in clinic Sushant Golf City Lucknow" 
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Gynecological Cancer Screening?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Gynecological <strong>Cancer Screening</strong> is a vital, life-saving component of proactive female preventive healthcare. Malignancies of the reproductive tract—specifically cervical, endometrial, and ovarian conditions—often develop silently over several years without causing initial pain or warning symptoms. Routine screening is the single most effective tool for early detection and total cure.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we provide gentle, stress-free screening protocols. Serving women across Sushant Golf City, Vrindavan Yojna, Omaxe City, Arjunganj, Nilmatha, Awadh Vihar Yojna, and greater Lucknow, we perform painless Liquid-Based Pap smears, high-risk HPV DNA testing, pelvic ultrasound assessments, and clinical breast examinations.
                </p>
                <p>
                  Our private single-doctor clinic near Lulu Mall on Amar Shaheed Path is structured to guarantee absolute confidentiality, gentle sample collection, and unhurried medical discussions in a sterile, welcoming environment.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Preventive Screening Today
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

        {/* === SECTION 2: Pap Smear vs. HPV DNA Test: Comparison (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Pap Smear vs. HPV DNA Test" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[50px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              While both tests utilize a simple, quick cervical swab during your pelvic examination, they analyze completely different markers to protect your health.
            </p>

            {/* Custom Comparison layout styled exactly like the comparison table in MTP / PCOD section */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#C0354A] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Pap Smear */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF0EB] text-[#C0354A] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Pap Smear (Cytology)</h4>
                  <p className="text-[13px] text-[#E8475F] font-semibold uppercase tracking-wider">Cellular Changes. Regular Check.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Primary Goal</span>
                      <p className="text-text text-[14px] leading-relaxed">Detecting abnormal, dysplastic, or pre-cancerous changes in cervical cells.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Mechanism</span>
                      <p className="text-text text-[14px] leading-relaxed">Swabbing cells from the cervix and viewing them under a laboratory microscope.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Screening Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Recommended once every 3 years for women starting from age 21.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Accuracy</span>
                      <p className="text-text text-[14px] leading-relaxed">High reliability for active cell changes; best when combined as co-testing.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#FFF0EB] text-[#C0354A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Test Focus</span>
                      <p className="text-text text-[14px] leading-relaxed">Checks cell structure to capture mutations before they turn into cancer.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: HPV DNA Test */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">HPV DNA Test (Molecular)</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Viral Identification. High Sensitivity.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Primary Goal</span>
                      <p className="text-text text-[14px] leading-relaxed">Detecting high-risk strains of Human Papillomavirus linked to cervical cancer.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Mechanism</span>
                      <p className="text-text text-[14px] leading-relaxed">Molecular testing on cervical fluid to isolate and detect high-risk viral DNA.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Screening Frequency</span>
                      <p className="text-text text-[14px] leading-relaxed">Recommended once every 5 years for women starting from age 30.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Clinical Accuracy</span>
                      <p className="text-text text-[14px] leading-relaxed">Extremely high sensitivity; flags the viral infection before it damages cells.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Test Focus</span>
                      <p className="text-text text-[14px] leading-relaxed">Detects high-risk viral strains, identifying cancer risk at the molecular root.</p>
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

        {/* === SECTION 3: Preventative Screening Services We Provide (Cream bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Screening Services We Provide" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Our clinic offers a comprehensive range of preventative gynecological and breast health screening evaluations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {subServices.map((service, index) => {
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
              Adhering to proper clinical timing and scheduling guidelines is vital to collect clear cervical samples and guarantee test accuracy.
            </p>
            
            {/* Bento image banner - exact 838*418 dimensions */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/cancer-screening-prep.webp" 
                alt="Cervical screening preparation checklist and high-precision clinical guidelines" 
                fill
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyGuidelines.map((card, index) => {
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

        {/* === SECTION 5: The Screening Process Step-by-Step (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Cervical & Breast Screening Process" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                We make the screening process stress-free and gentle. It is completed quickly during a routine, private pelvic examination.
              </p>
              <VerticalTimeline items={careProtocol} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose June Women's Health for Cancer Screening? (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for Cancer Screening
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
                      <strong className="block text-[16px] text-white">Gentle Specimen Collection by Senior Specialist</strong>
                      <span className="text-white/80 text-[14px]">Avoid delegated testing. Dr. Shamim Sultana Yashine personally conducts every cervical swab and breast exam with utmost gentleness and clinical precision.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">NABL-Accredited Molecular Diagnostic Labs</strong>
                      <span className="text-white/80 text-[14px]">Specimens are processed with advanced liquid-based cytology and real-time PCR HPV testing to guarantee absolute accuracy in cellular analysis.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Confidential Prior-Appointment Setup</strong>
                      <span className="text-white/80 text-[14px]">Consultations and preventative screenings in Sushant Golf City operate by prior appointment, ensuring zero lobby crowds and complete patient privacy.</span>
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
