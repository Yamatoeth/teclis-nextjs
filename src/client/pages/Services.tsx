"use client";
import { ArrowRight, Microscope, Settings, Users, Award, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { laboratoryServices, technicalServices } from '@/types/services';
import { motion } from "framer-motion";

const Services = () => {

  return (
    <Layout>

      {/* Introduction */}
      <Section
        subtitle="Benefit from TECLIS Scientific Expertise"
        title="Your Partner in Surface & Interface Science"
        description="Take advantage of our 25+ years of industrial and academic experience. Our staff delivers accurate, pertinent, and timely data for any surface/interface project, from single measurements to in-depth studies."
      >
        <div className="mt-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Our Services Platform provides scientific expertise to elaborate proof of concepts, design experiments, and perform measurements and studies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Placeholder containers for images */}
            <motion.div 
              className="h-48 bg-muted rounded-lg flex items-center justify-center"
              initial={{ opacity:0, x:-50 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true, amount:0.3 }}
              transition={{ duration:0.6, ease:"easeOut" }}
            >
              <span className="text-muted-foreground">Image 1</span>
            </motion.div>
            <motion.div 
              className="h-48 bg-muted rounded-lg flex items-center justify-center"
              initial={{ opacity:0, x:50 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true, amount:0.3 }}
              transition={{ duration:0.6, ease:"easeOut" }}
            >
              <span className="text-muted-foreground">Image 2</span>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Laboratory Services */}
      <Section
        background="muted"
        subtitle="Tensiometry & Foam Study Laboratory Services"
        title="Advanced Analytical Capabilities"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            className="card-premium"
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.3 }}
            transition={{ duration:0.6, ease:"easeOut" }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Surface & Interface Measurements</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Surface Tension / Interfacial Tension</li>
              <li>Static & Dynamic Contact Angle</li>
              <li>Adsorption Kinetics</li>
              <li>Interfacial Rheology</li>
              <li>Surface Elasticity / Viscosity</li>
              <li>Coefficient of Rigidity</li>
              <li>Critical Micelle Concentration (CMC)</li>
              <li>Phase Exchange at Constant Volume</li>
              <li>Temperature up to 200°C</li>
              <li>Pressure up to 200 bar</li>
            </ul>
          </motion.div>
          <motion.div 
            className="card-premium"
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.3 }}
            transition={{ duration:0.6, ease:"easeOut" }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Foam Study</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Foamscan™ - Foam Generation by Gas Injection</li>
              <li>Foam Volume & Liquid Volume</li>
              <li>Liquid Fraction (Drainage)</li>
              <li>Foam Density & Stability</li>
              <li>Foamability & Foaming Capacity</li>
              <li>Bubbles Size & Distribution</li>
              <li>Bikerman Index & Expansion Coefficient</li>
              <li>Temperature up to 90°C</li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-6 text-center">  
         
         <Button className="btn-hero" asChild>
          </Button>
        </div>
      </Section>

      {/* Technical Services */}
      <Section
        subtitle="Technical Services"
        title="Installation, Maintenance & Support"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            className="card-premium"
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.3 }}
            transition={{ duration:0.6, ease:"easeOut" }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">Installation & Training</h3>
            <p className="text-muted-foreground leading-relaxed">
              Training for your staff from day one, ensuring maximum efficiency and expert knowledge.
            </p>
          </motion.div>
          <motion.div 
            className="card-premium"
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.3 }}
            transition={{ duration:0.6, ease:"easeOut" }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">Maintenance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Regular service visits to maintain precision, reliability, and optimal instrument performance.
            </p>
          </motion.div>
          <motion.div 
            className="card-premium"
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.3 }}
            transition={{ duration:0.6, ease:"easeOut" }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">Remote Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Direct screen-to-screen assistance whenever technical issues arise.
            </p>
          </motion.div>
          <motion.div 
            className="card-premium"
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.3 }}
            transition={{ duration:0.6, ease:"easeOut" }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">On-Site Service</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fast and flexible response for instrument failures, moves, recommissioning, or staff training.
            </p>
          </motion.div>
        </div>
      </Section>

    </Layout>
  );
};

export default Services;
