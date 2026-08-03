export const siteConfig = {
  name: "June Women's Health",
  shortName: "June Women's Health",
  description: "June Women's Health is a leading gynecologist clinic in Sushant Golf City, Lucknow. Led by Dr. Shamim Sultana Yashine (MBBS), senior obstetrician-gynecologist, offering expert care in normal delivery, pregnancy care, infertility, IUI, PCOD, and women's health screening.",
  url: "https://yourdomain.com", // update to client domain when active
  logo: "/images/june-logo-light.svg",
  footerLogo: "/images/june-logo-dark.svg",
  
  doctor: {
    name: "Dr. Shamim Sultana Yashine",
    qualifications: "MBBS",
    role: "Senior Consultant Obstetrician & Gynecologist",
    experience: "10+ Years"
  },

  // NAP (Name, Address, Phone) details
  contact: {
    phone: "080900 99133",
    phoneRaw: "+910809009133",
    address: "Felix Square, 212, above Axis Bank, Golf City, Lucknow, Uttar Pradesh 226030",
    hours: {
      weekday: "Monday to Sunday",
      time: "Open 24 Hours"
    },
    hoursShort: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00",
    mapsLink: "https://www.google.com/maps/place/june+WOMEN'S+HEALTH+%7C+Gynecologist/@26.7811482,80.9899801,17.25z/data=!4m6!3m5!1s0x399be53824ea6887:0x861d01492fc9646e!8m2!3d26.781136!4d80.9897343!16s%2Fg%2F11zgqx5f7n?hl=en&entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D",
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
    count: "9"
  },

  // Service Areas
  serviceAreas: {
    primary: "Sushant Golf City",
    secondary: ["Vrindavan Yojna", "Omaxe R1 & R2", "Awadh Vihar", "Arjun Ganj", "Neelmatha", "New Friends Colony", "Lucknow"]
  },

  // Core services list from client image flyer
  services: [
    { title: "Normal Delivery", desc: "Expert prenatal care, labor support, and natural child birth facilitation." },
    { title: "LSCS (Caesarean Section)", desc: "Safe, sterile, and professional surgical delivery when medically indicated." },
    { title: "Infertility, IUI, IVF", desc: "Advanced fertility testing, Intrauterine Insemination, and In Vitro Fertilization support." },
    { title: "Scarless Hysterectomy (NDVH)", desc: "Non-descent vaginal hysterectomy for uterine conditions without abdominal incisions." },
    { title: "PCOD Care", desc: "Holistic management of PCOS/PCOD with lifestyle advice, medical therapy, and symptom control." },
    { title: "Cervical Cancer Vaccination and Screening", desc: "Preventative HPV vaccine administration and regular Pap smear testing." },
    { title: "Pre Conceptional Counselling", desc: "Health check-ups, lifestyle advice, and preparation plans for couples planning pregnancy." },
    { title: "MTP, D & E", desc: "Safe, legal, and confidential medical termination of pregnancy and dilation & evacuation services." },
    { title: "Tubal Ligation & Reversal", desc: "Permanent female contraception and microsurgical tubal re-canalization." },
    { title: "Laparoscopic Procedure", desc: "Minimally invasive keyhole surgeries for ovarian cysts, fibroids, and diagnostic laparoscopy." }
  ],

  // Target SEO Keywords
  keywords: [
    "gynecologist in sushant golf city lucknow",
    "gynecologist sushant golf city",
    "gynecologist in vrindavan yojna",
    "obstetrician gynecologist in lucknow",
    "fertility clinic sushant golf city",
    "women's health center vrindavan yojna",
    "pregnancy care clinic sushant golf city",
    "best gynecologist arjun ganj",
    "obstetrician in neelmatha",
    "PCOD treatment sushant golf city",
    "IUI specialist lucknow",
    "normal delivery doctor sushant golf city"
  ]
};

export type SiteConfig = typeof siteConfig;

