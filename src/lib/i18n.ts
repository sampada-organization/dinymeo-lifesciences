export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { html: string; dir: 'ltr'; native: string; english: string; og: string }
> = {
  en: { html: 'en-IN', dir: 'ltr', native: 'English', english: 'English', og: 'en_IN' },
};

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en';
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
      whatsappText: 'Hello, I would like to enquire about manufacturing with Dinymeo Lifesciences.',
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
      linesTitle: 'The lines',
      linesLead:
        'Tablet compression, capsule filling and liquid lines. The pictures show the class of equipment, not one named site.',
      plant: [
        {
          image: '/media/line-tablet.jpg',
          title: 'Tablet compression',
          text: 'Rotary presses for plain and sustained-release tablets.',
          alt: 'Rotary tablet press compressing white tablets in a cleanroom.',
        },
        {
          image: '/media/line-capsule.jpg',
          title: 'Capsule filling',
          text: 'Automatic fillers for two-piece capsules.',
          alt: 'Automatic capsule filling machine with ivory capsules in stainless hoppers.',
        },
        {
          image: '/media/line-liquid.jpg',
          title: 'Liquid filling',
          text: 'Syrups and oral liquids under laminar flow.',
          alt: 'Pharmaceutical liquid filling line with unlabelled glass bottles.',
        },
        {
          image: '/media/line-blister.jpg',
          title: 'Blister packing',
          text: 'Foil forming and a moisture seal on the pack.',
          alt: 'High-speed blister packaging line sealing tablets in foil.',
        },
        {
          image: '/media/line-hplc.jpg',
          title: 'Analytical release',
          text: 'HPLC and spectral checks before a batch moves.',
          alt: 'Row of HPLC instruments on a stainless laboratory bench.',
        },
        {
          image: '/media/line-stability.jpg',
          title: 'Stability',
          text: 'Chambers that hold samples for the shelf-life file.',
          alt: 'Walk-in stability chamber with sample racks of bottles and blisters.',
        },
      ],
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
      google: 'Google Business profile',
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
} as const;

export type Copy = (typeof copy)[Locale];

export function t(lang: Locale): Copy {
  return copy[lang];
}
