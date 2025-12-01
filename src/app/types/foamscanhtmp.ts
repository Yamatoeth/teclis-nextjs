import { ArrowLeft, ArrowRight, Download, Mail, CheckCircle, Thermometer, Settings, Zap } from 'lucide-react';


export const foamscanhtmp = {
    
  features: [
    "Mid-pressure measuring tube – up to 120°C / 8 bar",
    "Standard measuring tube – up to 90°C at atmospheric pressure",
    "Gas injection foam generation through porous glass filter",
    "Automatic cleaning after each measurement",
    "100% software control",
    "Advanced image analysis combined with conductivity techniques",
    "Depressurization foam generation capability",
    "HCl solution compatible version available",
  ],
  applications: [
    {
      title: "Enhanced Oil Recovery",
      description:
        "Foam behavior analysis under pressure and temperature conditions relevant to EOR processes.",
    },
    {
      title: "Geothermal Applications",
      description:
        "Study of foam properties in high-temperature environments for geothermal energy extraction.",
    },
    {
      title: "Chemical Processing",
      description:
        "Foam characterization for chemical reactions and processes under controlled temperature and pressure.",
    },
    {
      title: "Industrial Formulation",
      description:
        "Development and optimization of products requiring specific foam properties under pressure conditions.",
    },
  ],
  specifications: [
    { parameter: "Temperature Range", value: "Up to 120°C" },
    { parameter: "Pressure Range", value: "Up to 8 bar (116 psi)" },
    {
      parameter: "Standard Tube Range",
      value: "Up to 90°C at atmospheric pressure",
    },
    {
      parameter: "Foam Generation",
      value: "Gas injection through porous glass filter",
    },
    { parameter: "Control", value: "100% software automated" },
    { parameter: "Cleaning", value: "Automatic programmable cleaning" },
    {
      parameter: "Measurement Start",
      value: "Automatic at set temperature/pressure",
    },
    {
      parameter: "Special Compatibility",
      value: "HCl solution version available",
    },
  ],
  measurements: [
    {
      icon: Thermometer,
      title: "Foam Volume & Capacity",
      description:
        "Precise measurement of foam volume, liquid volume, gas volume, foam wetness, capacity, expansion, and density.",
    },
    {
      icon: Zap,
      title: "Foam Stability",
      description:
        "Track foam volume decay, drainage, half-lifetime metrics, stability index, and defoamer persistence.",
    },
    {
      icon: Settings,
      title: "Advanced Analysis",
      description:
        "Combine image analysis with conductivity techniques for comprehensive foam characterization.",
    },
  ],
};
