let defaultLang = navigator.language || navigator.userLanguage;
defaultLang = defaultLang.split("-")[0];
const supportedLanguages = ["zh", "en"];
if (!supportedLanguages.includes(defaultLang)) {
  defaultLang = "en";
}

const translations = {
  zh: {
    page_title: "首页 | IBYC AI Healthcare Inc.",
    brand_name: "IBYC AI 智能医疗",
    home: "首页",
    about_us: "关于我们",
    intelligent_devices: "智能设备",
    contact_us: "联系我们",
    language: {
      en: "English",
      zh: "中文",
    },
    banner_text: {
      line1: "用科技造福时代",
      line2: "让智能守护生命",
      description:
        "智能医疗将融入每个人的日常生活，成为我们健康守护的无形盾牌。",
    },
    learn_more: "了解更多",
    about_us_content: {
      company_title: "我们是一家专注于研究 AI 智能医疗保健的公司",
      ai_diagnosis: {
        title: "AI助力精准诊断",
        description:
          "运用人工智能、大数据、云计算等现代信息技术，对医疗数据进行深度挖掘与分析，从而实现疾病的预防、诊断、治疗、及康复等全过程的智能化管理。\n" +
          "Ai 技术的引入，极大地提高了医疗诊断的效率和准确性，Ai 系统能够快速识别出异常区域，为医生提供诊断参考，辅助医生进行病理分析、基因测序等工作，为患者制定治疗方案。\n" +
          "远程医疗技术打破了传统医疗的地域限制，使得优质医疗资源可以向偏远地区延伸。患者通过视频通话就能与专家面对面交流，获得专业的建议和治疗方案。",
      },
      remote_healthcare: {
        title: "远程医疗技术突破",
        description:
          "BYC 智能医疗平台通过线上问诊、大数据分析比对和使用智能设备，让用户轻松了解自己的健康状况，及时采取保健及治疗措施，帮助用户改善健康状况。\n" +
          "IBYC 的医生和专家们，将通过远程医疗和 AI 辅助诊断，为用户提供更加高效、精准的医疗服务，让健康触手可及。",
      },
    },
    show_room: "店铺展示",
    intelligent_devices_content: {
      title: "智能设备",
      device1_title: "1. 超波磁通仪",
      device1_description:
        "采用仿生物正弦波磁能技术，经过足底温经驱寒、行气通络、补益元气、润肺泄热、保健养生。能激活自愈能力、消除自由基、活化/修复细胞、促进新陈代谢、改善微循环、修复神经与肌肉组织经脉、穴位，向全身补充正弦波生物磁能，调节人体微循环",
      device2_title: "2. 艾灸熏蒸仪",
      device2_description:
        "采用中医传统保健措施，高温 400 度全面烘烤艾饼，用艾叶产生的艾热刺激人体穴位或特定部位，达到温经散寒、祛湿止痛、拔毒泄热、活血化瘀、改善气血循环、缓解疲劳",
      device3_title: "3. 智能艾灸太空舱",
      device3_description:
        "安神-安定心神，促进睡眠/通络-疏通经络、化淤堵；排毒-调和气血，排毒养颜/补阳-健脾补肾，增强抵抗力；延年-防病治病，延年益寿；星空版石墨烯技术：穿透力强，导热性快，散热均匀，加快血液循坏；远红外线灯：让皮下深层皮肤温度上升，扩张微中管，促进血液循环，消炎镇痛；共振晶片：为细胞补充能量，矫正细胞状态，从而激活修复细胞活性；光子嫩肤：光子美白效果；",
      device4_title: "4.量子检测仪",
      device4_description:
        "基于量子医学和波动医学的理论，通过探测人体的量子值，与大数据库中的标准量子值进行比对，从而判断身体健康状况。无论是人或者其他生物自身都带有微弱的磁场，磁场的产生是由于电子围绕着原子核运动旋转而产生的，并且带有人体和生物的健康或者疾病的信息，通过把这些信息量化之后，就可以对人体的疾病或者健康进行全面的评估。",
      device5_title: "5. AI 数字细胞检测仪",
      device5_description:
        "AI 数字细胞修复仪是基于国际领先的北斗+5G+大数据技术能力，及生命信息学、量子学、细胞学、中医经络学于一体的现代化量子检测和修复设备。利用同频共振的原理， 通过微电磁波、声波来探测人身体器官组织细胞生命分子状态，与数据库正常的频率比对和分析，从而得知现在、过去以及未来 5 年的健康状况。AI 数字细胞分析仪一次性可对人体做全面筛查，包括 8 大系统，256 个脏腑，腺体、细胞、ATP、碱基对、DNA 等，能同时检测出人体 12000 多项指标，包括细胞健康状况，过敏源，微生物，寄生虫以及 96 项人体必须微量元素及矿物质。",
      device6_title: "6. 欧洲医生检测仪",
      device6_description:
        "检测八大健康循环系统： 腺体综合系统 、氧化间质系统、微循环系统、内分泌系统、心脑血管系统、神经介质系统、体质辨识系统、综合代谢系统，可以打印 35 项风险报告",
      device7_title: "7. AI数字细胞修复仪",
      device7_description:
        "可以修复人体八大循环系统，修复原理：利用同频共振原理，获取人体内的不同组织、器官、细胞不停震荡产生的频率（自然频率信息波），和标准频率数据库比对后分析内部器官、修复细胞和组织功能破坏之间存在的密切联系，不同的修复改变了细胞内代谢发生过程，以此激发生物信息场的修复理重建和改变。",
    },
    footer: {
      quick_links: "快速链接",
      contact_us: "联系我们",
      address_line1: "1245-4380 No.3 Rd Richmond, BC",
      address_line2: "V6Y 2C2",
      copyright: "© 2024 IBYC AI Healthcare Inc. 版权所有。",
    },
  },
  en: {
    page_title: "Home | IBYC AI Healthcare Inc.",
    brand_name: "IBYC AI Healthcare Inc.",
    home: "Home",
    about_us: "About Us",
    intelligent_devices: "Intelligent Devices",
    contact_us: "Contact Us",
    language: {
      zh: "Chinese",
      en: "English",
    },
    banner_text: {
      line1: "To leverage technology for the benefit of society",
      line2: "Protect lives through intelligent solutions",
      description:
        "Smart healthcare will become an integral part of everyone’s daily life, serving as an invisible shield safeguarding our health.",
    },
    learn_more: "Learn More",
    about_us_content: {
      company_title:
        "We are a company dedicated to advancing AI-driven smart healthcare.",
      ai_diagnosis: {
        title: "AI-Assisted Accurate Diagnosis",
        description:
          "By leveraging modern information technologies such as artificial intelligence, big data," +
          "and cloud computing, we perform in-depth analysis and mining of medical data to enable intelligent management throughout the entire healthcare process," +
          "including disease prevention, diagnosis, treatment, and rehabilitation." +
          "\n" +
          "The integration of AI technology has significantly improved the efficiency and accuracy of medical diagnostics. " +
          "AI systems can quickly identify abnormalities, provide diagnostic insights for doctors, " +
          "and assist doctors in tasks like pathological analysis and genetic sequencing, " +
          "ultimately helping doctors develop personalized treatment plans for patients." +
          "\n" +
          "Telemedicine technology has broken traditional geographical barriers in healthcare," +
          "extending access to high-quality medical resources to remote areas." +
          "Patients can communicate with experts face-to-face through video calls and get professional advice and treatment plans from the comfort of their homes." +
          "",
      },
      remote_healthcare: {
        title: "Breakthroughs in Remote Healthcare Technology",
        description:
          "Remote healthcare technology breaks the geographical limitations of traditional " +
          "medicine, enabling high-quality medical resources to reach remote areas. Patients can " +
          "communicate face-to-face with experts through video calls, receiving professional advice " +
          "and treatment plans.\n" +
          "\n" +
          "The IBYC smart healthcare platform empowers users to easily understand their health status through online consultations, " +
          "big data comparisons, and smart devices." +
          "It provides timely insights and recommendations for preventive care and treatment," +
          "helping users improve their health." +
          "\n" +
          "IBYC's doctors and experts will provide users with more efficient and accurate medical services through telemedicine and AI-assisted diagnosis," +
          "making quality healthcare accessible to everyone.",
      },
    },
    show_room: "Show Room",
    intelligent_devices_content: {
      title: "Smart Devices",
      device1_title: "1. Ultrasonic Magnetic Flux Device",
      device1_description:
        "Utilizing biomimetic sinusoidal wave magnetic energy technology, the device works through foot reflexology to dispel cold, improve energy flow, enhance vitality, and promote overall wellness. It activates the body's self-healing abilities, eliminates free radicals, revitalizes and repairs cells, boosts metabolism, improves microcirculation, and restores neural and muscular tissue pathways. By supplementing the body with sinusoidal bio-magnetic energy, it effectively regulates the body's microcirculatory system.",
      device2_title: "2. Moxibustion Device",
      device2_description:
        "Incorporating traditional Chinese healthcare techniques, the device uses high-temperature moxibustion (up to 400°C) to thoroughly heat moxa cakes. The moxa heat stimulates specific acupoints or targeted areas of the body, providing benefits such as warming meridians, expelling cold and dampness, relieving pain, detoxifying, improving blood circulation, and alleviating fatigue.",
      device3_title: "3. Intelligent Moxibustion Spacecraft",
      device3_description:
        "Calming: promotes relaxation and better sleep, activates meridian system and unblocks energy channels, dissolves clots. Detoxification: harmonizes Qi and blood, detoxifies, improves skin health and yang tonifying, strengthens the spleen and kidneys, enhances immunity. Longevity: prevents and cures diseases, and promotes longevity. Starlight graphene technology: promotes strong penetration, fast thermal conduction, and uniform heat distribution, accelerating blood circulation. Far infrared lamp: raises the temperature of the deep subcutaneous skin, expands the micro-medium vessels, promotes blood circulation, and offers anti-inflammatory and pain-relief benefits. Resonance chip: replenishes energy for cells, corrects cellular status, and activates and repairs cytoactive. Photon skin therapy: enhances skin brightness and whitening effects with photonic care.",
      device4_title: "4. Quantum Diagnostic Device",
      device4_description:
        "The device leverages theories from quantum medicine and wave medicine to evaluate health by measuring the body's quantum values and comparing them to standard values in a large database. All living beings generate faint magnetic fields, which result from the movement and spin of electrons around the nucleus. These magnetic fields carry information about health or illness. By quantifying these data, the device provides a comprehensive assessment of the body’s health conditions.",
      device5_title: "5. AI Digital Cell Analyzer",
      device5_description:
        "Combining cutting-edge BeiDou satellite technology, 5G, and big data technologies with principles from bioinformatics, quantum science, cytology, and traditional Chinese medicine meridian science, this advanced quantum diagnostic and repair device uses frequency resonance to evaluate health conditions. Through micro-electromagnetic and sound waves, it examines the state of cells, tissues, and organs, comparing them against a database of standard frequencies to assess current, past, and even future health over the next five years. The analyzer can perform a comprehensive health screening in one session, covering 8 major systems, 256 internal organs, glands, cells, ATP, base pairs, and DNA, etc.. It can simultaneously detect over 12,000 health metrics, including cell health status, allergens, microorganisms, parasites, and 96 trace elements and minerals that are essential for the human body.",
      device6_title: "6. European Medical Diagnostic Device",
      device6_description:
        "The device specializes in assessing eight key health circulatory systems: glandular system, oxidative interstitial system, microcirculatory system, endocrine system, cardiovascular system, neurotransmitter system, constitution identification system, comprehensive metabolic system. It can generate 35 risk assessment reports.",
      device7_title: "7. AI Digital Cell Repair Device",
      device7_description:
        "The device repairs the body's eight major circulatory systems by utilizing frequency resonance principles. It captures the natural frequency waves generated by the constant vibration of different tissues, organs, and cells within the body. By comparing these frequencies with a standard frequency database, it analyzes the close relationship between the internal organs, cellular repairs, and functional disruptions of damaged organs. Different repairs change the intracellular metabolic process, thereby stimulating the repair, reconstruction, and improvement of the bio-information field.",
    },
    footer: {
      quick_links: "Quick Links",
      contact_us: "Contact Us",
      address_line1: "1245-4380 No.3 Rd Richmond, BC",
      address_line2: "V6Y 2C2",
      copyright: "© 2024 IBYC AI Healthcare Inc. All Rights Reserved.",
    },
  },
};

function changeLanguage(lang) {
  const langData = translations[lang];
  if (!langData) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const keys = key.split(".");
    let text = langData;
    keys.forEach((k) => {
      text = text[k];
    });

    if (text) {
      el.textContent = text;
    }
  });

  document.getElementById("navbarDropdown").textContent =
    lang === "zh" ? "中文" : "English";

  const bannerLines = document.querySelectorAll(".banner-section h1");
  if (lang === "en") {
    bannerLines.forEach((line) => {
      line.style.fontSize = "1.8rem";
      line.style.lineHeight = "1.5";
    });
  } else {
    bannerLines.forEach((line) => {
      line.style.fontSize = "3rem";
      line.style.lineHeight = "1.5";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const browserLang = navigator.language.split("-")[0];
  const defaultLang =
    browserLang === "zh" || browserLang === "en" ? browserLang : "zh";
  changeLanguage(defaultLang);
});
