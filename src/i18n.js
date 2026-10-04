import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language");
const initialLanguage = savedLanguage === "ar" ? "ar" : "en";

const resources = {
  en: {
    translation: {
      home: {
        intro: "Hi, I'm",
        firstName: "Mohamed",
        lastName: "Abdo",
        description:
          "I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.",
        viewWork: "View My Work",
        githubLabel: "GitHub profile",
        linkedinLabel: "LinkedIn profile",
        emailLabel: "Send email",
        switchToArabic: "Switch to Arabic",
        switchToEnglish: "Switch to English",
      },

      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        toggleTheme: "Toggle color theme",
        switchToArabic: "Switch to Arabic",
        switchToEnglish: "Switch to English",
      },
      about: {
  titlePrefix: "About",
  titleHighlight: "Me",
  role: "Passionate Web Developer & Tech Creator",
  paragraphOne:
    "With 2 years of experience, I'm looking forward to learning new technologies and creating new projects.",
  paragraphTwo:
    "I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.",
  getInTouch: "Get In Touch",
  downloadCv: "Download CV",
  webDevelopment: "Web Development",
  webDevelopmentDescription:
    "Creating responsive websites and web applications with modern frameworks.",
  uiuxDesign: "UI/UX Design",
  uiuxDescription:
    "Designing intuitive user interfaces and seamless user experiences.",
  projectManagement: "Project Management",
  projectManagementDescription:
    "Leading projects from conception to completion with agile methodologies.",
},
skills: {
  titlePrefix: "My",
  titleHighlight: "Skills",
  categories: {
    all: "All",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
  },
},
projects: {
  titlePrefix: "My",
  titleHighlight: "Projects",
  facebookTitle: "Facebook Clone",
  facebookDescription:
    "A Facebook clone with a chat app and user authentication.",
  facebookImageAlt: "Preview of the Facebook clone project",
  ecommerceTitle: "E-commerce Website",
  ecommerceDescription:
    "An e-commerce platform with user authentication and a shopping cart.",
  ecommerceImageAlt: "Preview of the e-commerce project",
  liveDemo: "View live project",
  sourceCode: "View source code on GitHub",
  viewGithub: "Check My GitHub",
},
contact: {
  titlePrefix: "Get In",
  titleHighlight: "Touch",
  intro:
    "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
  information: "Contact Information",
  email: "Email",
  phone: "Phone",
  location: "Location",
  locationValue: "Kassala, Sudan",
  connect: "Connect With Me",
  sendTitle: "Send a Message",
  yourName: "Your Name",
  namePlaceholder: "Name",
  yourEmail: "Your Email",
  emailPlaceholder: "Email",
  yourMessage: "Your Message",
  messagePlaceholder: "Message",
  send: "Send Message",
  success: "Message successfully sent!",
  failure: "Failed to send message",
},
footer: {
  builtBy: "Built by Mohamed Abdo."
},
    },
  },

  ar: {
    translation: {
      home: {
        intro: "مرحبًا، أنا",
        firstName: "محمد",
        lastName: "عبدهـ",
        description:
          "أصمم تجارب ويب مميزة باستخدام تقنيات حديثة. أتخصص في تطوير الواجهات الأمامية، وأبني واجهات جميلة وعملية في الوقت نفسه.",
        viewWork: "شاهد أعمالي",
        githubLabel: "حسابي على GitHub",
        linkedinLabel: "حسابي على LinkedIn",
        emailLabel: "إرسال بريد إلكتروني",
        switchToArabic: "التبديل إلى العربية",
        switchToEnglish: "التبديل إلى الإنجليزية",
      },

      nav: {
        home: "الرئيسية",
        about: "من أنا",
        skills: "المهارات",
        projects: "المشاريع",
        contact: "تواصل معي",
        toggleTheme: "تغيير المظهر",
        switchToArabic: "التبديل إلى العربية",
        switchToEnglish: "التبديل إلى الإنجليزية",
      },
      about: {
  titlePrefix: "نبذة",
  titleHighlight: "عني",
  role: "مطور ويب وصانع تقنيات شغوف",
  paragraphOne:
    "مع خبرة تمتد لعامين، أتطلع إلى تعلم تقنيات جديدة وإنشاء مشاريع جديدة.",
  paragraphTwo:
    "أستمتع بإنشاء حلول أنيقة للمشكلات المعقدة، وأحرص باستمرار على تعلم تقنيات وأساليب جديدة لمواكبة التطور المستمر في مجال الويب.",
  getInTouch: "تواصل معي",
  downloadCv: "تحميل السيرة الذاتية",
  webDevelopment: "تطوير الويب",
  webDevelopmentDescription:
    "إنشاء مواقع وتطبيقات ويب متجاوبة باستخدام أطر عمل حديثة.",
  uiuxDesign: "تصميم واجهات وتجربة المستخدم",
  uiuxDescription:
    "تصميم واجهات مستخدم سهلة الاستخدام وتجارب سلسة.",
  projectManagement: "إدارة المشاريع",
  projectManagementDescription:
    "قيادة المشاريع من الفكرة إلى الإنجاز باستخدام منهجيات رشيقة.",
},
skills: {
  titlePrefix: "مهاراتي",
  titleHighlight: "",
  categories: {
    all: "الكل",
    frontend: "الواجهة الأمامية",
    backend: "الواجهة الخلفية",
    tools: "الأدوات",
  },
},
projects: {
  titlePrefix: "",
  titleHighlight: "مشاريعي",
  facebookTitle: "تطبيق يحاكي فيسبوك",
  facebookDescription:
    "تطبيق يحاكي فيسبوك، يتضمن الدردشة وتسجيل الدخول وإنشاء الحسابات.",
  facebookImageAlt: "معاينة مشروع محاكاة فيسبوك",
  ecommerceTitle: "متجر إلكتروني",
  ecommerceDescription:
    "منصة للتجارة الإلكترونية تتضمن تسجيل الدخول وسلة التسوق.",
  ecommerceImageAlt: "معاينة مشروع المتجر الإلكتروني",
  liveDemo: "عرض المشروع",
  sourceCode: "عرض الكود على GitHub",
  viewGithub: "استعرض حسابي على GitHub",
},
contact: {
  titlePrefix: "تواصل",
  titleHighlight: "معي",
  intro:
    "هل لديك مشروع أو ترغب في التعاون؟ لا تتردد في التواصل معي، فأنا دائمًا منفتح على مناقشة الفرص الجديدة.",
  information: "معلومات التواصل",
  email: "البريد الإلكتروني",
  phone: "الهاتف",
  location: "الموقع",
  locationValue: "كسلا، السودان",
  connect: "تواصل معي عبر",
  sendTitle: "أرسل رسالة",
  yourName: "اسمك",
  namePlaceholder: "الاسم",
  yourEmail: "بريدك الإلكتروني",
  emailPlaceholder: "البريد الإلكتروني",
  yourMessage: "رسالتك",
  messagePlaceholder: "الرسالة",
  send: "إرسال الرسالة",
  success: "تم إرسال الرسالة بنجاح!",
  failure: "فشل إرسال الرسالة",
},
footer: {
  builtBy: "تم تطويره بواسطة محمد عبده."
},
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: ["en", "ar"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;