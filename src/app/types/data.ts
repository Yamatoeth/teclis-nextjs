import { Beaker, Microscope, Zap, Globe } from 'lucide-react';

export const products = [
    {
      productKey: "trackerTensiometer",
      title: "TRACKER™ Surface Tensiometer",
      description: "Advanced dynamic surface tension measurement with drop shape analysis technology for precise interface characterization.",
      features: ["Real-time measurements", "Drop shape analysis", "Temperature control"],
      badge: "Most Popular",
      image: "/images/products/Tracker-tensiometer.avif"
    },
    {
      productKey: "foamscan",
      title: "FOAMSCAN™ Foam Analyzer",
      description: "Comprehensive foam stability analysis system for R&D and quality control applications in various industries.",
      features: ["Foam stability tracking", "Automated analysis", "Multi-sample capability"],
      image: "/images/products/foamscan-foam-analyzer.avif"
    },
    {
      productKey: "bubbleStatistics",
      title: "BubbleStatistics™ Software",
      description: "Specialized instrument for measuring interfacial rheological properties at liquid-liquid and liquid-gas interfaces.",
      features: ["Interfacial rheology", "Oscillatory measurements", "Temperature control"],
      image: "/images/products/rheoscan-interface-rheometer.avif"
    }
  ];

export const industries = [
    { key: "foodBeverages", icon: Beaker,},
    { key: "lifeSciences", icon: Microscope,},
    { key: "oilGas", icon: Zap, },
    { key: "dailyChemicals", icon: Globe,}
  ];

export const stats = [
    { value: "25+", label: "Years of Innovation" },
    { value: "10+", label: "Countries Served" },
    { value: "100+", label: "Research Institutions" },
    { value: "95%", label: "Customer Satisfaction" }
  ];

export const partners = [
    { logo: '/images/partners/LOGO1.avif', name: 'BASF' },
    { logo: '/images/partners/LOGO2.avif', name: 'Solvay' },
    { logo: '/images/partners/LOGO3.avif', name: 'Petrobras' },
    { logo: '/images/partners/LOGO4.avif', name: 'LOreal' },
    { logo: '/images/partners/LOGO5.avif', name: 'Thor' },
    { logo: '/images/partners/LOGO6.avif', name: 'CNRS' },
    { logo: '/images/partners/LOGO7.avif', name: 'ENS' },
    { logo: '/images/partners/LOGO8.avif', name: 'SHELL' },
    { logo: '/images/partners/LOGO9.avif', name: 'Petrochina' },
    { logo: '/images/partners/LOGO10.avif', name: 'TOTAL' },
    { logo: '/images/partners/LOGO11.avif', name: 'BlueStar Silicones' },
    { logo: '/images/partners/LOGO12.avif', name: 'Harvard' },
    { logo: '/images/partners/LOGO13.avif', name: 'Colgate PalmoLive' },
    { logo: '/images/partners/LOGO14.avif', name: 'Baker Hughes' },
    { logo: '/images/partners/LOGO15.avif', name: 'Kraft Lafarge' },
    { logo: '/images/partners/LOGO16.avif', name: 'Dow' },
    { logo: '/images/partners/LOGO17.avif', name: 'Henkel' },
    { logo: '/images/partners/LOGO18.avif', name: 'Nalco Champion' },
    { logo: '/images/partners/LOGO19.avif', name: 'Unilever' },
    { logo: '/images/partners/LOGO20.avif', name: 'novo Nordisk' },
    { logo: '/images/partners/LOGO21.avif', name: 'Boston University' },
    { logo: '/images/partners/LOGO22.avif', name: 'Schlumberger' },
  ];
