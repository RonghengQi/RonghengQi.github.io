import photo from "./assets/photo.jpg";
import buildingDamageFigure from "./assets/research/building-damage-xai.png";
import floodRiskFigure from "./assets/research/building-scale-flood-risk.jpg";
import urbanFloodEmsFigure from "./assets/research/urban-flood-ems.jpg";
import yangtzeResilienceFigure from "./assets/research/yangtze-resilience.png";

export const CV_URL = "Rongheng_Qi_CV_Aug2026.pdf";

export const profile = {
  nameEn: "Rongheng Qi",
  nameCn: "齐荣衡",
  role: [
    "MRes Student in Risk and Disaster Reduction,",
    "University College London",
  ],
  location: "London, United Kingdom",
  photo,
  links: [
    { label: "Email", href: "mailto:rongheng.qi.25@ucl.ac.uk" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rongheng-qi-54970a399/",
      newTab: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/RonghengQi",
      newTab: true,
    },
    { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `I am an MRes student in Risk and Disaster Reduction at
   <a href="https://www.ucl.ac.uk/risk-disaster-reduction/">University College London</a>.
   Before joining UCL, I completed a Bachelor of Management Science in Emergency
   Management at <a href="https://en.cug.edu.cn/">China University of Geosciences</a>.`,
  `My research focuses on disaster risk reduction, emergency response,
   geospatial analysis and GeoAI. I combine remote sensing, GIS, machine
   learning and explainable AI to study urban flooding, post-disaster building
   damage, emergency medical accessibility and urban resilience.`,
  `I am interested in developing interpretable, building-scale evidence that
   supports equitable risk management and emergency planning. You can reach me by
   <a href="mailto:rongheng.qi.25@ucl.ac.uk">email</a>, or read
   <a href="${CV_URL}" target="_blank" rel="noopener noreferrer">my CV here</a>.`,
];

// The following section is retained from the template until real news is supplied.
export const news = [
  {
    date: "Jun 2026",
    text: `Presented preliminary findings from my MRes thesis
           at the 16th UCL RDR Annual Academic Conference.`,
  },
  {
    date: "Nov 2025",
    text: `Presented <strong>Simulating Thin Markets</strong> at the Example
           Workshop on Computational Economics.`,
  },
  {
    date: "Sep 2025",
    text: `Started as an MRes student at UCL.`,
  },
];

export const education = [
  {
    org: "University College London",
    desc: "Master of Research in Risk and Disaster Reduction · Grade: 70.70/100 (Distinction)",
    role: "London, United Kingdom",
    date: "Sep 2025 - Dec 2026 (expected)",
    url: "https://www.ucl.ac.uk/risk-disaster-reduction/",
  },
  {
    org: "China University of Geosciences",
    desc: "Bachelor of Management Science in Emergency Management · Grade: 90.31/100",
    role: "Wuhan, China",
    date: "Sep 2021 - Jun 2025",
    url: "https://en.cug.edu.cn/",
  },
];

// These publication examples are retained from the original template.
export const manuscripts = [
  {
    title:
      "Emergency Medical Service (EMS) Accessibility for Vulnerable Schools Under Urban Pluvial Flooding Scenarios in a Megacity: A Case Study of Wuhan, Central China",
    authors:
      "<strong>Rongheng Qi</strong>, Banxiao Ruan, Zeyu Xie, Jingyi Xu, Shixiang Li, and Wei Mei",
    venue: "<em>International Journal of Health Geographics</em>",
  },
];

// Keep the page renderer compatible with the manuscript section above while
// leaving intentionally removed template sections empty.
export const publications = manuscripts;
export const workingPapers = [];

export const patents = [
  {
    org: "Multifunctional Outdoor Tent",
    desc: "China Utility Model Patent, CN 221990046U",
    role: "Xie, Z., Xu, J., & <strong>Qi, R.</strong>",
    date: "2024",
    links: [
      {
        label: "Patent",
        href: "https://patents.google.com/patent/CN221990046U/en",
      },
    ],
  },
  {
    org: "Anti-Toppling Base and Road Warning Post",
    desc: "China Utility Model Patent, CN 221919100U",
    role: "Xu, J., Xie, Z., & <strong>Qi, R.</strong>",
    date: "2024",
    links: [
      {
        label: "Patent",
        href: "https://patents.google.com/patent/CN221919100U/en",
      },
    ],
  },
];

export const experience = [
  {
    org: "Building-Scale Flood Risk Assessment",
    desc: "Integrating urban flood susceptibility, building exposure and vulnerability with multi-source remote sensing, urban data and deep learning across more than 120,000 buildings.",
    image: floodRiskFigure,
    imageAlt: "Building-scale flood risk assessment workflow and outputs",
    role: "Master's Dissertation · Adviser: Prof. Saman Ghaffarian · University College London",
    date: "Apr 2026 - Present",
  },
  {
    org: "Explainable Post-Disaster Building Damage Classification",
    desc: "Adapting DeepLabV3+ with a MobileNetV3 backbone on the xBD dataset and comparing Grad-CAM, HiRes-CAM, Integrated Gradients and Attention-Aware Layer-Wise Relevance Propagation.",
    image: buildingDamageFigure,
    imageAlt:
      "Comparison of explainable AI methods for post-disaster building damage classification",
    role: "Research Assistant · Adviser: Prof. Saman Ghaffarian · University College London",
    date: "Mar 2026 - Present",
  },
  {
    org: "Urban Pluvial Flooding and Emergency Medical Accessibility",
    desc: "Developing a stochastic rainfall and hydrological simulation framework and applying a probabilistically enhanced two-step floating catchment area model to 15-minute school-to-hospital accessibility in Wuhan.",
    image: urbanFloodEmsFigure,
    imageAlt:
      "Urban flooding and emergency medical accessibility assessment framework",
    role: "Bachelor's Dissertation · Adviser: Prof. Banxiao Ruan · China University of Geosciences",
    date: "Jun 2024 - Jun 2025",
  },
  {
    org: "Urban Resilience in the Yangtze River Economic Belt",
    desc: "Evaluating socio-ecological resilience in 110 cities using time-varying entropy weighting, inequality decomposition and spatial autocorrelation analysis.",
    image: yangtzeResilienceFigure,
    imageAlt:
      "Urban resilience groups across the Yangtze River Economic Belt in 2013 and 2022",
    role: "Research Assistant · Advisers: Prof. Banxiao Ruan and Prof. Shixiang Li · China University of Geosciences",
    date: "May 2023 - Jan 2025",
  },
  {
    org: "Post-Pandemic Work Resumption Policy Analysis",
    desc: "Structuring and classifying more than 100,000 words of economic, transport and public-health policy documents from seven major Chinese cities.",
    role: "Research Assistant · Advisers: Prof. Pengjun Zhao and Prof. Qiyang Liu · Peking University Shenzhen Graduate School",
    date: "Jul 2022 - Sep 2022",
  },
];

export const workExperience = [
  {
    org: "PIESAT Information Technology Co., Ltd",
    desc: "Conducted multi-hazard risk assessments for four Hubei cities, produced more than 20 standardised zoning maps, and contributed to eight official disaster-governance deliverables.",
    role: "Disaster Analyst Intern · Emergency Management Department · Wuhan, China",
    date: "Dec 2024 - Feb 2025",
  },
  {
    org: "Natural Resources and Planning Bureau of Badong County",
    desc: "Supported active-landslide field investigations using UAV and GPS data, and processed Sentinel-2 and Landsat-8 imagery for vegetation, water and terrain analysis.",
    role: "Geospatial Analyst Intern · Disaster Prevention Department · Enshi, China",
    date: "Jul 2023 - Aug 2023",
  },
];

export const projects = [];

// These award examples are retained from the original template.
export const awards = [
  {
    org: "Best Thesis Poster of RDR Master",
    date: "2026",
  },
  {
    org: "Excellent student Cadre of China University of Geosciences",
    date: "2024",
  },
  {
    org: "Provincial Excellent Team of Summer Social Practice Activities",
    date: "2024",
  },
  {
    org: "Finalist of 2023 International Mathematics Molding Contest for Higher Education",
    date: "2023",
  },
  {
    org: "First Prize of Youth Volunteer Service Project Competition of China University of Geosciences",
    date: "2023",
  },
];

export const teaching = [];

export const skills = [
  {
    org: "Geospatial and Data Tools",
    desc: "Python · ArcGIS Pro · Google Earth Engine · RStudio · SPSS · Overleaf",
  },
  {
    org: "Languages",
    desc: "Mandarin (native) · English (fluent, IELTS 7.0: L 7.0 / R 7.0 / W 6.5 / S 6.5)",
  },
];

export const lastUpdated = "August 2026";
