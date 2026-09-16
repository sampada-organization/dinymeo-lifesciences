export const locales = ['en', 'hi'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { html: string; dir: 'ltr'; native: string; english: string; og: string }
> = {
  en: { html: 'en-IN', dir: 'ltr', native: 'English', english: 'English', og: 'en_IN' },
  hi: { html: 'hi-IN', dir: 'ltr', native: 'हिन्दी', english: 'Hindi', og: 'hi_IN' },
};

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'hi';
}

export const copy = {
  en: {
    brand: 'Dinymeo Lifesciences',
    skip: 'Skip to content',
    nav: {
      home: 'Home',
      about: 'About',
      manufacturing: 'Manufacturing',
      contact: 'Contact',
      admin: 'Edit site',
    },
    cta: {
      quote: 'Get a free quote',
      range: 'See our range',
      call: 'Call',
      whatsapp: 'WhatsApp',
      email: 'Email',
      send: 'Send enquiry',
      sending: 'Sending…',
      sent: 'Received. We will reply on a working day.',
      fail: 'Could not send. Use call, WhatsApp or email instead.',
    },
    slideshow: {
      prev: 'Previous slide',
      next: 'Next slide',
      hold: 'Hold to pause',
    },
    home: {
      title: 'Dinymeo Lifesciences | Pharma contract manufacturing',
      description:
        'Dinymeo Lifesciences Pvt Ltd — allopathic medicine contract manufacturing for marketing partners worldwide.',
      welcome: 'Welcome to Dinymeo Lifesciences Pvt. Ltd.',
      intro:
        'We connect healthcare innovation with the market. Dinymeo makes a full range of allopathic medicines for marketing partners.',
      body:
        'As a premium pharmaceutical company in India, we specialise in a comprehensive range of essential medicines.',
      flowTitle: 'How we stay in sync',
      flowLead:
        'You bring the market. We run the back end. Each step talks to the next, so the batch you sell is the brief you sent.',
      flowPartner: 'You',
      flowOps: 'Dinymeo',
      flowSync: 'In sync',
      flow: [
        { title: 'Brief', text: 'Molecule, pack, market.' },
        { title: 'Source', text: 'API and materials to spec.' },
        { title: 'Formulation', text: 'Stable product work.' },
        { title: 'Stability', text: 'ICH data on file.' },
        { title: 'QA', text: 'Specs you can see.' },
        { title: 'Make', text: 'Documented batch.' },
        { title: 'Pack', text: 'Pack chosen for the formulation.' },
        { title: 'Dispatch', text: 'On the promised date.' },
        { title: 'Your brand', text: 'You take it to market.' },
      ],
      casesTitle: 'If this is you',
      cases: [
        {
          icon: 'spark',
          title: 'New brand',
          text: 'First SKU — we formulate and pack so you can launch.',
        },
        {
          icon: 'pack',
          title: 'Grow the list',
          text: 'Add a line without building a new plant.',
        },
        {
          icon: 'lock',
          title: 'Private label',
          text: 'Your name on the pack, our documented batch.',
        },
        {
          icon: 'pulse',
          title: 'Hospital line',
          text: 'Critical-care packs with records on file.',
        },
      ],
      promisesTitle: 'What you can count on',
      aboutTitle: 'A short word about us',
      aboutTeaser:
        'We handle the back end — materials, formulation, testing and packing — so marketing companies can sell with confidence. We work only in allopathic medicines, with a named person on your account and batches that match the brief you send.',
      aboutPoints: [
        'Sourcing, formulation work and quality tests under one roof of process.',
        'Flexible batch sizes for new brands and growing catalogues.',
        'Packs chosen for shelf life: Alu-Alu, blister, strip, bottle or tube.',
      ],
      linksTitle: 'Find your way',
      contactTitle: 'Talk to us',
      formLead: 'Tell us what you need. A person will read this. No spam list.',
    },
    promises: [
      {
        icon: 'shield',
        title: 'Documented quality',
        text: 'Batches made with clean-room discipline and full test records.',
      },
      {
        icon: 'pack',
        title: 'Packs that last',
        text: 'Alu-Alu, blister, strip, custom bottles and tubes — chosen for shelf life and a clean look.',
      },
      {
        icon: 'globe',
        title: 'Global supply',
        text: 'A working supply chain so consignments reach your market on a promised date.',
      },
      {
        icon: 'clock',
        title: 'On-time work',
        text: 'From formulation to dispatch, we keep turnaround short and visible to you.',
      },
    ],
    about: {
      title: 'About Dinymeo Lifesciences Pvt. Ltd.',
      description:
        'Dinymeo is a pharmaceutical company making allopathic medicines for marketing partners, with a focus on compliance, confidentiality and practical supply.',
      kicker: 'Company',
      headline: 'Built for partners worldwide.',
      overview:
        'Dinymeo Lifesciences Pvt. Ltd. is a growing, lawfully set-up pharmaceutical company. We work only in the allopathic segment and give end-to-end manufacturing to pharmaceutical marketing companies worldwide.',
      operations:
        'Our work rests on clear dealing, regulatory care, and science. We take care of the whole back end — sourcing, formulation, strict quality testing, and modern packing.',
      valuesTitle: 'How we work',
      values: [
        {
          title: 'Integrity',
          text: 'Your custom formulations and business data stay confidential.',
        },
        {
          title: 'Innovation',
          text: 'We keep up with modern medicine so therapies stay effective and stable.',
        },
        {
          title: 'Customer first',
          text: 'Flexible batch sizes and a named person for your account.',
        },
        {
          title: 'Surgical & clinical care',
          text: 'Formulations shaped for critical care and procedure use, not only retail shelves.',
        },
      ],
      whyTitle: 'Why partners pick us',
      why: [
        'Uncompromising quality and compliance',
        'Patient-centric formulations',
        'A trusted partner for healthcare professionals',
        'A reliable supply chain',
      ],
      specialtiesTitle: 'Therapeutic focus',
      specialties:
        'Gastrointestinal care, general surgery, critical care, and everyday health needs — plus cardiology, anti-infectives, gynaecology, dermatology and paediatrics.',
    },
    manufacturing: {
      title: 'Manufacturing & products | Dinymeo Lifesciences',
      description:
        'Allopathic contract manufacturing across cardiology, antibiotics, gynaecology, dermatology, paediatrics and general medicine. Alu-Alu, blister, strip, bottle and tube packing.',
      kicker: 'Capabilities',
      headline: 'A catalogue you can brand.',
      lead: 'We offer a wide allopathic range across many therapy areas for licensed marketing partners.',
      productsTitle: 'Therapy areas',
      packTitle: 'Packaging',
      packImageAlt: 'Premium pharmaceutical packs: Alu-Alu, blister, strip, bottle and tube.',
      processTitle: 'From brief to batch',
      steps: [
        { title: 'Share the brief', text: 'Molecule, strength, pack and market — or ask us to suggest a range.' },
        { title: 'Formulation & tests', text: 'Formulation work, stability thinking, and quality specs before a batch is locked.' },
        { title: 'Make & pack', text: 'Documented manufacturing in certified facilities, then Alu-Alu, blister, strip, bottle or tube.' },
        { title: 'Dispatch', text: 'Checked, packed, and sent on the agreed date.' },
      ],
    },
    contact: {
      title: 'Contact Dinymeo Lifesciences',
      description:
        'Partner with Dinymeo Lifesciences Pvt Ltd. Call, WhatsApp or email for third-party manufacturing.',
      kicker: 'Enquiry',
      headline: 'Partner with us today.',
      lead: 'This form is for companies and licensed traders.',
      office: 'Registered office',
      hours: 'Business hours',
      phone: 'Phone / WhatsApp',
      email: 'Email',
      map: 'Open in maps',
    },
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company name',
      message: 'Message',
      consent:
        'I agree that Dinymeo may use these details only to reply to this enquiry, as described in the privacy notice.',
      required: 'Please fill this field.',
      invalidEmail: 'Enter a valid email.',
      invalidPhone: 'Enter a valid Indian mobile or landline.',
    },
    footer: {
      blurb:
        'Allopathic contract manufacturing. Quality, packing and global supply for marketing partners.',
      legal: 'Legal',
      disclaimer: 'Disclaimer',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
      b2b: 'B2B manufacturing only.',
    },
    legal: {
      disclaimerTitle: 'Disclaimer',
      privacyTitle: 'Privacy notice',
      termsTitle: 'Terms of use',
      lastUpdated: 'Last updated 7 September 2026.',
    },
    dock: {
      call: 'Call Dinymeo',
      wa: 'WhatsApp Dinymeo',
      mail: 'Email Dinymeo',
    },
  },
  hi: {
    brand: 'डिनिमियो लाइफसाइंसेस',
    skip: 'सीधे मुख्य भाग पर जाएँ',
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      manufacturing: 'निर्माण',
      contact: 'संपर्क',
      admin: 'साइट बदलें',
    },
    cta: {
      quote: 'मुफ्त कोट माँगें',
      range: 'हमारी रेंज देखें',
      call: 'कॉल',
      whatsapp: 'व्हाट्सऐप',
      email: 'ईमेल',
      send: 'पूछताछ भेजें',
      sending: 'भेज रहे हैं…',
      sent: 'मिल गया। काम के दिन जवाब देंगे।',
      fail: 'नहीं भेजा जा सका। कॉल, व्हाट्सऐप या ईमेल करें।',
    },
    slideshow: {
      prev: 'पिछली स्लाइड',
      next: 'अगली स्लाइड',
      hold: 'रोकने के लिए दबाए रखें',
    },
    home: {
      title: 'डिनिमियो लाइफसाइंसेस | फार्मा कॉन्ट्रैक्ट मैन्युफैक्चरिंग',
      description:
        'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड — मार्केटिंग पार्टनर के लिए एलोपैथिक दवाओं का कॉन्ट्रैक्ट निर्माण।',
      welcome: 'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड में आपका स्वागत है',
      intro:
        'हम स्वास्थ्य नवाचार को बाजार तक लाते हैं। डिनिमियो मार्केटिंग पार्टनर के लिए एलोपैथिक दवाइयाँ बनाती है।',
      body:
        'भारत की एक प्रीमियम फार्मा कंपनी के रूप में, हम ज़रूरी दवाइयों की व्यापक रेंज में विशेषज्ञ हैं।',
      flowTitle: 'हम कैसे साथ चलते हैं',
      flowLead: 'बाजार आपका। बैक एंड हमारा। हर कदम अगले से जुड़ा, ताकि बैच वही हो जो आपने कहा।',
      flowPartner: 'आप',
      flowOps: 'डिनिमियो',
      flowSync: 'साथ',
      flow: [
        { title: 'संक्षेप', text: 'मॉलीक्यूल, पैक, बाजार।' },
        { title: 'सोर्स', text: 'API और सामग्री स्पेक के अनुसार।' },
        { title: 'फॉर्मूलेशन', text: 'स्थिर उत्पाद कार्य।' },
        { title: 'स्थिरता', text: 'ICH डेटा फाइल पर।' },
        { title: 'QA', text: 'स्पेक जो दिखें।' },
        { title: 'बनाना', text: 'दर्ज बैच।' },
        { title: 'पैक', text: 'फॉर्मूलेशन के अनुसार पैक।' },
        { title: 'डिस्पैच', text: 'तय तारीख पर।' },
        { title: 'आपका ब्रांड', text: 'बाजार आप ले जाएँ।' },
      ],
      promisesTitle: 'आप हम पर यह भरोसा कर सकते हैं',
      aboutTitle: 'हमारे बारे में संक्षेप में',
      aboutTeaser:
        'कच्चा माल, फॉर्मूलेशन, टेस्टिंग और पैकिंग हम सँभालते हैं, ताकि मार्केटिंग कंपनियाँ निश्चिंत होकर बेच सकें। हम केवल एलोपैथिक दवाइयाँ बनाते हैं — आपके खाते पर एक नामित व्यक्ति, और बैच आपकी संक्षेप के अनुसार।',
      aboutPoints: [
        'सोर्सिंग, फॉर्मूलेशन और गुणवत्ता जाँच एक ही प्रक्रिया में।',
        'नए ब्रांड और बढ़ते कैटलॉग के लिए लचीला बैच साइज।',
        'शेल्फ लाइफ के लिए पैक: अलु-अलु, ब्लिस्टर, स्ट्रिप, बोतल या ट्यूब।',
      ],
      linksTitle: 'आगे बढ़ें',
      contactTitle: 'बात करें',
      formLead: 'जरूरत लिखें। इसे कोई व्यक्ति पढ़ेगा। स्पैम नहीं।',
      casesTitle: 'अगर यह आप हैं',
      cases: [
        {
          icon: 'spark',
          title: 'नया ब्रांड',
          text: 'पहला SKU — हम फॉर्मूलेट और पैक करते हैं, ताकि आप लॉन्च कर सकें।',
        },
        {
          icon: 'pack',
          title: 'लिस्ट बढ़ाएँ',
          text: 'नई लाइन जोड़ें, नया प्लांट बनाए बिना।',
        },
        {
          icon: 'lock',
          title: 'प्राइवेट लेबल',
          text: 'पैक पर आपका नाम, दर्ज बैच हमारा।',
        },
        {
          icon: 'pulse',
          title: 'अस्पताल लाइन',
          text: 'क्रिटिकल-केयर पैक, रिकॉर्ड फाइल पर।',
        },
      ],
    },
    promises: [
      {
        icon: 'shield',
        title: 'दर्ज गुणवत्ता',
        text: 'क्लीनरूम अनुशासन और पूरे टेस्ट रिकॉर्ड के साथ बने बैच।',
      },
      {
        icon: 'pack',
        title: 'टिकाऊ पैक',
        text: 'अलु-अलु, ब्लिस्टर, स्ट्रिप, कस्टम बोतल और ट्यूब — शेल्फ लाइफ और साफ लुक के लिए।',
      },
      {
        icon: 'globe',
        title: 'वैश्विक सप्लाई',
        text: 'काम करने वाली सप्लाई चेन, ताकि माल तय तारीख पर आपके बाजार पहुँचे।',
      },
      {
        icon: 'clock',
        title: 'समय पर काम',
        text: 'फॉर्मूलेशन से डिस्पैच तक, काम छोटा और आपको दिखता रहे।',
      },
    ],
    about: {
      title: 'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड के बारे में',
      description:
        'डिनिमियो मार्केटिंग पार्टनर के लिए एलोपैथिक दवाइयाँ बनाती है — नियमों का पालन, गोपनीयता और व्यावहारिक सप्लाई।',
      kicker: 'कंपनी',
      headline: 'दुनिया भर के पार्टनर के लिए बनी।',
      overview:
        'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड एक बढ़ती, कानूनी रूप से बनी फार्मा कंपनी है। हम केवल एलोपैथिक सेगमेंट में काम करते हैं और मार्केटिंग कंपनियों को पूरा निर्माण देते हैं।',
      operations:
        'हमारा काम साफ लेन-देन, नियमों की देखभाल, और विज्ञान पर टिका है। कच्चा माल, फॉर्मूलेशन, सख्त गुणवत्ता जाँच और आधुनिक पैकिंग — पूरा बैक एंड हम सँभालते हैं।',
      valuesTitle: 'हम कैसे काम करते हैं',
      values: [
        { title: 'ईमानदारी', text: 'आपकी कस्टम फॉर्मूलेशन और व्यापार डेटा गोपनीय रहते हैं।' },
        { title: 'नवाचार', text: 'आधुनिक चिकित्सा के साथ चलते हैं, ताकि इलाज असरदार और स्थिर रहें।' },
        { title: 'ग्राहक पहले', text: 'लचीला बैच साइज और आपके खाते के लिए एक नामित व्यक्ति।' },
        { title: 'सर्जिकल और क्लिनिकल देखभाल', text: 'केवल दुकान नहीं, गंभीर देखभाल और प्रक्रिया के लिए भी फॉर्मूलेशन।' },
      ],
      whyTitle: 'पार्टनर हमें क्यों चुनते हैं',
      why: [
        'बिना समझौते की गुणवत्ता और अनुपालन',
        'मरीज को ध्यान में रखकर बनी दवाइयाँ',
        'स्वास्थ्य पेशेवरों का भरोसेमंद साथी',
        'भरोसेमंद सप्लाई चेन',
      ],
      specialtiesTitle: 'थेरेपी फोकस',
      specialties:
        'पेट-आंत, सामान्य सर्जरी, गंभीर देखभाल, रोजमर्रा की सेहत — साथ में हृदय, संक्रमण-रोधी, स्त्री रोग, त्वचा और बाल रोग।',
    },
    manufacturing: {
      title: 'निर्माण और उत्पाद | डिनिमियो लाइफसाइंसेस',
      description:
        'हृदय, एंटीबायोटिक, स्त्री रोग, त्वचा, बाल रोग और सामान्य दवाइयों का एलोपैथिक कॉन्ट्रैक्ट निर्माण। अलु-अलु, ब्लिस्टर, स्ट्रिप, बोतल, ट्यूब।',
      kicker: 'क्षमता',
      headline: 'एक कैटलॉग, आपका ब्रांड।',
      lead: 'हम कई थेरेपी क्षेत्रों में एलोपैथिक रेंज देते हैं, लाइसेंसधारी मार्केटिंग पार्टनर के लिए।',
      productsTitle: 'थेरेपी क्षेत्र',
      packTitle: 'पैकेजिंग',
      packImageAlt: 'प्रीमियम फार्मा पैक: अलु-अलु, ब्लिस्टर, स्ट्रिप, बोतल और ट्यूब।',
      processTitle: 'संक्षेप से बैच तक',
      steps: [
        { title: 'जरूरत बताएँ', text: 'मॉलीक्यूल, ताकत, पैक और बाजार — या हम रेंज सुझाएँ।' },
        { title: 'फॉर्मूलेशन और टेस्ट', text: 'फॉर्मूलेशन, स्थिरता, और गुणवत्ता स्पेक — बैच लॉक करने से पहले।' },
        { title: 'बनाना और पैक', text: 'प्रमाणित प्लांट में दर्ज निर्माण, फिर अलु-अलु, ब्लिस्टर, स्ट्रिप, बोतल या ट्यूब।' },
        { title: 'डिस्पैच', text: 'जाँच, पैक, और तय तारीख पर रवाना।' },
      ],
    },
    contact: {
      title: 'संपर्क | डिनिमियो लाइफसाइंसेस',
      description:
        'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड के साथ साझेदारी करें। थर्ड-पार्टी निर्माण के लिए कॉल, व्हाट्सऐप या ईमेल।',
      kicker: 'पूछताछ',
      headline: 'आज साझेदारी करें।',
      lead: 'यह फॉर्म कंपनियों और लाइसेंसधारी व्यापारियों के लिए है।',
      office: 'पंजीकृत कार्यालय',
      hours: 'काम के घंटे',
      phone: 'फोन / व्हाट्सऐप',
      email: 'ईमेल',
      map: 'मैप में खोलें',
    },
    form: {
      name: 'नाम',
      email: 'ईमेल',
      phone: 'फोन',
      company: 'कंपनी का नाम',
      message: 'संदेश',
      consent:
        'मैं सहमत हूँ कि डिनिमियो इन विवरणों का उपयोग केवल इस पूछताछ का जवाब देने के लिए करेगा, जैसा गोपनीयता सूचना में लिखा है।',
      required: 'यह फ़ील्ड भरें।',
      invalidEmail: 'सही ईमेल लिखें।',
      invalidPhone: 'सही भारतीय मोबाइल या लैंडलाइन लिखें।',
    },
    footer: {
      blurb: 'एलोपैथिक कॉन्ट्रैक्ट निर्माण। मार्केटिंग पार्टनर के लिए गुणवत्ता, पैकिंग और वैश्विक सप्लाई।',
      legal: 'कानूनी',
      disclaimer: 'अस्वीकरण',
      privacy: 'गोपनीयता',
      terms: 'नियम',
      rights: 'सर्वाधिकार सुरक्षित।',
      b2b: 'केवल व्यापार-से-व्यापार निर्माण।',
    },
    legal: {
      disclaimerTitle: 'अस्वीकरण',
      privacyTitle: 'गोपनीयता सूचना',
      termsTitle: 'उपयोग के नियम',
      lastUpdated: 'आखिरी अपडेट 7 सितंबर 2026।',
    },
    dock: {
      call: 'डिनिमियो को कॉल करें',
      wa: 'डिनिमियो को व्हाट्सऐप करें',
      mail: 'डिनिमियो को ईमेल करें',
    },
  },
} as const;

export type Copy = (typeof copy)[Locale];

export function t(lang: Locale): Copy {
  return copy[lang];
}
