export const locales = ['en', 'hi', 'mr'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { html: string; dir: 'ltr'; native: string; english: string; og: string }
> = {
  en: { html: 'en-IN', dir: 'ltr', native: 'English', english: 'English', og: 'en_IN' },
  hi: { html: 'hi-IN', dir: 'ltr', native: 'हिन्दी', english: 'Hindi', og: 'hi_IN' },
  mr: { html: 'mr-IN', dir: 'ltr', native: 'मराठी', english: 'Marathi', og: 'mr_IN' },
};

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'hi' || value === 'mr';
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
      title: 'Dinymeo Lifesciences | Pharma contract manufacturing in India',
      description:
        'Dinymeo Lifesciences Pvt Ltd — allopathic medicine contract manufacturing from Pune, for partners in India and worldwide.',
      welcome: 'Welcome to Dinymeo Lifesciences Pvt. Ltd.',
      intro:
        'We connect healthcare innovation with the market. Dinymeo is a pharmaceutical company in India that makes a full range of allopathic medicines for marketing partners.',
      body:
        'We focus on research-led formulations, careful quality, and medicines people can actually get. Built on clinical care and safety, we make high-efficacy treatments for today’s health needs.',
      promisesTitle: 'What you can count on',
      aboutTitle: 'A short word about us',
      aboutTeaser:
        'We handle the back end — materials, formulation, testing and packing — so marketing companies can sell with confidence. From Pune, we work only in allopathic medicines, with a named person on your account and batches that match the brief you send.',
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
        icon: 'india',
        title: 'Pan-India delivery',
        text: 'A working supply chain so consignments reach any corner of India on a promised date.',
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
        'Dinymeo is a Pune-based pharmaceutical company making allopathic medicines for marketing partners, with a focus on compliance, confidentiality and practical supply.',
      kicker: 'Company',
      headline: 'Made in India. Built for partners.',
      overview:
        'Dinymeo Lifesciences Pvt. Ltd. is a growing, lawfully set-up pharmaceutical company. We work only in the allopathic segment and give end-to-end manufacturing to pharmaceutical marketing companies across India.',
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
          text: 'Flexible batch sizes and a named person for your account, whether you are small or large.',
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
      lead:
        'We offer a wide allopathic range across many therapy areas. This page lists categories, not consumer brands or doses. Product communication for prescription medicines is for qualified professionals and licensed partners only.',
      productsTitle: 'Therapy areas',
      packTitle: 'Packaging',
      packImageAlt: 'Aluminium ointment and cream tubes — a fifth packing standard beside Alu-Alu, blister, strip and bottles.',
      processTitle: 'From brief to batch',
      steps: [
        { title: 'Share the brief', text: 'Molecule, strength, pack and market — or ask us to suggest a range.' },
        { title: 'Formulation & tests', text: 'Formulation work, stability thinking, and quality specs before a batch is locked.' },
        { title: 'Make & pack', text: 'Documented manufacturing in certified facilities, then Alu-Alu, blister, strip, bottle or tube.' },
        { title: 'Dispatch', text: 'Checked, packed, and sent through the India network on the agreed date.' },
      ],
    },
    contact: {
      title: 'Contact Dinymeo Lifesciences | Pune',
      description:
        'Partner with Dinymeo Lifesciences Pvt Ltd. Registered office in Punawale, Pune. Call, WhatsApp or email for third-party manufacturing.',
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
        'Allopathic contract manufacturing from Pune. Quality, packing and pan-India supply for marketing partners.',
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
      title: 'डिनिमियो लाइफसाइंसेस | भारत में फार्मा कॉन्ट्रैक्ट मैन्युफैक्चरिंग',
      description:
        'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड — पुणे से एलोपैथिक दवाओं का कॉन्ट्रैक्ट निर्माण, भारत और दुनिया के पार्टनर के लिए।',
      welcome: 'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड में आपका स्वागत है',
      intro:
        'हम स्वास्थ्य नवाचार को बाजार तक लाते हैं। डिनिमियो भारत की एक फार्मा कंपनी है, जो मार्केटिंग पार्टनर के लिए एलोपैथिक दवाइयाँ बनाती है।',
      body:
        'हम अच्छे फॉर्मूलेशन, सख्त गुणवत्ता, और ऐसी दवाइयों पर काम करते हैं जो लोगों तक सच में पहुँचें। सुरक्षा और क्लिनिकल देखभाल हमारे आधार हैं।',
      promisesTitle: 'आप हम पर यह भरोसा कर सकते हैं',
      aboutTitle: 'हमारे बारे में संक्षेप में',
      aboutTeaser:
        'कच्चा माल, फॉर्मूलेशन, टेस्टिंग और पैकिंग हम सँभालते हैं, ताकि मार्केटिंग कंपनियाँ निश्चिंत होकर बेच सकें। पुणे से हम केवल एलोपैथिक दवाइयाँ बनाते हैं — आपके खाते पर एक नामित व्यक्ति, और बैच आपकी संक्षेप के अनुसार।',
      aboutPoints: [
        'सोर्सिंग, फॉर्मूलेशन और गुणवत्ता जाँच एक ही प्रक्रिया में।',
        'नए ब्रांड और बढ़ते कैटलॉग के लिए लचीला बैच साइज।',
        'शेल्फ लाइफ के लिए पैक: अलु-अलु, ब्लिस्टर, स्ट्रिप, बोतल या ट्यूब।',
      ],
      linksTitle: 'आगे बढ़ें',
      contactTitle: 'बात करें',
      formLead: 'जरूरत लिखें। इसे कोई व्यक्ति पढ़ेगा। स्पैम नहीं।',
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
        icon: 'india',
        title: 'पूरे भारत में डिलीवरी',
        text: 'काम करने वाली सप्लाई चेन, ताकि माल तय तारीख पर भारत के किसी भी कोने पहुँचे।',
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
        'डिनिमियो पुणे की फार्मा कंपनी है। मार्केटिंग पार्टनर के लिए एलोपैथिक दवाइयाँ, नियमों का पालन, गोपनीयता और व्यावहारिक सप्लाई।',
      kicker: 'कंपनी',
      headline: 'भारत में बनी। पार्टनर के लिए बनी।',
      overview:
        'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड एक बढ़ती, कानूनी रूप से बनी फार्मा कंपनी है। हम केवल एलोपैथिक सेगमेंट में काम करते हैं और भारत की मार्केटिंग कंपनियों को पूरा निर्माण देते हैं।',
      operations:
        'हमारा काम साफ लेन-देन, नियमों की देखभाल, और विज्ञान पर टिका है। कच्चा माल, फॉर्मूलेशन, सख्त गुणवत्ता जाँच और आधुनिक पैकिंग — पूरा बैक एंड हम सँभालते हैं।',
      valuesTitle: 'हम कैसे काम करते हैं',
      values: [
        { title: 'ईमानदारी', text: 'आपकी कस्टम फॉर्मूलेशन और व्यापार डेटा गोपनीय रहते हैं।' },
        { title: 'नवाचार', text: 'आधुनिक चिकित्सा के साथ चलते हैं, ताकि इलाज असरदार और स्थिर रहें।' },
        { title: 'ग्राहक पहले', text: 'लचीला बैच साइज और आपके खाते के लिए एक नामित व्यक्ति — छोटे या बड़े दोनों के लिए।' },
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
      lead:
        'हम कई थेरेपी क्षेत्रों में एलोपैथिक रेंज देते हैं। यह पेज श्रेणियाँ बताता है, उपभोक्ता ब्रांड या डोज नहीं। प्रिस्क्रिप्शन दवा की बातचीत केवल योग्य पेशेवरों और लाइसेंसधारी पार्टनर के लिए है।',
      productsTitle: 'थेरेपी क्षेत्र',
      packTitle: 'पैकेजिंग',
      packImageAlt: 'क्रीम और ऑइंटमेंट की एल्युमिनियम ट्यूब — पाँचवाँ पैक मानक, अलु-अलु, ब्लिस्टर, स्ट्रिप और बोतल के साथ।',
      processTitle: 'संक्षेप से बैच तक',
      steps: [
        { title: 'जरूरत बताएँ', text: 'मॉलीक्यूल, ताकत, पैक और बाजार — या हम रेंज सुझाएँ।' },
        { title: 'फॉर्मूलेशन और टेस्ट', text: 'फॉर्मूलेशन, स्थिरता, और गुणवत्ता स्पेक — बैच लॉक करने से पहले।' },
        { title: 'बनाना और पैक', text: 'प्रमाणित प्लांट में दर्ज निर्माण, फिर अलु-अलु, ब्लिस्टर, स्ट्रिप, बोतल या ट्यूब।' },
        { title: 'डिस्पैच', text: 'जाँच, पैक, और तय तारीख पर भारत नेटवर्क से रवाना।' },
      ],
    },
    contact: {
      title: 'संपर्क | डिनिमियो लाइफसाइंसेस, पुणे',
      description:
        'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड के साथ साझेदारी करें। पंजीकृत कार्यालय पुनावले, पुणे। थर्ड-पार्टी निर्माण के लिए कॉल, व्हाट्सऐप या ईमेल।',
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
      blurb: 'पुणे से एलोपैथिक कॉन्ट्रैक्ट निर्माण। मार्केटिंग पार्टनर के लिए गुणवत्ता, पैकिंग और पूरे भारत में सप्लाई।',
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
  mr: {
    brand: 'डिनिमियो लाइफसायन्सेस',
    skip: 'थेट मुख्य भागाकडे जा',
    nav: {
      home: 'मुख्य',
      about: 'आमच्याबद्दल',
      manufacturing: 'उत्पादन',
      contact: 'संपर्क',
      admin: 'साइट बदला',
    },
    cta: {
      quote: 'मोफत कोट मागा',
      range: 'आमची श्रेणी पहा',
      call: 'कॉल',
      whatsapp: 'व्हाट्सअॅप',
      email: 'ईमेल',
      send: 'चौकशी पाठवा',
      sending: 'पाठवत आहोत…',
      sent: 'मिळाले. कामाच्या दिवशी उत्तर देऊ.',
      fail: 'पाठवता आले नाही. कॉल, व्हाट्सअॅप किंवा ईमेल करा.',
    },
    slideshow: {
      prev: 'मागील स्लाइड',
      next: 'पुढील स्लाइड',
      hold: 'थांबवण्यासाठी दाबून धरा',
    },
    home: {
      title: 'डिनिमियो लाइफसायन्सेस | भारतात फार्मा कॉन्ट्रॅक्ट मॅन्युफॅक्चरिंग',
      description:
        'डिनिमियो लाइफसायन्सेस प्रा. लि. — पुण्याहून अॅलोपॅथिक औषधांचे कॉन्ट्रॅक्ट उत्पादन, भारत आणि जगभरातील भागीदारांसाठी.',
      welcome: 'डिनिमियो लाइफसायन्सेस प्रा. लि. मध्ये स्वागत',
      intro:
        'आम्ही आरोग्य नावीन्य बाजारपेठेपर्यंत नेतो. डिनिमियो ही भारतातील फार्मा कंपनी आहे, जी मार्केटिंग भागीदारांसाठी अॅलोपॅथिक औषधे बनवते.',
      body:
        'आम्ही चांगल्या फॉर्म्युलेशन, कडक गुणवत्ता, आणि लोकांपर्यंत खरोखर पोहोचणारी औषधे यावर काम करतो. सुरक्षा आणि क्लिनिकल काळजी हा आमचा पाया आहे.',
      promisesTitle: 'तुम्ही हे अपेक्षित करू शकता',
      aboutTitle: 'आमच्याबद्दल थोडक्यात',
      aboutTeaser:
        'कच्चा माल, फॉर्म्युलेशन, चाचणी आणि पॅकिंग आम्ही पाहतो, जेणेकरून मार्केटिंग कंपन्या विश्वासाने विकू शकतील. पुण्याहून आम्ही फक्त अॅलोपॅथिक औषधे बनवतो — तुमच्या खात्यावर नेमलेली व्यक्ती, आणि बॅच तुमच्या संक्षेपानुसार.',
      aboutPoints: [
        'सोर्सिंग, फॉर्म्युलेशन आणि गुणवत्ता चाचणी एकाच प्रक्रियेत.',
        'नवीन ब्रँड व वाढत्या कॅटलॉगसाठी लवचिक बॅच आकार.',
        'शेल्फ लाइफसाठी पॅक: अलु-अलु, ब्लिस्टर, स्ट्रिप, बाटली किंवा ट्यूब.',
      ],
      linksTitle: 'पुढे जा',
      contactTitle: 'संवाद साधा',
      formLead: 'गरज लिहा. हे माणूस वाचेल. स्पॅम नाही.',
    },
    promises: [
      {
        icon: 'shield',
        title: 'नोंदवलेली गुणवत्ता',
        text: 'क्लीनरूम शिस्त आणि पूर्ण चाचणी नोंदींसह बनवलेले बॅच.',
      },
      {
        icon: 'pack',
        title: 'टिकाऊ पॅक',
        text: 'अलु-अलु, ब्लिस्टर, स्ट्रिप, कस्टम बाटल्या आणि ट्यूब — शेल्फ लाइफ व स्वच्छ रूपासाठी.',
      },
      {
        icon: 'india',
        title: 'अखिल भारत डिलिव्हरी',
        text: 'कामाची पुरवठा साखळी, जेणेकरून माल ठरलेल्या तारखेला भारताच्या कोणत्याही कोपऱ्यात पोहोचेल.',
      },
      {
        icon: 'clock',
        title: 'वेळेवर काम',
        text: 'फॉर्म्युलेशन ते डिस्पॅच, काम छोटे आणि तुम्हाला दिसत राहील.',
      },
    ],
    about: {
      title: 'डिनिमियो लाइफसायन्सेस प्रा. लि. बद्दल',
      description:
        'डिनिमियो ही पुण्यातील फार्मा कंपनी आहे. मार्केटिंग भागीदारांसाठी अॅलोपॅथिक औषधे, नियमांचे पालन, गोपनीयता आणि व्यवहार्य पुरवठा.',
      kicker: 'कंपनी',
      headline: 'भारतात बनवले. भागीदारांसाठी बनवले.',
      overview:
        'डिनिमियो लाइफसायन्सेस प्रा. लि. ही वाढणारी, कायदेशीररीत्या स्थापन झालेली फार्मा कंपनी आहे. आम्ही फक्त अॅलोपॅथिक विभागात काम करतो आणि भारतातील मार्केटिंग कंपन्यांना संपूर्ण उत्पादन देतो.',
      operations:
        'आमचे काम स्पष्ट व्यवहार, नियामक काळजी आणि विज्ञान यावर आधारलेले आहे. कच्चा माल, फॉर्म्युलेशन, कडक गुणवत्ता चाचणी आणि आधुनिक पॅकिंग — संपूर्ण बॅक एंड आम्ही पाहतो.',
      valuesTitle: 'आम्ही कसे काम करतो',
      values: [
        { title: 'प्रामाणिकपणा', text: 'तुमच्या कस्टम फॉर्म्युलेशन आणि व्यवसाय डेटा गोपनीय राहतात.' },
        { title: 'नावीन्य', text: 'आधुनिक औषधांबरोबर चालतो, जेणेकरून उपचार प्रभावी व स्थिर राहतील.' },
        { title: 'ग्राहक प्रथम', text: 'लवचिक बॅच आकार आणि तुमच्या खात्यासाठी नेमलेली व्यक्ती — छोटे किंवा मोठे दोघांसाठी.' },
        { title: 'शस्त्रक्रिया व क्लिनिकल काळजी', text: 'फक्त दुकान नाही, गंभीर देखभाल आणि प्रक्रियांसाठीही फॉर्म्युलेशन.' },
      ],
      whyTitle: 'भागीदार आम्हाला का निवडतात',
      why: [
        'तडजोड न करता गुणवत्ता आणि अनुपालन',
        'रुग्णाला केंद्रस्थानी ठेवून बनवलेली औषधे',
        'आरोग्य व्यावसायिकांचा विश्वासू साथी',
        'विश्वासार्ह पुरवठा साखळी',
      ],
      specialtiesTitle: 'थेरेपी फोकस',
      specialties:
        'पोट-आतडी, सामान्य शस्त्रक्रिया, गंभीर देखभाल, रोजचे आरोग्य — तसेच हृदय, संसर्गविरोधी, स्त्रीरोग, त्वचा आणि बालरोग.',
    },
    manufacturing: {
      title: 'उत्पादन आणि उत्पादने | डिनिमियो लाइफसायन्सेस',
      description:
        'हृदय, अँटीबायोटिक्स, स्त्रीरोग, त्वचा, बालरोग आणि सामान्य औषधांचे अॅलोपॅथिक कॉन्ट्रॅक्ट उत्पादन. अलु-अलु, ब्लिस्टर, स्ट्रिप, बाटली, ट्यूब.',
      kicker: 'क्षमता',
      headline: 'एक कॅटलॉग, तुमचा ब्रँड.',
      lead:
        'आम्ही अनेक थेरेपी क्षेत्रांत अॅलोपॅथिक श्रेणी देतो. हे पान श्रेणी सांगते, ग्राहक ब्रँड किंवा डोज नाही. प्रिस्क्रिप्शन औषधांची माहिती फक्त पात्र व्यावसायिक व परवानाधारक भागीदारांसाठी आहे.',
      productsTitle: 'थेरेपी क्षेत्रे',
      packTitle: 'पॅकेजिंग',
      packImageAlt: 'क्रीम व ऑइंटमेंटच्या अॅल्युमिनियम ट्यूब — पाचवे पॅक मानक, अलु-अलु, ब्लिस्टर, स्ट्रिप आणि बाटलीसोबत.',
      processTitle: 'संक्षेप ते बॅच',
      steps: [
        { title: 'गरज सांगा', text: 'मॉलिक्यूल, क्षमता, पॅक आणि बाजार — किंवा आम्ही श्रेणी सुचवू.' },
        { title: 'फॉर्म्युलेशन आणि चाचणी', text: 'फॉर्म्युलेशन, स्थिरता आणि गुणवत्ता स्पेक — बॅच लॉक करण्यापूर्वी.' },
        { title: 'बनवणे आणि पॅक', text: 'प्रमाणित प्लांटमध्ये नोंदवलेले उत्पादन, नंतर अलु-अलु, ब्लिस्टर, स्ट्रिप, बाटली किंवा ट्यूब.' },
        { title: 'डिस्पॅच', text: 'तपासणी, पॅक, आणि ठरलेल्या तारखेला भारत नेटवर्कवरून रवाना.' },
      ],
    },
    contact: {
      title: 'संपर्क | डिनिमियो लाइफसायन्सेस, पुणे',
      description:
        'डिनिमियो लाइफसायन्सेस प्रा. लि. सोबत भागीदारी करा. नोंदणीकृत कार्यालय पुनावले, पुणे. थर्ड-पार्टी उत्पादनासाठी कॉल, व्हाट्सअॅप किंवा ईमेल.',
      kicker: 'चौकशी',
      headline: 'आज भागीदारी करा.',
      lead: 'हा फॉर्म कंपन्या आणि परवानाधारक व्यापाऱ्यांसाठी आहे.',
      office: 'नोंदणीकृत कार्यालय',
      hours: 'कामाचे तास',
      phone: 'फोन / व्हाट्सअॅप',
      email: 'ईमेल',
      map: 'नकाशात उघडा',
    },
    form: {
      name: 'नाव',
      email: 'ईमेल',
      phone: 'फोन',
      company: 'कंपनीचे नाव',
      message: 'संदेश',
      consent:
        'मी सहमत आहे की डिनिमियो हे तपशील फक्त या चौकशीचे उत्तर देण्यासाठी वापरेल, जसे गोपनीयता सूचनेत लिहिले आहे.',
      required: 'हे क्षेत्र भरा.',
      invalidEmail: 'योग्य ईमेल लिहा.',
      invalidPhone: 'योग्य भारतीय मोबाइल किंवा लँडलाइन लिहा.',
      },
    footer: {
      blurb: 'पुण्याहून अॅलोपॅथिक कॉन्ट्रॅक्ट उत्पादन. मार्केटिंग भागीदारांसाठी गुणवत्ता, पॅकिंग आणि अखिल भारत पुरवठा.',
      legal: 'कायदेशीर',
      disclaimer: 'अस्वीकरण',
      privacy: 'गोपनीयता',
      terms: 'नियम',
      rights: 'सर्व हक्क राखीव.',
      b2b: 'फक्त व्यवसाय-ते-व्यवसाय उत्पादन.',
    },
    legal: {
      disclaimerTitle: 'अस्वीकरण',
      privacyTitle: 'गोपनीयता सूचना',
      termsTitle: 'वापराचे नियम',
      lastUpdated: 'शेवटचे अद्यतन ७ सप्टेंबर २०२६.',
    },
    dock: {
      call: 'डिनिमियोला कॉल करा',
      wa: 'डिनिमियोला व्हाट्सअॅप करा',
      mail: 'डिनिमियोला ईमेल करा',
    },
  },
} as const;

export type Copy = (typeof copy)[Locale];

export function t(lang: Locale): Copy {
  return copy[lang];
}
