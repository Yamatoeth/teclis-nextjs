import { Beaker, Microscope, Zap, Globe, Droplets, Factory, TestTube, Atom } from "lucide-react";

export const industries = [
  {
      key: "foodBeverages",
      icon: Beaker,
      title: "Food & Beverages",
      description: "Quality control and formulation optimization for emulsions, foams, and surface-active ingredients in food production.",
      applications: [
        "Emulsion stability testing",
        "Foam quality in beverages",
        "Surfactant effectiveness",
        "Packaging material compatibility",
        "Oil-water interface analysis"
      ],
      caseStudy: "Helping major beverage companies optimize foam stability in beer production, resulting in 15% improvement in product consistency.",
      color: "from-green-500 to-emerald-600",
      image: "/images/applications/food-beverages.avif",
      link: "/applications/foodbeverages"
    },
    {
      key: "lifeSciences",
      icon: Microscope,
      title: "Life Sciences & Pharmaceuticals",
      description: "Biocompatibility testing, drug delivery systems, and biological interface characterization for pharmaceutical development.",
      applications: [
        "Drug delivery optimization",
        "Biocompatibility assessment",
        "Membrane interface studies",
        "Protein adsorption analysis",
        "Lipid monolayer research"
      ],
      caseStudy: "Supporting pharmaceutical research in developing more effective drug delivery systems with 40% improved bioavailability.",
      color: "from-blue-500 to-cyan-600",
      image: "/images/applications/life-sciences-pharmaceuticals.avif",
      link: "/applications/lifesciences"
    },
    {
      key: "oilGas",
      icon: Zap,
      title: "Oil & Gas",
      description: "Enhanced oil recovery, surfactant evaluation, and pipeline flow optimization studies for energy sector applications.",
      applications: [
        "Enhanced oil recovery (EOR)",
        "Surfactant flooding efficiency",
        "Pipeline flow optimization",
        "Corrosion inhibitor testing",
        "Wettability alteration studies"
      ],
      caseStudy: "Enabling energy companies to increase oil recovery efficiency by 25% through optimized surfactant formulations.",
      color: "from-orange-500 to-red-600",
      image: "/images/applications/oil-gas.avif",
      link: "/applications/oilgas"
    },
    {
      key: "dailyChemicals",
      icon: Globe,
      title: "Daily Chemicals & Cosmetics",
      description: "Formulation optimization, encapsulation technology, and sustainable chemistry for consumer product development.",
      applications: [
        "Cosmetic formulation",
        "Encapsulation technology",
        "Green chemistry solutions",
        "Cleaning product optimization",
        "Environmental protection"
      ],
      caseStudy: "Assisting cosmetics manufacturers in developing eco-friendly formulations with superior performance characteristics.",
      color: "from-pink-500 to-rose-600",
      image: "/images/applications/chemicals-materials.avif",
      link: "/applications/dailychemicals"
    }
  ];

  export const researchAreas = [
    {
      icon: Droplets,
      title: "Surface Tension Research",
      description: "Advanced studies in interfacial phenomena and surface energy characterization.",
      applications: ["Dynamic surface tension", "Critical micelle concentration", "Adsorption kinetics"]
    },
    {
      icon: Factory,
      title: "Industrial Process Control",
      description: "Real-time monitoring and optimization of industrial processes involving interfaces.",
      applications: ["Quality control", "Process optimization", "Batch consistency"]
    },
    {
      icon: TestTube,
      title: "Academic Research",
      description: "Supporting fundamental research in universities and research institutions worldwide.",
      applications: ["PhD research projects", "Publication studies", "Grant applications"]
    },
    {
      icon: Atom,
      title: "Nanotechnology",
      description: "Interface characterization at the nanoscale for advanced materials development.",
      applications: ["Nanoparticle interactions", "Thin film properties", "Quantum dot interfaces"]
    }
  ];
