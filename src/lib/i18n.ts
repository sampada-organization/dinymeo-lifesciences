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
      title: 'Dinymeo Lifesciences | Pharmaceutical formulations',
      description:
        'Dinymeo Lifesciences Pvt. Ltd. develops and manufactures generic and proprietary formulations for partners in India and in export markets.',
      keywords:
        'Dinymeo Lifesciences, Dinymeo Lifesciences Pvt Ltd, pharmaceutical formulations, PCD pharma, pharmaceutical export, cardiology, diabetology, gastroenterology',
      slogan: 'Innovating healthcare. Empowering lives.',
      welcome: 'Dinymeo Lifesciences',
      intro:
        'A formulation house for partners who take medicines to market. Development, a documented batch, and a path into India and export markets sit in one place.',
      body:
        'The range is generic and proprietary. PCD franchises, export desks, and companies that sell under their own name share the same process.',
      linesTitle: 'Processing, at the standard we work to',
      linesLead:
        'Tablet compression, capsule filling and liquid lines. The pictures show the class of equipment, not one named site.',
      flowTitle: 'How a batch stays in sync',
      flowLead:
        'You bring the market. Dinymeo Lifesciences runs development through dispatch. Each step talks to the next, so the batch matches the brief.',
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
      casesTitle: 'Who we work with',
      cases: [
        {
          icon: 'user',
          title: 'PCD partners',
          text: 'Franchise and territory partners who need a formulation list ready for their market.',
        },
        {
          icon: 'globe',
          title: 'Export desks',
          text: 'Trade partners supplying South Asia, Africa and CIS markets.',
        },
        {
          icon: 'pack',
          title: 'Your brand',
          text: 'Your name on the pack. A documented batch behind it.',
        },
        {
          icon: 'pulse',
          title: 'Institutions',
          text: 'Hospital and clinical supply, with records kept on file.',
        },
      ],
      promisesTitle: 'Pillars of the work',
      aboutTitle: 'A short word about us',
      aboutTeaser:
        'Dinymeo Lifesciences was founded in 2018. We develop, manufacture and move high-grade formulations — materials, formulation work, testing and packing — so partners can sell with a batch they can explain.',
      aboutPoints: [
        'Analytical checks, including HPLC and spectral testing, before a batch is released.',
        'Tablet, capsule and liquid lines, then a pack chosen for the formulation.',
        'Domestic partners, and export across South Asia, Africa and CIS.',
      ],
      linksTitle: 'Find your way',
      contactTitle: 'Talk to us',
      formLead: 'PCD, export, or a formulation brief. A person will read this.',
    },
    statsTitle: 'By the numbers',
    statsNote:
      'These figures are Dinymeo Lifesciences’ own statement, taken from the company’s corporate materials. They are not a regulator’s count, and they are not turnover.',
    stats: [
      { value: '500+', label: 'Approved formulations', note: 'Portfolio the company states' },
      { value: '2018', label: 'Founded', note: 'Pune, India' },
      { value: '3', label: 'Export regions', note: 'South Asia, Africa, CIS' },
      { value: '6', label: 'Therapy areas', note: 'The focus list we publish' },
    ],
    promises: [
      {
        icon: 'spark',
        title: 'Formulation science',
        text: 'Delivery systems and stability work, shaped around the brief rather than a fixed catalogue only.',
      },
      {
        icon: 'shield',
        title: 'Quality first',
        text: 'Multi-stage batch testing for purity and stability, with HPLC and spectral checks in the chain.',
      },
      {
        icon: 'globe',
        title: 'Global supply',
        text: 'A path for partners in India and for export across South Asia, Africa and CIS.',
      },
      {
        icon: 'pack',
        title: 'Precision packing',
        text: 'Blister and strip with a moisture seal, plus Alu-Alu, bottles and tubes when the formulation asks.',
      },
    ],
    about: {
      title: 'About Dinymeo Lifesciences',
      description:
        'Vision, mission and growth of Dinymeo Lifesciences Pvt. Ltd. — pharmaceutical formulations from Pune for India and export markets.',
      keywords:
        'Dinymeo Lifesciences, about Dinymeo Lifesciences, pharmaceutical company Pune, PCD pharma franchise, pharmaceutical export South Asia Africa CIS',
      kicker: 'Company',
      headline: 'Formulations, with a path to market.',
      overview:
        'Dinymeo Lifesciences Pvt. Ltd. develops, manufactures and distributes high-grade generic and proprietary formulations. The company was founded in 2018 and works with PCD partners, export desks and brands that sell under their own name.',
      operations:
        'The back end is one process: sourcing, formulation, analytical testing and packing. Custom work and business data stay confidential. A named person sits on the account.',
      stillAlt: 'Cleanroom line of the standard used for Dinymeo Lifesciences formulations.',
      visionTitle: 'Vision',
      vision:
        'To be known for careful pharmaceutical innovation, uncompromised purity, and formulations partners can take to their own markets.',
      missionTitle: 'Mission',
      mission:
        'To improve quality of life by developing, manufacturing and distributing formulations that are safe, effective and able to travel.',
      roadmapTitle: 'How the company has grown',
      roadmap: [
        {
          year: '2018',
          title: 'Inception',
          text: 'Dinymeo Lifesciences is founded, with accessible formulations as the aim.',
        },
        {
          year: '2020',
          title: 'Accreditation',
          text: 'The manufacturing network is aligned to WHO-GMP practice at the sites we work with.',
        },
        {
          year: '2022',
          title: 'Global reach',
          text: 'Export channels open across South Asia, Africa and CIS markets.',
        },
        {
          year: '2025',
          title: 'Next horizon',
          text: 'The direction from here is specialty biologics and newer delivery systems.',
        },
      ],
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
        'Cardiology, diabetology, gastroenterology, oncology, antibiotics and nutraceuticals. Categories only — we do not publish a public list of brands, strengths or indications.',
    },
    manufacturing: {
      title: 'Formulations and facilities | Dinymeo Lifesciences',
      description:
        'Dinymeo Lifesciences formulations across cardiology, diabetology, gastroenterology, oncology, antibiotics and nutraceuticals, with tablet, capsule, liquid and blister lines.',
      keywords:
        'Dinymeo Lifesciences formulations, tablet compression, capsule filling, blister packaging, HPLC pharmaceutical testing, cardiology, diabetology, nutraceuticals',
      kicker: 'Capabilities',
      headline: 'A catalogue you can brand.',
      lead: 'Six therapy areas. Tablet, capsule, liquid and softgel forms. Packing chosen for the formulation.',
      stillAlt: 'Automated cleanroom line used to illustrate Dinymeo Lifesciences processing.',
      productsTitle: 'Therapy areas',
      packTitle: 'Packaging',
      packImageAlt: 'Premium pharmaceutical packs: Alu-Alu, blister, strip, bottle and tube.',
      processTitle: 'From brief to batch',
      plantTitle: 'The lines',
      plantLead:
        'Automated tablet, capsule and liquid processing, then blister or strip packing, with analytical release and stability work beside the line.',
      plantNote:
        'Photographs illustrate this class of equipment. They are not a picture of one named Dinymeo site. WHO-GMP, GLP and ISO refer to the manufacturing sites we work with.',
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
      formsTitle: 'Dosage forms',
      formsNote:
        'The standard column describes practice at partner sites. Certificates stay with those sites and can be shared with qualified partners on request.',
      formsHead: ['Therapy', 'Dosage forms', 'Standard'],
      forms: [
        { area: 'Cardiovascular', forms: 'Tablets, sustained-release capsules', standard: 'WHO-GMP practice' },
        { area: 'Diabetology', forms: 'Oral tablets, syrups', standard: 'WHO-GMP practice' },
        { area: 'Gastroenterology', forms: 'Capsules, oral suspensions', standard: 'WHO-GMP practice' },
        { area: 'Nutraceuticals', forms: 'Softgels, tablets', standard: 'ISO and GMP practice' },
      ],
      steps: [
        { title: 'Share the brief', text: 'Molecule, strength, pack and market — or ask for a range from the focus list.' },
        { title: 'Formulation and tests', text: 'Formulation work, stability thinking, and HPLC-level specs before a batch is locked.' },
        { title: 'Make and pack', text: 'Tablet, capsule or liquid, then Alu-Alu, blister, strip, bottle or tube.' },
        { title: 'Dispatch', text: 'Checked, packed, and sent on the agreed date.' },
      ],
    },
    contact: {
      title: 'Contact Dinymeo Lifesciences | PCD and export',
      description:
        'Talk to Dinymeo Lifesciences Pvt. Ltd. in Pune about PCD franchise, export and formulation partnerships.',
      keywords:
        'Dinymeo Lifesciences contact, PCD pharma enquiry, pharmaceutical export enquiry, Dinymeo Lifesciences Pune',
      kicker: 'Enquiry',
      headline: 'PCD and export enquiries.',
      lead: 'Franchise, export and formulation partners. This form is for companies and licensed traders.',
      pathsTitle: 'What to write about',
      paths: [
        { title: 'PCD franchise', text: 'Territory, the therapy list, and the pack you want on the shelf.' },
        { title: 'Export', text: 'Destination market, the documents you need, and the dosage forms.' },
        { title: 'Your brand', text: 'Molecule, strength, pack, and the name that goes on it.' },
      ],
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
        'Dinymeo Lifesciences. Pharmaceutical formulations, documented quality, and supply for partners in India and abroad.',
      legal: 'Legal',
      disclaimer: 'Disclaimer',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
      b2b: 'For licensed partners.',
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
