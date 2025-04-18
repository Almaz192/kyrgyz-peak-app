
export type LanguageKey = 'en' | 'ru' | 'kg';

export interface Translation {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutDescription: string[];
  features: { title: string; description: string }[];
  downloadTitle: string;
  downloadSubtitle: string;
  downloadCount: number;
  countLabel: string;
  downloadButtonTitle: string;
  contactLabel: string;
  privacyText: string;
  termsText: string;
}

export const translations: Record<LanguageKey, Translation> = {
  en: {
    heroTitle: "Learn Kyrgyz Language Easily",
    heroSubtitle: "A beautifully designed app to help you master Kyrgyz language skills through daily practice and interactive lessons.",
    aboutTitle: "About Enetyl",
    aboutDescription: [
      "Enetyl is a carefully crafted language learning application designed to make learning Kyrgyz accessible and enjoyable for everyone. Our app uses modern teaching methodologies combined with interactive exercises to help you develop strong language skills.",
      "Whether you're a beginner or looking to polish your existing knowledge, Enetyl provides a structured learning path tailored to your pace and learning style."
    ],
    features: [
      {
        title: "Interactive Lessons",
        description: "Learn through engaging exercises and interactive content designed by language experts."
      },
      {
        title: "Daily Practice",
        description: "Build a consistent learning habit with short, daily exercises that fit into your schedule."
      },
      {
        title: "Cultural Context",
        description: "Understand the rich cultural context behind the Kyrgyz language through our curated content."
      }
    ],
    downloadTitle: "Get Started Today",
    downloadSubtitle: "Join thousands of learners who have already started their journey to mastering Kyrgyz language.",
    downloadCount: 10000,
    countLabel: "Happy Learners",
    downloadButtonTitle: "Download Now",
    contactLabel: "Contact us:",
    privacyText: "Privacy Policy",
    termsText: "Terms of Use"
  },
  ru: {
    heroTitle: "Изучайте кыргызский язык легко",
    heroSubtitle: "Красиво оформленное приложение, которое поможет вам освоить навыки кыргызского языка с помощью ежедневной практики и интерактивных уроков.",
    aboutTitle: "О приложении Enetyl",
    aboutDescription: [
      "Enetyl — это тщательно разработанное приложение для изучения языка, призванное сделать изучение кыргызского языка доступным и приятным для всех. Наше приложение использует современные методики обучения в сочетании с интерактивными упражнениями, чтобы помочь вам развить хорошие языковые навыки.",
      "Независимо от того, являетесь ли вы новичком или хотите улучшить свои существующие знания, Enetyl предоставляет структурированный путь обучения, адаптированный к вашему темпу и стилю обучения."
    ],
    features: [
      {
        title: "Интерактивные уроки",
        description: "Учитесь с помощью увлекательных упражнений и интерактивного контента, разработанного языковыми экспертами."
      },
      {
        title: "Ежедневная практика",
        description: "Выработайте привычку постоянного обучения с помощью коротких ежедневных упражнений, которые вписываются в ваш график."
      },
      {
        title: "Культурный контекст",
        description: "Поймите богатый культурный контекст кыргызского языка через наш подобранный контент."
      }
    ],
    downloadTitle: "Начните сегодня",
    downloadSubtitle: "Присоединяйтесь к тысячам учащихся, которые уже начали свой путь к овладению кыргызским языком.",
    downloadCount: 10000,
    countLabel: "Довольных учеников",
    downloadButtonTitle: "Скачать сейчас",
    contactLabel: "Связаться с нами:",
    privacyText: "Политика конфиденциальности",
    termsText: "Условия использования"
  },
  kg: {
    heroTitle: "Кыргыз тилин оңой үйрөнүңүз",
    heroSubtitle: "Күнүмдүк практика жана интерактивдүү сабактар аркылуу кыргыз тилин билүү көндүмдөрүн өздөштүрүүгө жардам берүүчү жакшы дизайндалган колдонмо.",
    aboutTitle: "Enetyl жөнүндө",
    aboutDescription: [
      "Enetyl - кыргыз тилин үйрөнүүнү ар бир адам үчүн жеткиликтүү жана кызыктуу кылуу үчүн кылдаттык менен иштелип чыккан тил үйрөнүү колдонмосу. Биздин колдонмо күчтүү тил көндүмдөрүн өнүктүрүүгө жардам берүү үчүн интерактивдүү көнүгүүлөр менен айкалышкан заманбап окутуу методикаларын колдонот.",
      "Сиз жаңы баштап жатасызбы же бар билимиңизди жакшыртайын дейсизби, Enetyl сиздин темпиңизге жана окуу стилиңизге ылайыкташтырылган түзүмдүк окутуу жолун сунуштайт."
    ],
    features: [
      {
        title: "Интерактивдүү сабактар",
        description: "Тил боюнча адистер тарабынан иштелип чыккан кызыктуу көнүгүүлөр жана интерактивдүү мазмун аркылуу үйрөнүңүз."
      },
      {
        title: "Күнүмдүк машыгуу",
        description: "Графигиңизге туура келген кыска, күнүмдүк көнүгүүлөр менен туруктуу окуу адатын калыптандырыңыз."
      },
      {
        title: "Маданий контекст",
        description: "Биздин тандалган мазмун аркылуу кыргыз тилинин бай маданий контекстин түшүнүңүз."
      }
    ],
    downloadTitle: "Бүгүндөн баштаңыз",
    downloadSubtitle: "Кыргыз тилин өздөштүрүү жолуна түшкөн миңдеген окуучуларга кошулуңуз.",
    downloadCount: 10000,
    countLabel: "Бактылуу окуучулар",
    downloadButtonTitle: "Азыр жүктөп алыңыз",
    contactLabel: "Биз менен байланыш:",
    privacyText: "Купуялык саясаты",
    termsText: "Колдонуу шарттары"
  }
};
