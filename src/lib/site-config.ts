export const siteConfig = {
  name: "June Women's Health",
  shortName: "June Women's Health",
  description: "June Women's Health is a leading gynecologist clinic in Sushant Golf City, Lucknow. Led by Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon), offering expert care in normal delivery, pregnancy care, infertility, IUI, PCOD, and women's health screening.",
  url: "https://yourdomain.com", // update to client domain when active
  logo: "/images/june-logo-light.svg",
  footerLogo: "/images/june-logo-dark.svg",
  
  doctor: {
    name: "Dr. Shamim Sultana Yashine",
    qualifications: "MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon",
    role: "Senior Consultant Obstetrician, Gynaecologist & Laparoscopic Surgeon",
    experience: "10+ Years"
  },

  // NAP (Name, Address, Phone) details
  contact: {
    phone: "080900 99133",
    phoneRaw: "+918090099133",
    address: "Felix Square, 212, above Axis Bank, Golf City, Lucknow, Uttar Pradesh 226030",
    hours: {
      weekday: "Monday to Sunday",
      time: "Open 24 Hours"
    },
    hoursShort: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00",
    mapsLink: "https://www.google.com/maps/place/june+WOMEN'S+HEALTH+%7C+Gynecologist+%26+Obstetrician/data=!4m2!3m1!1s0x0:0x861d01492fc9646e?sa=X&ved=1t:2428&hl=en&ictx=111",
    embedMapSrc: "https://maps.google.com/maps?q=june%20WOMEN'S%20HEALTH%20Gynecologist%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // Social handles
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    dribbble: "#"
  },

  // Google reviews
  reviews: {
    rating: "5.0",
    count: "11"
  },

  // Service Areas
  serviceAreas: {
    primary: "Sushant Golf City",
    secondary: [
      "Vrindavan Yojna",
      "Omaxe City (R1 & R2)",
      "Awadh Vihar Yojna",
      "Arjunganj",
      "Nilmatha",
      "New Friends Colony",
      "Muzaffar Nagar Ghusval",
      "Shaheed Path",
      "Lulu Mall Environs",
      "Lucknow"
    ]
  },

  // Core services list from client image flyer & clinical services
  services: [
    { title: "Normal Delivery", desc: "Expert prenatal care, continuous labor support, and natural child birth facilitation." },
    { title: "LSCS (Caesarean Section)", desc: "Safe, sterile, and professional surgical delivery when medically indicated." },
    { title: "Infertility, IUI, IVF", desc: "Advanced fertility testing, Intrauterine Insemination, and In Vitro Fertilization support." },
    { title: "Scarless Hysterectomy (NDVH)", desc: "Non-descent vaginal hysterectomy for uterine conditions without abdominal incisions." },
    { title: "PCOD Care", desc: "Holistic management of PCOS/PCOD with lifestyle advice, medical therapy, and symptom control." },
    { title: "Cervical Cancer Vaccination and Screening", desc: "Preventative HPV vaccine administration and regular Pap smear testing." },
    { title: "Pre Conceptional Counselling", desc: "Health check-ups, lifestyle advice, and preparation plans for couples planning pregnancy." },
    { title: "MTP, D & E", desc: "Safe, legal, and confidential medical termination of pregnancy and dilation & evacuation services." },
    { title: "Tubal Ligation & Reversal", desc: "Permanent female contraception and microsurgical tubal re-canalization." },
    { title: "Laparoscopic Procedure", desc: "Minimally invasive keyhole surgeries for ovarian cysts, fibroids, and diagnostic laparoscopy." },
    { title: "Hysteroscopy", desc: "Diagnostic and operative hysteroscopy for abnormal uterine bleeding and fertility evaluation." },
    { title: "Pregnancy Care", desc: "Comprehensive trimester-by-trimester maternity checkups, scans, and prenatal health monitoring." },
    { title: "High Risk Pregnancy Management", desc: "Specialized clinical vigilance for gestational diabetes, hypertension, and complex pregnancies." },
    { title: "Pubertal Counselling", desc: "Compassionate adolescent guidance for teen menstrual cycles and hormonal changes." },
    { title: "Menstrual Hygiene", desc: "Safe sanitary hygiene, infection prevention, and reproductive health wellness." },
    { title: "Contraception Advice", desc: "Personalized birth control guidance, Copper T / IUD insertions, and oral contraceptives." },
    { title: "Lactational Counselling", desc: "Postpartum breastfeeding latch support, milk supply guidance, and mastitis relief." },
    { title: "Family Planning Center", desc: "Holistic spacing counselling and reproductive health planning." },
    { title: "Pelvic Infections Treatment", desc: "Targeted diagnostics and treatment for PID, recurring infections, and pelvic pain." },
    { title: "Cancer Screening", desc: "Preventative Pap smears, HPV DNA tests, and breast health examinations." },
    { title: "Menstrual Cycle Problems", desc: "Clinical management for irregular periods, heavy bleeding (menorrhagia), and severe cramps." }
  ],

  // Target SEO Keywords
  keywords: [
    "best gynecologist in sushant golf city lucknow",
    "gynecologist sushant golf city",
    "female gynecologist in sushant golf city",
    "best gynecologist in lucknow",
    "lady gynecologist near me lucknow",
    "gynecologist in vrindavan yojna lucknow",
    "obstetrician gynecologist in lucknow",
    "fertility clinic sushant golf city",
    "pregnancy care clinic sushant golf city",
    "best doctor for normal delivery in lucknow",
    "PCOD treatment sushant golf city",
    "pcos doctor in lucknow",
    "IUI specialist lucknow",
    "gynecologist near lulu mall lucknow",
    "best gynecologist arjunganj",
    "obstetrician in nilmatha"
  ]
};

export type SiteConfig = typeof siteConfig;

