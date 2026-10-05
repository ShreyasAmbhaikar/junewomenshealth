import Image from 'next/image';
import PageHeader from '@/components/landing/PageHeader';
import ServiceSidebar from '@/components/landing/ServiceSidebar';
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
  TrendingUp, 
  Droplets,
  Stethoscope,
  Apple,
  BookOpen,
  ClipboardList,
  HeartPulse,
  Smile,
  Star
} from 'lucide-react';

export const metadata = {
  title: "Best Normal Delivery Doctor in Sushant Golf City, Lucknow | June Women's Health",
  description: "Consult Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) for safe, compassionate normal delivery and maternity care in Sushant Golf City, Lucknow. Prioritizing natural childbirth & patient safety. Book today!",
  alternates: {
    canonical: '/normal-delivery-in-lucknow/',
  }
};

export default function NormalDeliveryPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Normal Delivery' },
  ];

  const benefitsData = [
    {
      title: "Accelerated Postnatal Recovery",
      description: "Natural vaginal childbirth enables new mothers to mobilize and bond within hours of birth, experiencing faster uterine involution and a smoother return to daily life.",
      icon: <TrendingUp className="w-7 h-7" />
    },
    {
      title: "Minimal Hospitalization Time",
      description: "Uncomplicated normal deliveries typically require just a 24 to 48-hour hospital observation window, allowing your family to settle comfortably at home sooner.",
      icon: <Home className="w-7 h-7" />
    },
    {
      title: "Infant Immune Priming & Microbiome",
      description: "Passing through the birth canal naturally coats the newborn with maternal probiotics, strengthening neonatal gut immunity and supporting long-term respiratory resistance.",
      icon: <Shield className="w-7 h-7" />
    },
    {
      title: "Eliminates Major Surgical Risks",
      description: "Avoiding major abdominal incisions significantly minimizes the chances of heavy surgical blood loss, wound infections, anesthesia complications, and scar adhesions.",
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: "Safer Subsequent Pregnancies",
      description: "Delivering vaginally leaves the uterine muscle intact with zero uterine scars, dramatically lowering risks of placenta accreta or uterine rupture in future pregnancies.",
      icon: <Activity className="w-7 h-7" />
    },
    {
      title: "Seamless Lactation Establishment",
      description: "Physiological birth triggers immediate surges of oxytocin and prolactin, facilitating effortless colostrum let-down and early mother-infant skin-to-skin bonding.",
      icon: <Droplets className="w-7 h-7" />
    }
  ];

  const laborTimeline = [
    {
      title: 'Stage 1: Cervical Effacement & Active Dilation',
      description: 'The cervix gradually thins and widens to 10 centimeters through rhythmic uterine contractions. Our clinical team continuously tracks maternal vitals and fetal heart rates to ensure steady, safe progress.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Stage 2: Active Pushing & Fetal Delivery',
      description: 'With complete cervical dilation, the mother coordinates gentle bearing-down efforts guided by Dr. Shamim Sultana Yashine, easing the baby smoothly through the birth canal into the world.',
      icon: <Baby className="w-5 h-5" />
    },
    {
      title: 'Stage 3: Placental Expulsion & Uterine Tone Check',
      description: 'Within minutes following birth, mild contractions detach the placenta and membranes safely, followed by careful inspection of the birth tract to prevent postpartum hemorrhage.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Stage 4: Postpartum Golden Hour & Neonatal Bonding',
      description: 'Focus shifts immediately to skin-to-skin holding, newborn thermal regulation, first latch breastfeeding guidance, and close maternal hemodynamic observation.',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const preparationCards = [
    { title: "Structured Antenatal Assessments", description: "Regular clinical checks in Sushant Golf City track fetal biometric milestones, placental maturity, and maternal blood pressure.", icon: <Stethoscope className="w-6 h-6 text-accent" /> },
    { title: "Trimester-Specific Nutrition", description: "Targeted dietary plans rich in micronutrients, iron, calcium, and complex carbs provide sustained stamina for labor day.", icon: <Apple className="w-6 h-6 text-accent" /> },
    { title: "Pelvic Floor & Prenatal Conditioning", description: "Supervised pelvic stretches, deep squatting postures, and Kegel workouts optimize pelvic floor flexibility and fetal descent.", icon: <Activity className="w-6 h-6 text-accent" /> },
    { title: "Labor Breathwork & Pain Modulation", description: "Mastering rhythmic breathing and relaxation techniques helps reduce labor anxiety and enhances natural pain tolerance.", icon: <BookOpen className="w-6 h-6 text-accent" /> },
    { title: "Personalized Birth Preference Plan", description: "Collaborative birth planning covers your preferences for gentle labor, mobility, partner support, and painless delivery (epidural analgesia).", icon: <ClipboardList className="w-6 h-6 text-accent" /> }
  ];

  const recoveryCards = [
    {
      title: "Maternal Physical Rejuvenation",
      description: "Rest, balanced hydration, and gentle mobilization accelerate perineal healing and restore pelvic strength under Dr. Shamim Sultana Yashine's recovery protocols.",
      icon: <HeartPulse className="w-9 h-9 text-[#C0354A]" />,
      iconBg: 'rgba(232, 71, 95, 0.15)',
      bgGradient: 'linear-gradient(135deg, #FDE8EC 0%, #F3E7E9 40%, #E3EEFF 100%)',
      titleColor: '#4A154B',
      textColor: 'rgba(74, 21, 75, 0.78)'
    },
    {
      title: "Hands-on Lactation Guidance",
      description: "Personalized latch assessment and feeding position coaching ensure pain-free breastfeeding while stimulating natural uterine contraction.",
      icon: <Baby className="w-9 h-9 text-[#5C35CC]" />,
      iconBg: 'rgba(124, 77, 255, 0.12)',
      bgGradient: 'linear-gradient(135deg, #EDE7F6 0%, #E0C3FC 40%, #8EC5FC 100%)',
      titleColor: '#1A1A5E',
      textColor: 'rgba(26, 26, 94, 0.78)'
    },
    {
      title: "Postpartum Emotional Nurturing",
      description: "Hormonal adjustments post-birth are completely natural. We provide a compassionate, judgment-free space to screen and support maternal mental wellness.",
      icon: <Smile className="w-9 h-9 text-[#2E7D32]" />,
      iconBg: 'rgba(76, 175, 80, 0.15)',
      bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #DCEDC8 100%)',
      titleColor: '#1B5E20',
      textColor: 'rgba(27, 94, 32, 0.78)'
    }
  ];

  const faqs = [
    {
      question: 'What are the clear clinical signs that true labor has started?',
      answer: 'True labor is characterized by rhythmic, progressively intensifying uterine contractions that do not subside with rest, the release of the pinkish mucus plug (bloody show), amniotic sac rupture (water breaking), and steady lower back pressure radiating towards the pelvis. If your contractions occur every 5 minutes lasting 45-60 seconds, reach out to Dr. Shamim Sultana Yashine immediately.'
    },
    {
      question: 'How does Dr. Shamim Sultana Yashine encourage and prepare women for normal delivery in Lucknow?',
      answer: 'At June Women\'s Health, Dr. Shamim Sultana Yashine focuses on proactive antenatal preparation. We monitor fetal growth scans, guide pelvic floor conditioning exercises, optimize maternal hemoglobin, and maintain active labor mobility to encourage natural fetal descent without unnecessary medical rushing.'
    },
    {
      question: 'Is a normal delivery (VBAC) possible if I had a previous Cesarean section?',
      answer: 'Yes, Vaginal Birth After Cesarean (VBAC) is a safe, realistic option for many mothers who have a previous lower-segment transverse uterine incision. Dr. Shamim Sultana Yashine conducts an in-depth medical evaluation of your inter-pregnancy gap, scar thickness on ultrasound, and fetal positioning to determine if you are an ideal candidate for a safe trial of labor after cesarean (TOLAC).'
    },
    {
      question: 'What painless normal delivery options are available in Sushant Golf City?',
      answer: 'We provide evidence-based pain management including continuous labor doula support, breath relaxation, and medical epidural analgesia (painless normal delivery). Administered by an experienced obstetric anesthesiologist, an epidural eases labor pain while preserving full motor sensation and pushing ability for an empowering delivery.'
    },
    {
      question: 'Can a mother safely attempt a normal delivery past 40 weeks?',
      answer: 'Yes, post-dated pregnancies up to 41 weeks are common and can safely culminate in normal delivery provided biophysical profile scans, non-stress tests (NST), and amniotic fluid levels confirm that the fetus is thriving. Close monitoring ensures the exact right time for spontaneous labor or gentle induction.'
    },
    {
      question: 'What is the estimated cost of normal delivery in Sushant Golf City, Lucknow?',
      answer: 'The overall cost for normal delivery in Sushant Golf City typically ranges between ₹40,000 and ₹80,000 depending on the chosen affiliated hospital facility, room category, inclusion of epidural analgesia, and length of postpartum stay. We believe in 100% financial clarity and provide complete estimates during your antenatal visits.'
    },
    {
      question: 'At what point should I leave for the maternity hospital during labor?',
      answer: 'You should proceed to the hospital if you experience regular contractions 3 to 5 minutes apart, sudden amniotic fluid leakage (water breaking), bright red vaginal bleeding, or any noticeable decrease in baby movements.'
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
        <PageHeader title="Normal Delivery Care" breadcrumbs={breadcrumbs} bgImage="/images/maternity_header.webp" />

        {/* === SECTION 1: Overview (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            
            {/* Overview */}
            <div>
              <div className="mb-[30px] lg:mb-[40px] rounded-[24px] overflow-hidden shadow-md relative aspect-[16/9] w-full max-h-[420px] group">
                <Image 
                  src="/images/normal-delivery.webp" 
                  alt="Normal Delivery Care and Fetal Ultrasound Screening in Sushant Golf City Lucknow" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <AnimatedHeading 
                text="What is a Normal Delivery?" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"
              />
              <div className="text-text space-y-4 leading-relaxed mb-[30px]">
                <p>
                  Natural childbirth represents the safest, most empowering route to motherhood for low-risk pregnancies. At <strong>June Women&apos;s Health</strong> in Sushant Golf City, Lucknow, <strong>Dr. Shamim Sultana Yashine (MS - Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon)</strong> champions a physiologic, patient-first approach to normal vaginal delivery—prioritizing maternal comfort, fetal well-being, and gentle labor progression with minimal medical interventions.
                </p>
                <p>
                  Throughout your antenatal journey, our clinic provides structured trimester screening, continuous fetal well-being tracking, and customized birth education. We guide families across Sushant Golf City, Vrindavan Yojna, Omaxe City, Arjunganj, Nilmatha, Awadh Vihar Yojna, and greater Lucknow with comprehensive labor preparation, pelvic floor conditioning, and round-the-clock obstetric guidance.
                </p>
                <p>
                  Whether you are planning your first natural birth or seeking a high-success VBAC (Vaginal Birth After Cesarean) specialist near Lulu Mall on Shaheed Path, our evidence-backed protocols ensure a safe, memorable, and dignified birth experience.
                </p>
              </div>
              <Button href="/contact-us" variant="primary" icon>
                Book Your Pregnancy Consultation Today
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

        {/* === SECTION 2: Benefits (White bg) === */}
        <section className="py-[40px] lg:py-[60px] bg-white">
          <div className="container mx-auto px-4 max-w-[1320px]">
            <AnimatedHeading 
              text="Why Choose Normal Delivery (Natural Childbirth)?" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[40px] leading-tight text-center" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {benefitsData.map((benefit, index) => {
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

        {/* === SECTION 3: Labor Stages (Cream bg) === */}
        <section className="py-[60px] lg:py-[80px] bg-background">
          <div className="container mx-auto px-4 max-w-[960px]">
            <div className="bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-divider/10">
              <AnimatedHeading 
                text="Understanding the Stages of Labor" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed">
                Knowing what to expect during labor can significantly reduce anxiety and help you feel in control of your childbirth journey.
              </p>
              <VerticalTimeline items={laborTimeline} />
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
              text="Preparing for a Safe Normal Delivery" 
              className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
            />
            <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              While childbirth is natural, proper antenatal care and healthy habits significantly increase your chances of a smooth normal delivery.
            </p>
            
            {/* Hero image banner */}
            <div className="rounded-[24px] overflow-hidden shadow-lg relative aspect-[21/9] w-full mb-8 group cursor-pointer">
              <Image 
                src="/images/prenatal_yoga.webp" 
                alt="Prenatal Yoga and Healthy Maternity Lifestyle" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#151722]/90 via-[#151722]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-md z-10">
                <h4 className="text-[24px] font-bold mb-2 text-white drop-shadow-md">Healthy Lifestyle</h4>
                <p className="text-white text-[15px] leading-relaxed drop-shadow-sm font-medium">Gentle prenatal yoga and mindful exercises prepare your body and mind for a safe, natural delivery journey.</p>
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
                text="Recovery After Normal Delivery" 
                className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight text-center" 
              />
              <p className="text-text mb-[40px] text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
                Postpartum care is just as important as prenatal care. While recovery is generally swift, your body needs time to heal.
              </p>
              <CardStack items={recoveryCards} />
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-6 relative z-10">
                <h3 className="text-[26px] font-bold text-white leading-tight">
                  Why Families Choose June Women&apos;s Health for Normal Childbirth
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Proven Obstetric Mastery</strong>
                      <span className="text-white/80 text-[14px]">Over 10+ years of dedicated clinical experience managing normal vaginal births, complex labor interventions, and VBAC cases across Lucknow.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Dedicated Antenatal Nurturing</strong>
                      <span className="text-white/80 text-[14px]">Individualized trimester checkups, growth ultrasound assessments, non-stress testing, and continuous maternal support.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <strong className="block text-[16px] text-white">Natural Childbirth Philosophy</strong>
                      <span className="text-white/80 text-[14px]">We actively promote physiologic labor progression, painless delivery options, and compassionate postpartum lactation coaching.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[35%] lg:w-[30%] flex justify-center md:justify-end shrink-0 relative z-10">
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

