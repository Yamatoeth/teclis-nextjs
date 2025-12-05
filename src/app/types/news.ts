export interface Article {
  title: string;
  category: string;
  date?: string;
  readTime?: string;
  media?: string;
  excerpt?: string;
  pdfurl?: string;
}

export const articles: Article[] = [
  {
    title: "Newsletter August 2025",
    excerpt:
      "For many researchers, analyzing foams under pressure remains a challenge, often requiring complex and costly laboratory equipment. The FOAMSCAN™ High Temperature–Mid Pressure provides a practical, affordable and science-based solution, enabling foam analysis at temperatures up to 120 °C and pressures up to 8 bar.This newsletter highlights the key features of the FOAMSCAN™ HTMP and the benefits it brings to researchers in enhanced oil recovery (EOR), and carbon capture, utilization, and storage (CCUS) .",
    category: "newsletter",
    date: "2024-08-17",
    readTime: "1 min read",
    media: "",
    pdfurl: "/pdf/TECLIS Newsletter 2025-08.pdf",
  },
  {
    title: "Breakthrough in Foam Stability Research Published in Nature",
    excerpt:
      "Teclis instruments contribute to groundbreaking research on foam stability mechanisms, published in Nature Materials.",
    category: "scientific_papers",
    date: "2024-03-10",
    readTime: "8 min read",
    media: "",
    pdfurl: "",
  },
  {
    title:
      "Teclis Scientific at European Colloid & Interface Society Conference",
    excerpt:
      "Join us at ECIS 2024 in Barcelona where we'll showcase our latest innovations and present cutting-edge research.",
    category: "events",
    date: "2024-03-05",
    readTime: "3 min read",
    media: "",
    pdfurl: "",
  },
  {
    title: "Partnership with Leading Pharmaceutical Company Announced",
    excerpt:
      "Major pharmaceutical company selects Teclis instruments for their global research and development operations.",
    category: "company",
    date: "2024-02-28",
    readTime: "4 min read",
    media: "",
    pdfurl: "",
  },
  {
    title: "New Application Note: Surface Tension in Food Emulsions",
    excerpt:
      "Comprehensive guide to measuring and optimizing surface tension in food emulsion systems for better product stability.",
    category: "scientific_papers",
    date: "2024-02-20",
    readTime: "6 min read",
    media: "",
    pdfurl: "",
    
  },
  {
    title: "FOAMSCAN™ Software Update: Enhanced Analysis Capabilities",
    excerpt:
      "Latest software update includes advanced foam characterization algorithms and improved user interface design.",
    category: "newsletter",
    date: "2024-02-15",
    readTime: "4 min read",
    media: "",
    pdfurl: "",
  },
  {
    title: "Teclis Scientific Wins Innovation Award at Analytica 2024",
    excerpt:
      "Our RHEOSCAN™ Interface Rheometer recognized for outstanding innovation in analytical instrumentation.",
    category: "company",
    date: "2024-02-10",
    readTime: "3 min read",
    media: "",
    pdfurl: "",
  },
  {
    title: "Webinar Series: Advanced Interface Science Techniques",
    excerpt:
      "Join our monthly webinar series featuring expert presentations on cutting-edge interface science applications.",
    category: "events",
    date: "2024-02-01",
    readTime: "2 min read",
    media: "",
    pdfurl: "",
  },
  {
    title:
      "How to measure the interfacial properties of solid oils with TRACKER™",
    excerpt:
      "TRACKER™ enables accurate surface-tension measurements of solidifying oils by heating syringe and needle to maintain liquid state during analysis.",
    category: "application_notes",
    date: "",
    readTime: "5 min",
    media: "",
    pdfurl: "",
  },
  
  {
    title: "Characterizing foams produced by an external device",
    excerpt:
      "FOAMSCAN™ analyzes foam from dispensers by quantifying liquid fraction and bubble-size distribution for hands-disinfectant applications.",
    category: "application_notes",
    date: "2023",
    readTime: "4 min",
    media: "",
    pdfurl: "",
  },
  {
    title: "The influence of experiment settings on foaming capacity",
    excerpt:
      "Gas-flow rate, frit porosity, stirring speed, and liquid volume strongly influence foaming time and wetness in FOAMSCAN™ measurements.",
    category: "application_notes",
    date: "2023",
    readTime: "6min",
    media: "/images/articles-img/2022AN5_impact.avif",
    pdfurl: "",
  },
  {
    title: "Standard error: five reasons you should check the drop profile",
    excerpt:
      "Residual-pattern analysis in TRACKER™ reveals non-Laplacian drops caused by vibrations, bubbles, dust, interfacial films, or moving contours.",
    category: "application_notes",
    date: "2022",
    readTime: "5min",
    media: "/images/articles-img/2022AN4_Standard-error.avif",
    pdfurl: "",
  },
  {
    title: "Interfacial Rheology: A Tool to Probe Interfaces",
    excerpt:
      "Oscillatory deformation reveals interfacial viscoelastic moduli, distinguishing surface-active interfaces from those with true viscoelastic behavior.",
    category: "application_notes",
    date: "2023",
    readTime: "5min",
    media: "",
    pdfurl: "",
  },
  {
    title:
      "Impact of frequency, amplitude and concentration on interfacial viscoelastic modulus",
    excerpt:
      "Frequency, amplitude, and concentration govern interfacial elasticity and viscosity; E* varies with solicitation regime rather than being intrinsic.",
    category: "application_notes",
    date: "2023",
    readTime: "5min",
    media: "",
    pdfurl: "",
  },
  {
    title: "Interfacial rheology: micro and macro illustrations",
    excerpt:
      "Interfacial viscoelasticity links molecular adsorption and macroscopic foam/emulsion stability; higher elasticity improves resistance to coalescence.",
    category: "application_notes",
    date: "2023",
    readTime: "3 min",
    media: "",
    pdfurl: "",
  },
  {
    title: "Dispersity: an indicator to classify the foam dissipation",
    excerpt:
      "Bubble-size dispersity distinguishes coarsening-driven foam decay from coalescence-driven decay in FOAMSCAN™ studies.",
    category: "application_notes",
    date: "2022",
    readTime: "5 min",
    media: "",
    pdfurl: "",
  },
  {
    title:
      "The deposition of a monolayer of phospholipids at the oil–water interface",
    excerpt:
      "Phospholipid monolayers at oil–water interfaces model emulsions and lipid droplets, governed by molecular packing and interfacial dynamics.",
    category: "application_notes",
    date: "2022",
    readTime: "5 min",
    media: "",
    pdfurl: "",
  },
  {
    title: "How to control the surface pressure of an interface",
    excerpt:"Controlled compression/expansion with TRACKER™ adjusts surface pressure, enabling studies of monolayer packing, adsorption, and rheology.",
    category: "application_notes",
    date: "2022",
    readTime: "5 min",
    media: "",
    pdfurl: "",
  },
  {
    title: "How to determine the maximum surface pressure of a molecule",
    excerpt:"Compression–expansion cycles with TRACKER™ determine ΠMAX, identifying the pressure at which molecules desorb from interfaces.",
    category: "application_notes",
    date: "2022",
    readTime: "5 min",
    media: "",
    pdfurl: "",
  },
  {
    title: "How to determine the surface exclusion pressure of a molecule",
    excerpt:"Surface exclusion pressure (Πₑ) quantifies the upper limit allowing molecular insertion into lipid monolayers via adsorption-induced ΔΠ analysis.",
    category: "application_notes",
    date: "2022",
    readTime: "5 min",
    media: "",
    pdfurl: "",
  },
  {
    title: "Using FOAMSCAN to characterize foams produced by any device",
    excerpt: "Discover how to use foamscan based on your needs",
    category: "application_notes",
    date: "2022-11-14",
    readTime: "1 min read",
    media: "",
    pdfurl: "",
  }
];
