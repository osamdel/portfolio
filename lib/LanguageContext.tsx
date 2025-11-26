import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

// --- Dictionary ---
const translations = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      services: "Services",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      hello: "Hello, I'm Osama Adel",
      digital: "Digital",
      reality: "Reality",
      builder: "Builder",
      subtitle: "Crafting scalable engineering solutions with the aesthetics of high-end design.",
      viewWorks: "View Works",
      contactMe: "Contact Me",
      badges: {
        code: "Clean Code",
        architecture: "Architecture",
        design: "Pixel Perfect",
        visuals: "Design",
        score: "99+ Score"
      }
    },
    about: {
      header: "Beyond the Code",
      subHeader: "Analyzing the operational metrics, core stack, and location data of the human behind the keyboard.",
      systemArchitecture: "System Architecture",
      neuralLink: "Neural Link Active",
      role: "Full Stack Engineer",
      commits: "Commits",
      capacity: "Capacity",
      systemSchematic: "System Schematic",
      clientSide: "Client Side",
      serverLogic: "Server Logic",
      infrastructure: "Infrastructure",
      systemIntegrity: "System Integrity",
      online: "ONLINE",
      base: "Base",
      connection: "Connection Open",
      initialize: "Initialize Uplink",
      encrypted: "ENCRYPTED",
      secure: "UPLINK SECURE",
      years: "Years",
      total: "Total",
      careerTelemetry: "Career Telemetry",
      graphicDesign: "Graphic Design",
      fullStack: "Full Stack Dev",
      projectsShipped: "Projects Shipped",
    },
    work: {
      selectedWorks: "Selected Works",
      featuredProjects: "Featured Projects",
      description: "A selection of digital products crafted with precision, performance, and passion.",
      viewArchive: "View Full Archive",
      projects: {
        artBag: "Reimagining luxury retail with sustainable aesthetics and digital-first branding strategy.",
        neonNexus: "Next-gen crypto dashboard featuring real-time WebGL data visualization.",
        travelAI: "AI-driven itinerary generator with sub-100ms latency and offline maps.",
        creativeStudio: "Physics-based 3D portfolio experience winning Site of the Month.",
        finTechPro: "Enterprise SaaS serving 500+ global businesses with 99.99% uptime."
      }
    },
    services: {
      engineeringArsenal: "Engineering Arsenal",
      digital: "Digital",
      capabilities: "Capabilities",
      coreDisciplines: "Core Disciplines",
      technologies: "Technologies",
      cards: {
        frontend: {
          title: "Frontend Architecture",
          desc: "Building performant, accessible, and scalable UI systems using modern React ecosystems."
        },
        mobile: {
          title: "Mobile Engineering",
          desc: "Native-grade iOS and Android applications with fluid animations and offline-first architecture."
        },
        backend: {
          title: "System Core",
          desc: "Robust server-side logic and cloud infrastructure."
        },
        design: {
          title: "Product Design",
          desc: "User-centric interfaces that convert."
        },
        growth: {
          title: "Technical SEO & Performance",
          desc: "Optimizing web vitals, accessibility scores, and search ranking factors to ensure maximum reach."
        }
      },
      explore: "Explore Capability"
    },
    testimonials: {
      trustedBy: "Trusted by Industry Leaders",
      voicesOf: "Voices of",
      success: "Success",
      subtext: "Don't just take my word for it. Here's what clients and collaborators have to say about working together."
    },
    contact: {
      openToOpp: "Open to opportunities",
      letsBuild: "Let’s build",
      theFuture: "the future.",
      subtitle: "Ready to transform your ideas into exceptional digital experiences? I'm just a message away.",
      email: "Email",
      phone: "Phone",
      base: "Base",
      time: "Time",
      form: {
        name: "Name",
        namePlaceholder: "John Doe",
        email: "Email",
        emailPlaceholder: "john@example.com",
        service: "Service",
        servicePlaceholder: "Web Development, Design System...",
        projectDetails: "Project Details",
        messagePlaceholder: "Tell me about your vision...",
        agreement: "By submitting this form, you agree to the privacy policy and terms of service.",
        send: "Send Message",
        sending: "Sending...",
        sent: "Sent Successfully"
      }
    },
    footer: {
      letsTalk: "Let's Talk",
      getInTouch: "Get in touch",
      desc: "Crafting digital experiences that merge engineering precision with aesthetic excellence.",
      sitemap: "Sitemap",
      socials: "Socials",
      rights: "Osama Adel. All rights reserved.",
      designedWith: "Designed & Developed with"
    },
    preloader: {
      loading: "Loading Experience..."
    }
  },
  ar: {
    nav: {
      about: "عني",
      work: "أعمالي",
      services: "خدماتي",
      contact: "تواصل",
      letsTalk: "لنتحدث",
    },
    hero: {
      hello: "مرحباً، أنا أسامة عادل",
      digital: "واقع",
      reality: "رقمي",
      builder: "مبتكر",
      subtitle: "تصميم حلول هندسية قابلة للتطوير بجماليات التصميم الراقي والحديث.",
      viewWorks: "تصفح الأعمال",
      contactMe: "تواصل معي",
      badges: {
        code: "كود نظيف",
        architecture: "هيكلة برمجية",
        design: "دقة بكسل",
        visuals: "تصميم",
        score: "أداء +99"
      }
    },
    about: {
      header: "ما وراء الكود",
      subHeader: "تحليل المقاييس التشغيلية، والتقنيات الأساسية، وبيانات الموقع للإنسان خلف لوحة المفاتيح.",
      systemArchitecture: "هندسة النظام",
      neuralLink: "الرابط العصبي نشط",
      role: "مهندس برمجيات شامل",
      commits: "مساهمات",
      capacity: "السعة",
      systemSchematic: "مخطط النظام",
      clientSide: "جانب العميل",
      serverLogic: "منطق الخادم",
      infrastructure: "البنية التحتية",
      systemIntegrity: "سلامة النظام",
      online: "متصل",
      base: "القاعدة",
      connection: "الاتصال مفتوح",
      initialize: "تهيئة الاتصال",
      encrypted: "مشفر",
      secure: "اتصال آمن",
      years: "سنوات",
      total: "المجموع",
      careerTelemetry: "قياسات المسار المهني",
      graphicDesign: "تصميم جرافيك",
      fullStack: "تطوير شامل",
      projectsShipped: "مشاريع تم تسليمها",
    },
    work: {
      selectedWorks: "مختارات",
      featuredProjects: "مشاريع مميزة",
      description: "مجموعة من المنتجات الرقمية المصممة بدقة، وأداء عالٍ، وشغف.",
      viewArchive: "عرض الأرشيف الكامل",
      projects: {
        artBag: "إعادة تصور التجزئة الفاخرة بجماليات مستدامة واستراتيجية علامة تجارية رقمية أولاً.",
        neonNexus: "لوحة تحكم عملات مشفرة من الجيل التالي تتميز بتصور بيانات WebGL في الوقت الفعلي.",
        travelAI: "مولد مسارات رحلات مدعوم بالذكاء الاصطناعي مع خرائط دون اتصال واستجابة سريعة.",
        creativeStudio: "تجربة محفظة ثلاثية الأبعاد تعتمد على الفيزياء وفازت بجائزة موقع الشهر.",
        finTechPro: "نظام SaaS للمؤسسات يخدم أكثر من 500 شركة عالمية بنسبة تشغيل 99.99%."
      }
    },
    services: {
      engineeringArsenal: "الترسانة الهندسية",
      digital: "قدرات",
      capabilities: "رقمية",
      coreDisciplines: "التخصصات الأساسية",
      technologies: "تقنيات",
      cards: {
        frontend: {
          title: "هندسة الواجهات الأمامية",
          desc: "بناء أنظمة واجهة مستخدم عالية الأداء، وقابلة للوصول، وقابلة للتطوير باستخدام بيئات React الحديثة."
        },
        mobile: {
          title: "تطبيقات الجوال",
          desc: "تطبيقات iOS و Android بمستوى أصلي مع رسوم متحركة سلسة وهندسة تعمل دون اتصال."
        },
        backend: {
          title: "نواة النظام",
          desc: "منطق خادم قوي وبنية تحتية سحابية متينة."
        },
        design: {
          title: "تصميم المنتجات",
          desc: "واجهات تركز على المستخدم وتحقق نتائج."
        },
        growth: {
          title: "تحسين محركات البحث والأداء",
          desc: "تحسين مؤشرات الويب، وسهولة الوصول، وعوامل الترتيب لضمان أقصى وصول."
        }
      },
      explore: "استكشاف القدرة"
    },
    testimonials: {
      trustedBy: "موثوق من قادة الصناعة",
      voicesOf: "أصوات",
      success: "النجاح",
      subtext: "لا تأخذ كلمتي فقط. إليك ما يقوله العملاء والمتعاونون عن العمل معاً."
    },
    contact: {
      openToOpp: "متاح للفرص",
      letsBuild: "لنبدني",
      theFuture: "المستقبل.",
      subtitle: "جاهز لتحويل أفكارك إلى تجارب رقمية استثنائية؟ أنا على بعد رسالة واحدة.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      base: "العنوان",
      time: "الوقت",
      form: {
        name: "الاسم",
        namePlaceholder: "الاسم الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "example@mail.com",
        service: "الخدمة",
        servicePlaceholder: "تطوير ويب، تصميم نظام...",
        projectDetails: "تفاصيل المشروع",
        messagePlaceholder: "حدثني عن رؤيتك...",
        agreement: "بإرسال هذا النموذج، أنت توافق على سياسة الخصوصية وشروط الخدمة.",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        sent: "تم الإرسال بنجاح"
      }
    },
    footer: {
      letsTalk: "إبداعك هنا!",
      getInTouch: "تواصل معي",
      desc: "صناعة تجارب رقمية تدمج الدقة الهندسية مع التميز الجمالي.",
      sitemap: "خريطة الموقع",
      socials: "مواقع التواصل الاجتماعي",
      rights: "أسامة عادل. جميع الحقوق محفوظة.",
      designedWith: "صمم وطور بـ"
    },
    preloader: {
      loading: "جاري تحميل التجربة..."
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations['en'];
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load saved language preference
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'ar' || savedLang === 'en') {
      setLanguage(savedLang);
    }
  }, []);

  // Update HTML direction and language attributes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
    
    // Change font family based on language for the whole body
    if (language === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      t: translations[language],
      dir: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
