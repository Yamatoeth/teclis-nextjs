"use client";
import { ArrowRight, MapPin, Clock, Users, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { benefits, openPositions } from '@/types/careers';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Careers = () => {

 const t = useTranslations();
  
  const getTypeColor = (type: string) => {
    return type === 'Full-time' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
  };

  const getLevelColor = (level: string) => {
    const colors = {
      'Junior': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      'Mid-level': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Mid-Senior': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Senior': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      {/* Why Join Teclis */}
      <Section
        subtitle="Why Teclis Scientific"
        title="More than just a job"
        description="At Teclis Scientific, you'll be part of a mission to advance human knowledge and scientific discovery. We offer a unique blend of cutting-edge research, innovative technology, and meaningful impact."
        
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8" >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(`careers.benefits.${index}.title`)}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`careers.benefits.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Company Culture */}
      <Section
        background="gray"
        subtitle="Our Culture"
        title="Innovation, Collaboration, Excellence"
        description="We foster an environment where scientific curiosity thrives, diverse perspectives are valued, and breakthrough innovations are born."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="space-y-6 flex flex-col justify-center h-full">
            <div className="card-premium">
              <h3 className="text-lg font-semibold text-foreground mb-3">Scientific Excellence</h3>
              <p className="text-muted-foreground">
                Our team is driven by a passion for scientific discovery and a commitment to pushing the boundaries of what's possible in interface science research.
              </p>
            </div>
            
            <div className="card-premium">
              <h3 className="text-lg font-semibold text-foreground mb-3">Global Impact</h3>
              <p className="text-muted-foreground">
                Your work will directly contribute to scientific breakthroughs and industrial innovations that benefit researchers and industries worldwide.
              </p>
            </div>
            
            <div className="card-premium">
              <h3 className="text-lg font-semibold text-foreground mb-3">Work Life Balance</h3>
              <p className="text-muted-foreground">
                We believe that great science happens when people are at their best. We support flexible working arrangements and prioritize employee wellbeing.
              </p>
            </div>
          </div>
          
          <div className="aspect-square bg-gradient-subtle rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10">
              <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-linear-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                <Users size={48} className="text-white" />
              </div>
            </div>
            <Image
              src="/images/career.png"
              alt="Team Culture"
              fill
              className="rounded-xl object-contain p-4"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Open Positions
      <Section
        subtitle="Open Positions"
        title="Join Our Growing Team"
        description="Explore exciting opportunities to make a meaningful impact in the world of scientific instrumentation."
      >
        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div key={index} className="card-premium">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-primary border-primary">
                      {position.department}
                    </Badge>
                    <Badge className={getTypeColor(position.type)}>
                      {position.type}
                    </Badge>
                    <Badge className={getLevelColor(position.level)}>
                      {position.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {position.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin size={16} className="mr-1" />
                    {position.location}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:ml-8 flex flex-col gap-2">
                  <Button className="group">
                    Apply Now
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
{/*         
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see the perfect role? We're always interested in hearing from talented individuals.
          </p>
          <Button variant="outline" size="lg">
            Submit General Application
          </Button>
        </div>
      </Section> */}

      {/* Perks & Benefits */}
      {/* <Section
        background="gradient"
        subtitle="Perks & Benefits"
        title="We Take Care of Our Team"
        description="Comprehensive benefits package designed to support your personal and professional success."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="card-premium text-center">
            <h3 className="font-semibold text-foreground mb-2">Competitive Compensation</h3>
            <p className="text-sm text-muted-foreground">Market-leading salaries with performance bonuses and equity options</p>
          </div>
          
          <div className="card-premium text-center">
            <h3 className="font-semibold text-foreground mb-2">Health Coverage</h3>
            <p className="text-sm text-muted-foreground">Premium health, dental, and vision insurance for you and your family</p>
          </div>
          
          <div className="card-premium text-center">
            <h3 className="font-semibold text-foreground mb-2">Flexible Time Off</h3>
            <p className="text-sm text-muted-foreground">Generous PTO policy with flexible working arrangements</p>
          </div>
          
          <div className="card-premium text-center">
            <h3 className="font-semibold text-foreground mb-2">Learning & Development</h3>
            <p className="text-sm text-muted-foreground">Conference attendance, training programs, and educational reimbursement</p>
          </div>
          
          <div className="card-premium text-center">
            <h3 className="font-semibold text-foreground mb-2">Innovation Time</h3>
            <p className="text-sm text-muted-foreground">20% time for personal projects and exploring new ideas</p>
          </div>
          
          <div className="card-premium text-center">          
            <h3 className="font-semibold text-foreground mb-2">Global Opportunities</h3>
            <p className="text-sm text-muted-foreground">International collaboration and travel opportunities</p>
          </div>
        </div>
      </Section> */}

      {/* Application Process */}
      <Section
        subtitle="Application Process"
        title="Ready to Join Us ?"
        description="Our hiring process is designed to be thorough yet respectful of your time. Here's what to expect when you apply to Teclis Scientific."
      >       
        <div className="text-center mt-6">
          <Button className="btn-hero">
            Join Us !
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Careers;
