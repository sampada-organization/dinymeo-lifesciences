import { type Locale } from './i18n';

type LegalDoc = { title: string; sections: { heading: string; body: string[] }[] };

const en: Record<'disclaimer' | 'privacy' | 'terms', LegalDoc> = {
  disclaimer: {
    title: 'Disclaimer',
    sections: [
      {
        heading: 'Who this website is for',
        body: [
          'This website is published by Dinymeo Lifesciences Pvt. Ltd., Pune, for pharmaceutical marketing companies, licensed traders, and other business partners. It is not an online pharmacy and it does not offer medicines, prescriptions, or treatment to the public.',
          'Nothing here is medical advice. Patients should speak to a registered medical practitioner. Do not start, stop, or change any medicine based on this website.',
        ],
      },
      {
        heading: 'Quality and certification claims',
        body: [
          'References to WHO-GMP, GLP and ISO describe the manufacturing sites we work with. Those certificates are held by the respective facilities. Dinymeo will share copies with qualified partners on request, after confirming the current status with the site.',
          'Until a named certificate is on file for a specific product and site, treat the wording as a description of our intended supply standard — not as a personal licence number displayed on this page.',
          'We do not claim to be a “premier” or exclusive manufacturer. We do not publish invented statistics (employee counts, turnover, or product counts) on this site.',
        ],
      },
      {
        heading: 'Medicines law (India)',
        body: [
          'Promotion of drugs in India is governed by the Drugs and Cosmetics Act, 1940 and Rules, the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954, the Uniform Code for Pharmaceutical Marketing Practices, 2024 (UCPMP), and related guidance from CDSCO and the Department of Pharmaceuticals.',
          'This site does not advertise a specific prescription medicine, dose, or cure. Therapy names (for example cardiology or antibiotics) describe manufacturing capability for licensed partners. We do not encourage self-medication or off-label use.',
          'No doctor testimonials, celebrity endorsements, or “magic remedy” style claims are used.',
        ],
      },
      {
        heading: 'Accuracy',
        body: [
          'We try to keep information current. Manufacturing ranges, packing options, and contact details can change. If a statement matters to a contract, ask for written confirmation.',
          'The site is provided as-is. To the extent Indian law allows, Dinymeo is not liable for decisions made only on the basis of this website.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy notice',
    sections: [
      {
        heading: 'Who we are',
        body: [
          'Dinymeo Lifesciences Pvt. Ltd., Flat no 1004, Smruti Garden, Pandhare Wasti, Punawale, PCMC, Pune 411033, is the person who decides why enquiry data is used (the data fiduciary under the Digital Personal Data Protection Act, 2023).',
          'Contact: Dinymeo@gmail.com / +91 7775000425.',
        ],
      },
      {
        heading: 'What we collect',
        body: [
          'If you send the enquiry form we receive: name, email, phone, company name, message, language, and the time of sending. If you call, WhatsApp, or email us, that channel’s own records also exist.',
          'The website itself does not use advertising cookies or third-party analytics in this version. We may store a language preference in your browser (local storage). That is optional and can be cleared.',
        ],
      },
      {
        heading: 'Why we use it',
        body: [
          'We use enquiry details only to reply, to understand a manufacturing request, and to keep a short business record. Lawful basis: your consent (the checkbox) and our need to take steps at your request before a contract.',
          'We do not sell personal data. We do not use it for public drug advertising.',
        ],
      },
      {
        heading: 'Sharing and keeping',
        body: [
          'Host: this site is served from Azure Static Web Apps and/or GitHub Pages. Form posts go to our API, which stores a copy in a private folder or opens a private GitHub issue for the company mailbox. Cloud providers act as data processors.',
          'We keep enquiry records for up to 24 months unless a longer legal or tax record is required, then delete or anonymise them.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You may withdraw consent, ask for a copy, ask for correction, or ask for erasure of your personal data, subject to law. Write to Dinymeo@gmail.com. You may also complain to the Data Protection Board of India once the Board is accepting complaints.',
          'Do not send patient health records or prescriptions through this form.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of use',
    sections: [
      {
        heading: 'Using the site',
        body: [
          'By browsing this website you agree to these terms and to the disclaimer. The site is for business information about Dinymeo Lifesciences Pvt. Ltd.',
          'You may not scrape the site in a way that harms service, copy the logo or text for another pharma brand, or present our pages as medical advice.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'The Dinymeo name, the golden-ratio mark, and the site design are used with the owner’s permission. The packaged logo font “Mont Heavy DEMO” is a demo font and is not used on this website; the live wordmark uses the open Montserrat family.',
          'You may link to us. You may not hotlink files in a way that misrepresents the company.',
        ],
      },
      {
        heading: 'Enquiries are not contracts',
        body: [
          'A quote request is an invitation to talk. No manufacturing obligation exists until a written purchase order or agreement is signed, including quality, licence, and pharmacovigilance terms as applicable.',
        ],
      },
      {
        heading: 'Governing law',
        body: [
          'These terms are governed by the laws of India. Courts at Pune, Maharashtra have jurisdiction, without limiting any non-excludable rights you have as a consumer or business under Indian law.',
        ],
      },
    ],
  },
};

const hi: Record<'disclaimer' | 'privacy' | 'terms', LegalDoc> = {
  disclaimer: {
    title: 'अस्वीकरण',
    sections: [
      {
        heading: 'यह वेबसाइट किसके लिए है',
        body: [
          'यह वेबसाइट डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड, पुणे, द्वारा फार्मा मार्केटिंग कंपनियों, लाइसेंसधारी व्यापारियों और व्यापारिक साझेदारों के लिए प्रकाशित है। यह ऑनलाइन फार्मेसी नहीं है, और आम जनता को दवा, प्रिस्क्रिप्शन या इलाज नहीं देती।',
          'यहाँ कुछ भी चिकित्सा सलाह नहीं है। मरीज पंजीकृत चिकित्सक से बात करें। इस साइट के आधार पर कोई दवा शुरू, बंद या न बदलें।',
        ],
      },
      {
        heading: 'गुणवत्ता और प्रमाण',
        body: [
          'WHO-GMP, GLP और ISO उन निर्माण इकाइयों के बारे में हैं जिनके साथ हम काम करते हैं। प्रमाणपत्र उन्हीं इकाइयों के हैं। योग्य साझेदार माँग पर प्रतिलिपि देख सकते हैं, वर्तमान स्थिति जाँचने के बाद।',
          'जब तक किसी उत्पाद और प्लांट के नाम पर प्रमाणपत्र फाइल पर न हो, इस भाषा को हमारी आपूर्ति की मंशा समझें — इस पेज पर लाइसेंस नंबर न मानें।',
          'हम “सबसे बड़े” या इकलौते निर्माता होने का दावा नहीं करते। इस साइट पर कर्मचारी संख्या, टर्नओवर या उत्पाद गिनती गढ़कर नहीं लिखी गई है।',
        ],
      },
      {
        heading: 'दवा संबंधी कानून (भारत)',
        body: [
          'भारत में दवा के प्रचार पर औषधि और प्रसाधन सामग्री अधिनियम 1940, आपत्तिजनक विज्ञापन अधिनियम 1954, UCPMP 2024, और CDSCO / फार्मास्युटिकल्स विभाग के मार्गदर्शन लागू होते हैं।',
          'यह साइट किसी खास प्रिस्क्रिप्शन दवा, डोज या इलाज का विज्ञापन नहीं करती। थेरेपी नाम (जैसे हृदय या एंटीबायोटिक) लाइसेंसधारी पार्टनर के लिए निर्माण क्षमता बताते हैं।',
          'कोई डॉक्टर टेस्टिमोनियल, सेलिब्रिटी समर्थन, या चमत्कारी दावा नहीं है।',
        ],
      },
      {
        heading: 'सटीकता',
        body: [
          'हम जानकारी ताज़ा रखने की कोशिश करते हैं। रेंज, पैक और संपर्क बदल सकते हैं। अनुबंध के लिए लिखित पुष्टि माँगें।',
          'साइट जैसी है वैसी दी गई है। जहाँ भारतीय कानून अनुमति देता है, केवल इस साइट के आधार पर लिए गए निर्णयों के लिए डिनिमियो जिम्मेदार नहीं है।',
        ],
      },
    ],
  },
  privacy: {
    title: 'गोपनीयता सूचना',
    sections: [
      {
        heading: 'हम कौन हैं',
        body: [
          'डिनिमियो लाइफसाइंसेस प्राइवेट लिमिटेड, फ्लैट 1004, स्मृति गार्डन, पंधारे वस्ती, पुनावले, पीसीएमसी, पुणे 411033, पूछताछ डेटा के उपयोग का निर्णय लेती है (डिजिटल पर्सनल डेटा प्रोटेक्शन अधिनियम, 2023 के तहत डेटा फिड्यूशरी)।',
          'संपर्क: Dinymeo@gmail.com / +91 7775000425।',
        ],
      },
      {
        heading: 'हम क्या इकट्ठा करते हैं',
        body: [
          'फॉर्म भेजने पर: नाम, ईमेल, फोन, कंपनी, संदेश, भाषा, और समय। कॉल, व्हाट्सऐप या ईमेल पर उस माध्यम के अपने रिकॉर्ड भी रहते हैं।',
          'इस संस्करण में विज्ञापन कुकीज़ या तीसरे पक्ष का एनालिटिक्स नहीं है। भाषा पसंद ब्राउज़र में रखी जा सकती है। इसे साफ किया जा सकता है।',
        ],
      },
      {
        heading: 'क्यों इस्तेमाल',
        body: [
          'पूछताछ का जवाब देने, निर्माण अनुरोध समझने, और छोटा व्यापार रिकॉर्ड रखने के लिए। आधार: आपकी सहमति, और अनुबंध से पहले आपके अनुरोध पर कदम।',
          'हम व्यक्तिगत डेटा नहीं बेचते। सार्वजनिक दवा विज्ञापन के लिए नहीं इस्तेमाल करते।',
        ],
      },
      {
        heading: 'साझा करना और रखना',
        body: [
          'साइट Azure Static Web Apps और/या GitHub Pages से चलती है। फॉर्म हमारी API पर जाता है, जो निजी फोल्डर में कॉपी रखती है या कंपनी के लिए निजी GitHub इश्यू खोलती है।',
          'पूछताछ रिकॉर्ड सामान्यतः 24 महीने तक, फिर मिटा या अनाम। कानून या कर के लिए अधिक समय लग सकता है।',
        ],
      },
      {
        heading: 'आपके अधिकार',
        body: [
          'सहमति वापस ले सकते हैं, प्रतिलिपि, सुधार, या मिटाने की माँग कर सकते हैं — कानून के अधीन। लिखें: Dinymeo@gmail.com। भारत के डेटा संरक्षण बोर्ड में शिकायत भी की जा सकती है, जब बोर्ड शिकायतें ले रहा हो।',
          'इस फॉर्म पर मरीज के स्वास्थ्य रिकॉर्ड या प्रिस्क्रिप्शन न भेजें।',
        ],
      },
    ],
  },
  terms: {
    title: 'उपयोग के नियम',
    sections: [
      {
        heading: 'साइट का उपयोग',
        body: [
          'साइट देखकर आप इन नियमों और अस्वीकरण से सहमत होते हैं। साइट डिनिमियो की व्यापारिक जानकारी के लिए है।',
          'सेवा को नुकसान पहुँचाने वाला स्क्रैपिंग, दूसरे फार्मा ब्रांड के लिए लोगो/पाठ की नकल, या पेजों को चिकित्सा सलाह बताना मना है।',
        ],
      },
      {
        heading: 'बौद्धिक संपदा',
        body: [
          'डिनिमियो नाम, गोल्डन-रेशियो चिह्न, और डिजाइन मालिक की अनुमति से हैं। पैक में मिला “Mont Heavy DEMO” फॉन्ट डेमो है और इस साइट पर नहीं लगा। लाइव वर्डमार्क खुले Montserrat परिवार का है।',
        ],
      },
      {
        heading: 'पूछताछ अनुबंध नहीं',
        body: [
          'कोट माँग बातचीत का निमंत्रण है। लिखित आदेश या समझौते तक निर्माण की बाध्यता नहीं, जिसमें गुणवत्ता, लाइसेंस और फार्माकोविजिलेंस शर्तें शामिल हो सकती हैं।',
        ],
      },
      {
        heading: 'कानून',
        body: [
          'ये नियम भारत के कानून से शासित हैं। पुणे, महाराष्ट्र के न्यायालय क्षेत्राधिकार रखते हैं, भारतीय कानून के अनिवार्य अधिकारों को सीमित किए बिना।',
        ],
      },
    ],
  },
};

const mr: Record<'disclaimer' | 'privacy' | 'terms', LegalDoc> = {
  disclaimer: {
    title: 'अस्वीकरण',
    sections: [
      {
        heading: 'ही वेबसाइट कोणासाठी',
        body: [
          'ही वेबसाइट डिनिमियो लाइफसायन्सेस प्रा. लि., पुणे, फार्मा मार्केटिंग कंपन्या, परवानाधारक व्यापारी आणि व्यावसायिक भागीदारांसाठी प्रकाशित करते. ही ऑनलाइन फार्मसी नाही आणि सामान्य लोकांना औषधे, प्रिस्क्रिप्शन किंवा उपचार देत नाही.',
          'येथे काहीही वैद्यकीय सल्ला नाही. रुग्णाने नोंदणीकृत वैद्यकाशी बोलावे. या साइटवरून औषध सुरू, बंद किंवा बदलू नये.',
        ],
      },
      {
        heading: 'गुणवत्ता आणि प्रमाणपत्रे',
        body: [
          'WHO-GMP, GLP आणि ISO हे त्या उत्पादन केंद्रांबद्दल आहेत ज्यांच्यासोबत आम्ही काम करतो. प्रमाणपत्रे त्या केंद्रांकडे आहेत. पात्र भागीदार विनंतीवर प्रती पाहू शकतात.',
          'एखाद्या उत्पादनाच्या आणि प्लांटच्या नावावर प्रमाणपत्र फाईलवर येईपर्यंत ही भाषा आमच्या पुरवठा मानकाची मंशा समजा — या पानावरील परवाना क्रमांक नव्हे.',
          'आम्ही “सर्वात मोठे” किंवा एकमेव उत्पादक असल्याचा दावा करत नाही. कर्मचारी संख्या, टर्नओव्हर किंवा उत्पादने गृहित धरून लिहिलेली नाहीत.',
        ],
      },
      {
        heading: 'औषध कायदा (भारत)',
        body: [
          'भारतात औषध प्रचारावर Drugs and Cosmetics Act 1940, Drugs and Magic Remedies Act 1954, UCPMP 2024, आणि CDSCO / फार्मास्युटिकल्स विभागाचे मार्गदर्शन लागू होते.',
          'ही साइट विशिष्ट प्रिस्क्रिप्शन औषध, डोज किंवा उपचाराची जाहिरात करत नाही. थेरेपी नावे परवानाधारक भागीदारांसाठी उत्पादन क्षमता दर्शवतात.',
        ],
      },
      {
        heading: 'अचूकता',
        body: [
          'माहिती अद्ययावत ठेवण्याचा प्रयत्न करतो. श्रेणी, पॅक आणि संपर्क बदलू शकतात. करारासाठी लेखी पुष्टी मागा.',
          'साइट जशी आहे तशी दिली आहे. भारतीय कायदा जेथे परवानगी देतो, फक्त या साइटवरून घेतलेल्या निर्णयांसाठी डिनिमियो जबाबदार नाही.',
        ],
      },
    ],
  },
  privacy: {
    title: 'गोपनीयता सूचना',
    sections: [
      {
        heading: 'आम्ही कोण',
        body: [
          'डिनिमियो लाइफसायन्सेस प्रा. लि., फ्लॅट 1004, स्मृती गार्डन, पंधारे वस्ती, पुनावले, पीसीएमसी, पुणे 411033, चौकशी डेटा कशासाठी वापरायचा ते ठरवते (डिजिटल पर्सनल डेटा प्रोटेक्शन अॅक्ट, 2023 अंतर्गत डेटा फिड्युशरी).',
          'संपर्क: Dinymeo@gmail.com / +91 7775000425.',
        ],
      },
      {
        heading: 'आम्ही काय गोळा करतो',
        body: [
          'फॉर्म पाठवल्यास: नाव, ईमेल, फोन, कंपनी, संदेश, भाषा आणि वेळ. कॉल, व्हाट्सअॅप किंवा ईमेल त्या माध्यमाच्या नोंदीतही राहतात.',
          'या आवृत्तीत जाहिरात कुकीज किंवा तृतीय-पक्ष अॅनालिटिक्स नाही. भाषा प्राधान्य ब्राउझरमध्ये राहू शकते.',
        ],
      },
      {
        heading: 'का वापर',
        body: [
          'चौकशीचे उत्तर, उत्पादन विनंती समजून घेणे, आणि छोटी व्यवसाय नोंद. आधार: तुमची संमती, आणि करारापूर्वी तुमच्या विनंतीनुसार पावले.',
        ],
      },
      {
        heading: 'सामायिक आणि ठेवणे',
        body: [
          'साइट Azure Static Web Apps आणि/किंवा GitHub Pages वर चालते. फॉर्म आमच्या API कडे जातो.',
          'चौकशी नोंदी साधारण 24 महिने, नंतर हटवता किंवा अनामित करतात.',
        ],
      },
      {
        heading: 'तुमचे हक्क',
        body: [
          'संमती काढून घेता येते, प्रत, दुरुस्ती किंवा हटवण्याची मागणी करता येते — कायद्याच्या अधीन. लिहा: Dinymeo@gmail.com.',
          'या फॉर्मवर रुग्णाचे आरोग्य रेकॉर्ड किंवा प्रिस्क्रिप्शन पाठवू नका.',
        ],
      },
    ],
  },
  terms: {
    title: 'वापराचे नियम',
    sections: [
      {
        heading: 'साइट वापरणे',
        body: [
          'साइट पाहून तुम्ही हे नियम आणि अस्वीकरण स्वीकारता. साइट डिनिमियोच्या व्यावसायिक माहितीसाठी आहे.',
        ],
      },
      {
        heading: 'बौद्धिक संपदा',
        body: [
          'डिनिमियो नाव, सुवर्ण-गुणोत्तर चिन्ह आणि डिझाइन मालकाच्या परवानगीने. “Mont Heavy DEMO” फॉन्ट डेमो आहे आणि या साइटवर वापरला नाही; लाइव्ह वर्डमार्क खुल्या Montserrat कुटुंबाचा आहे.',
        ],
      },
      {
        heading: 'चौकशी करार नाही',
        body: [
          'कोट विनंती ही संभाषणाची आमंत्रणे आहे. लेखी आदेश किंवा करार होईपर्यंत उत्पादनाची जबाबदारी नाही.',
        ],
      },
      {
        heading: 'कायदा',
        body: [
          'हे नियम भारताच्या कायद्याने शासित. पुणे, महाराष्ट्र न्यायालयांना अधिकारक्षेत्र, भारतीय कायद्यातील अनिवार्य हक्क मर्यादित न करता.',
        ],
      },
    ],
  },
};

const pack = { en, hi, mr } as const;

export function legalDoc(lang: Locale, kind: 'disclaimer' | 'privacy' | 'terms'): LegalDoc {
  return pack[lang][kind];
}
