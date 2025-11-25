"use client";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { useTranslation } from 'react-i18next';

const services = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Introduction */}
      <Section
        subtitle={t('services.introduction.subtitle')}
        title={t('services.introduction.title')}
        description={t('services.introduction.description')}
      >
        <div className="mt-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {t('services.introduction.paragraph')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <motion.div 
              className="h-48 bg-muted rounded-lg flex items-center justify-center"
              initial={{ opacity:0, x:-50 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true, amount:0.3 }}
              transition={{ duration:0.6, ease:"easeOut" }}
            >
              <span className="text-muted-foreground">{t('services.introduction.image1')}</span>
            </motion.div>
            <motion.div 
              className="h-48 bg-muted rounded-lg flex items-center justify-center"
              initial={{ opacity:0, x:50 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true, amount:0.3 }}
              transition={{ duration:0.6, ease:"easeOut" }}
            >
              <span className="text-muted-foreground">{t('services.introduction.image2')}</span>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Laboratory services */}
      <Section
        background="muted"
        subtitle={t('services.laboratory.subtitle')}
        title={t('services.laboratory.title')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div className="card-premium" initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.3 }} transition={{ duration:0.6, ease:"easeOut" }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('services.laboratory.surface.title')}</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {Array.isArray(t('services.laboratory.surface.items', { returnObjects: true })) &&
                t('services.laboratory.surface.items', { returnObjects: true }).map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          </motion.div>
          <motion.div className="card-premium" initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.3 }} transition={{ duration:0.6, ease:"easeOut" }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('services.laboratory.foam.title')}</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {Array.isArray(t('services.laboratory.foam.items', { returnObjects: true })) &&
                t('services.laboratory.foam.items', { returnObjects: true }).map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          </motion.div>
        </div>
        <div className="mt-6 text-center">
          <Button className="btn-hero" asChild></Button>
        </div>
      </Section>

      {/* Technical services */}
      <Section subtitle={t('services.technical.subtitle')} title={t('services.technical.title')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {Array.isArray(t('services.technical.cards', { returnObjects: true })) &&
            t('services.technical.cards', { returnObjects: true }).map((card: any, idx: number) => (
            <motion.div key={idx} className="card-premium" initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.3 }} transition={{ duration:0.6, ease:"easeOut" }}>
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default services;