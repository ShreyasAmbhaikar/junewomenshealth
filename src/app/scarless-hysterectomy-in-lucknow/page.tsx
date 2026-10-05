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
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Best Scarless Hysterectomy (NDVH) Doctor in Sushant Golf City, Lucknow | June Women's Health",
  description: "Get expert Non-Descent Vaginal Hysterectomy (NDVH) with zero abdominal scars by Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) in Sushant Golf City, Lucknow. Book a consult today.",
  alternates: {
    canonical: '/scarless-hysterectomy-in-lucknow/',
  }
};

export default function ScarlessHysterectomyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Scarless Hysterectomy' },
  ];

  const procedureTimeline = [
    {
      title: 'Step 1: Pelvic Anatomy & Uterine Mobility Audit',
      description: 'Prior to surgery, Dr. Shamim Sultana Yashine performs transvaginal sonography and clinical pelvic mapping to verify uterine dimensions and confirm feasibility for natural vaginal extraction.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: 'Step 2: Anesthesia & Circumferential Mucosal Incision',
      description: 'Under gentle regional spinal or general anesthesia, a precise circular mucosal incision is placed internally at the cervicovaginal junction, completely avoiding any abdominal skin incisions.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Step 3: Sequential Vessel & Ligament Ligation',
      description: 'Using specialized vaginal surgical retractors and electrosurgical instruments, the uterine vessels, uterosacral, and cardinal ligaments are systematically secured and ligated.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Step 4: Vaginal Retrieval & Peritoneal Vault Closure',
      description: 'The uterus is extracted smoothly via the vaginal introitus (using morcellation/debulking if enlarged), followed by anatomically secure vaginal vault closure using absorbable sutures.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Pre-Surgical Anesthesia Clearance", description: "Completing comprehensive pre-operative blood panels, cardiac evaluation, coagulation assays, and chest X-rays to ensure total anesthesia safety.", icon: <ClipboardList className="w-6 h-6 text-accent" /> },
    { title: "Strict Pre-Op Fasting Protocol", description: "Maintaining an 8-hour fasting window (nil per os) prior to scheduled surgery along with gentle bowel preparation for optimal pelvic visibility.", icon: <Clock className="w-6 h-6 text-accent" /> },
    { title: "Daycare & Inpatient Preparation", description: "Packing loose comfortable clothing, supportive undergarments, and sanitary pads for a comfortable 24 to 48 hour postoperative recovery stay.", icon: <Home className="w-6 h-6 text-accent" /> },
    { title: "Medication Reconciliation", description: "Reviewing daily anti-hypertensive, thyroid, or blood-thinning prescriptions with Dr. Shamim Sultana Yashine to adjust dosage schedules before surgery.", icon: <BookOpen className="w-6 h-6 text-accent" /> },
    { title: "At-Home Convalescence Planning", description: "Organizing home support for the first 3 to 5 days post-discharge so you can rest comfortably without managing household chores or heavy lifting.", icon: <Smile className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "In-Hospital Monitored Recovery",
      description: "During the first 24 to 48 hours, intravenous hydration, anti-inflammatory pain relief, and early walking are instituted to restore pelvic circulation and bowel motility.",
      icon: <HeartPulse className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Home Healing & Pelvic Protection",
      description: "Avoid lifting heavy loads, climbing strenuous stairs, or bearing down during the first 2 to 3 weeks. Maintain a high-fiber diet and hydration to prevent constipation.",
      icon: <ShieldCheck className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Complete Internal Tissue Restoration",
      description: "Internal vaginal vault healing completes within 4 to 6 weeks. Avoid sexual intercourse, vaginal douching, or vigorous core workouts until final clinical follow-up.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: 'What is a Scarless Hysterectomy (NDVH) and what is the typical cost in Lucknow?',
      answer: 'Non-Descent Vaginal Hysterectomy (NDVH)—popularly known as Scarless Hysterectomy—is a minimally invasive surgical procedure where the uterus is removed entirely through the natural vaginal canal without making a single cut on the abdominal skin. In Lucknow, the total cost for NDVH typically ranges between ₹75,000 and ₹1,25,000, covering surgical fees, operating room charges, standard anesthesia, disposables, and a 24-48 hour hospital stay. Dr. Shamim Sultana Yashine provides an itemized financial outline prior to scheduling.'
    },
    {
      question: 'How is a scarless vaginal hysterectomy different from a laparoscopic hysterectomy?',
      answer: 'A laparoscopic hysterectomy requires 3 to 4 small keyhole incisions (0.5cm to 1cm) on your abdomen for camera and instrument access. In contrast, Scarless Hysterectomy (NDVH) utilizes the natural vaginal opening exclusively, leaving zero scars on your abdomen, eliminating incisional hernia risks, and delivering significantly reduced postoperative abdominal muscle soreness.'
    },
    {
      question: 'Can a scarless hysterectomy be performed if I have large fibroids or an enlarged uterus?',
      answer: 'Yes! Experienced pelvic surgeons like Dr. Shamim Sultana Yashine routinely perform NDVH on enlarged uteri (up to 12-16 weeks gestational size) by utilizing specialized internal debulking techniques (such as bisection, myomectomy, or coring) to extract the uterus safely without converting to an open abdominal incision.'
    },
    {
      question: 'How much pain should I expect after an NDVH procedure?',
      answer: 'Because abdominal muscles and skin layers are untouched, postoperative pain is markedly lower than open abdominal surgery. Most patients experience mild pelvic tightness or menstrual-like cramping for 24-48 hours, readily relieved by mild oral analgesics. Most women walk comfortably within 12 to 24 hours.'
    },
    {
      question: 'Who is not a candidate for Non-Descent Vaginal Hysterectomy?',
      answer: 'NDVH may not be recommended for patients with known gynecological malignancies (ovarian or uterine cancer), severe frozen pelvis from extensive stage IV endometriosis, or extreme pelvic adhesions from multiple prior abdominal surgeries. A thorough pre-operative assessment with Dr. Shamim Sultana Yashine confirms your eligibility.'
    },
    {
      question: 'Will undergoing a scarless hysterectomy trigger immediate surgical menopause?',
      answer: 'Not if your ovaries are healthy and preserved! A hysterectomy only removes the uterus (ending monthly bleeding). When the ovaries are preserved, they continue producing estrogen and progesterone naturally, maintaining hormonal balance and avoiding immediate surgical menopause.'
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
        <PageHeader title="Scarless Hysterectomy (NDVH)" breadcrumbs={breadcrumbs} bgImage="/images/scarless-header.webp" />

        {/* === SECTION 1: What is Scarless Hysterectomy (NDVH)? (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[2.2/1] w-full max-h-[420px] bg-white p-4 border border-black/[0.03] group">
                <Image 
                  src="/images/scarless-prep.webp" 
                  alt="Non-Descent Vaginal Hysterectomy (NDVH) Scarless Uterus Removal Pelvic Anatomy Diagram in Sushant Golf City Lucknow" 
                  fill
                  className="object-contain group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is Scarless Hysterectomy (NDVH)?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  <strong>Scarless Hysterectomy</strong>, medically designated as <strong>Non-Descent Vaginal Hysterectomy (NDVH)</strong>, represents the pinnacle of minimally invasive gynecological surgery. By removing the non-prolapsed uterus entirely through the natural vaginal canal, it completely avoids abdominal skin incisions, preserving abdominal wall aesthetics, minimizing surgical trauma, and accelerating post-operative healing.
                </p>
                <p>
                  At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, led by <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong>, we specialize in performing NDVH for benign gynecological conditions including uterine fibroids, adenomyosis, and abnormal uterine bleeding (AUB) resistant to medical therapy.
                </p>
                <p>
                  Serving patients from Sushant Golf City, Vrindavan Yojna, Omaxe City, Arjunganj, Nilmatha, Awadh Vihar Yojna, and greater Lucknow, Dr. Shamim Sultana Yashine conducts detailed pre-operative assessments and surgical planning at our private single-doctor clinic near Lulu Mall on Shaheed Path, coordinating procedures in state-of-the-art sterile hospital theatres.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Hysterectomy Consultation Today
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

        {/* === SECTION 2: Benefits / Vaginal vs Abdominal Hysterectomy (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Vaginal vs. Abdominal Hysterectomy Comparison" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              According to global gynecological guidelines, a vaginal hysterectomy is the route of choice whenever technically feasible, due to its overwhelming advantages for recovery.
            </p>
            
            {/* Infographic comparing Scarless Vaginal vs Open Abdominal Hysterectomy */}
            {/* Custom Comparison layout styled exactly like PCOD vs PCOS comparison */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative max-w-[1024px] mx-auto">
              {/* Vertical dotted line with VS circle in the middle (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-[120px] bottom-[40px] -translate-x-1/2 w-0 border-r-2 border-dashed border-[#E2E8F0] z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-[#5C35CC] shadow-sm z-10">
                  VS
                </div>
              </div>

              {/* Left Card: Scarless Hysterectomy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#F6F1FF] text-[#2A1650] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Scarless (Vaginal) Hysterectomy</h4>
                  <p className="text-[13px] text-[#4A3270] font-semibold uppercase tracking-wider">No cuts. Faster recovery. Less pain.</p>
                </div>
                
                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Abdominal Scars</span>
                      <p className="text-text text-[14px] leading-relaxed">Zero external abdominal cuts or scars.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Surgical Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">Significantly lower post-operative pain.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Stay</span>
                      <p className="text-text text-[14px] leading-relaxed">Short stay, usually 24 to 48 hours.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Infection Risk</span>
                      <p className="text-text text-[14px] leading-relaxed">Very low risk of external site infections.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E2D4FF] text-[#2A1650]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Recovery to Normal</span>
                      <p className="text-text text-[14px] leading-relaxed">Usually 2 to 3 weeks for light activities.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Open Abdominal Hysterectomy */}
              <div className="w-full lg:w-[46%] bg-white rounded-[28px] border border-black/[0.04] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] z-10 relative hover:shadow-md transition-all duration-300">
                <div className="bg-[#EEF4FF] text-[#1A365D] p-5 rounded-[20px] text-center mb-6">
                  <h4 className="text-[18px] md:text-[20px] font-bold mb-1">Open Abdominal Hysterectomy</h4>
                  <p className="text-[13px] text-[#2B4A7A] font-semibold uppercase tracking-wider">Traditional approach with a larger incision.</p>
                </div>

                <div className="space-y-1">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Abdominal Scars</span>
                      <p className="text-text text-[14px] leading-relaxed">Requires a 5-7 inch abdominal incision.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Surgical Pain</span>
                      <p className="text-text text-[14px] leading-relaxed">High pain level requiring strong analgesics.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Hospital Stay</span>
                      <p className="text-text text-[14px] leading-relaxed">Longer stay, usually 3 to 5 days.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-start gap-4 py-4 border-b border-[#F7FAFC]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Infection Risk</span>
                      <p className="text-text text-[14px] leading-relaxed">Higher risk due to the large external wound.</p>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#EEF4FF] text-[#1A365D]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-primary text-[15px] mb-1 block">Recovery to Normal</span>
                      <p className="text-text text-[14px] leading-relaxed">Usually takes 6 to 8 weeks to return to normal activities.</p>
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

        {/* === SECTION 3: Timeline / The Surgical Journey (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="The Surgical Journey (NDVH)" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                A scarless hysterectomy is performed entirely internally. The procedure generally takes 1 to 2 hours, leaving no abdominal cuts or visible marks.
              </p>
              <VerticalTimeline items={procedureTimeline} />
            </div>
          </div>
        </section>

        {/* === Wave Divider 3 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 4: Preparing for a Safe Hysterectomy (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Preparing for a Safe Hysterectomy" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Proper preoperative planning helps ensure a smooth, secure surgical experience and sets the foundation for a rapid recovery.
            </p>
            
            {/* Bento image banner - replaced with standalone informational diagram */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-black/[0.04] bg-white p-2 md:p-4 mb-8 transition-all duration-500 hover:shadow-xl relative aspect-[2/1] w-full max-h-[420px] max-w-[840px] mx-auto group">
              <Image 
                src="/images/scarless-overview.webp" 
                alt="Hysterectomy Incision Site Comparison - Abdominal vs Laparoscopic vs Vaginal NDVH" 
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

        {/* === Wave Divider 4 === */}
        <div className="bg-white">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#FBF6F2" />
          </svg>
        </div>

        {/* === SECTION 5: Post-Operative Recovery Stages (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <AnimatedHeading 
              text="Post-Operative Recovery Stages" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Recovery from a scarless vaginal hysterectomy is remarkably fast, but allowing internal tissues to mend is crucial for long-term health.
            </p>
            <CardStack items={recoveryCards} />
          </div>
        </section>

        {/* === Wave Divider 5 === */}
        <div className="bg-background">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>

        {/* === SECTION 6: Why Choose June Women's Health... (White bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-white">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Women Choose June Women&apos;s Health for Scarless Hysterectomy
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
                      <strong className="block text-[16px] text-white">Surgical Mastery in NDVH Technique</strong>
                      <span className="text-white/80 text-[14px]">Over 10+ years of clinical proficiency performing non-descent vaginal hysterectomies without abdominal cuts, even for enlarged uteri and fibroids.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Empathetic One-on-One Surgical Care</strong>
                      <span className="text-white/80 text-[14px]">Consult directly with Dr. Shamim Sultana Yashine for comprehensive pre-op mapping, transparent cost clarity, and compassionate bedside care.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Modern Hospital Theatres</strong>
                      <span className="text-white/80 text-[14px]">Procedures are scheduled in accredited tertiary hospitals with advanced electrosurgical systems and 24/7 post-operative monitoring.</span>
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

        {/* === SECTION 7: FAQs & Final CTA (Cream bg) === */}
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
