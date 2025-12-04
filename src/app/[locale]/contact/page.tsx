"use client";
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare, Users, Headphones } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from "next-intl";


const Contact = () => {
 const t = useTranslations();

  const contactMethods = [
    {
      icon: Phone,
      title: t("contact.methods.phone.title"),
      description: t("contact.methods.phone.description"),
      details: '+33 4 74 70 18 51',
      availability: t("contact.methods.phone.availability")
    },
    {
      icon: Mail,
      title: t("contact.methods.email.title"),
      description: t("contact.methods.email.description"),
      details: "contact@teclis-scientific.com",
      availability: t("contact.methods.email.availability")
    },
  ];

  const offices = [
    {
      title: "Teclis Head Office & Laboratory",
      address: "22 ch. des prés secs\n69380 Civrieux d’Azergues, France",
      phone: "+33 4 74 70 18 51",
      email: "contact@teclis-scientific.com",
      hours: "Monday - Friday: 9:00 - 18:00"
    }
  ];

  return (
    <Layout>
      {/* Contact Methods */}
      <Section
        subtitle={t("contact.methods.subtitle") || "How Can We Help?"}
        title={t("contact.methods.title") || "Multiple Ways to Reach Us"}
        description={t("contact.methods.description") || "Choose the contact method that works best for you. Our team is standing by to provide expert assistance."}
      >
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="card-premium flex items-center p-6 gap-4">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-primary to-accent flex items-center justify-center shrink-0">
                <method.icon size={28} className="text-white" />
              </div>

              <div className="flex-1 justify-items-center">
                <h3 className="text-lg font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{method.details}</p>
                  <p className="text-xs text-muted-foreground">{method.availability}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Local Partners Links Section */}
      <Section
        title={t("contact.partners.title")}
        description={t("contact.partners.description")}
      >
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="https://www.teclisamerica.com/" target="_blank" rel="noopener noreferrer">
            <div className="card-premium p-4 text-center hover:shadow-lg transition-shadow duration-300">
              {t("contact.partners.teclis_usa")}
            </div>
          </a>
          <a href="https://dafratec.com/" target="_blank" rel="noopener noreferrer">
            <div className="card-premium p-4 text-center hover:shadow-lg transition-shadow duration-300">
              {t("contact.partners.brazil")}
            </div>
          </a>
          <a href="http://www.edcc.com.cn/" target="_blank" rel="noopener noreferrer">
            <div className="card-premium p-4 text-center hover:shadow-lg transition-shadow duration-300">
              {t("contact.partners.china")}
            </div>
          </a>
          <a href="https://www.sanyo-trading.co.jp/" target="_blank" rel="noopener noreferrer">
            <div className="card-premium p-4 text-center hover:shadow-lg transition-shadow duration-300">
              {t("contact.partners.japan")}
            </div>
          </a>
          <a href="http://www.leanontech.co.kr/html/surf_tracker.html" target="_blank" rel="noopener noreferrer">
            <div className="card-premium p-4 text-center hover:shadow-lg transition-shadow duration-300">
              {t("contact.partners.south_korea")}
            </div>
          </a>
          <a href="http://www.genscience.com.my/index.php/suppliers" target="_blank" rel="noopener noreferrer">
            <div className="card-premium p-4 text-center hover:shadow-lg transition-shadow duration-300">
              {t("contact.partners.malaysia")}
            </div>
          </a>
          <a href="https://www.qitech.it/strumentazione/" target="_blank" rel="noopener noreferrer">
            <div className="card-premium p-4 text-center hover:shadow-lg transition-shadow duration-300">
              {t("contact.partners.italia")}
            </div>
          </a>
          <a href="https://adaptive-instruments.com/products/teclis-instruments/" target="_blank" rel="noopener noreferrer">
            <div className="card-premium p-4 text-center hover:shadow-lg transition-shadow duration-300">
              {t("contact.partners.uk")}
            </div>
          </a>
        </div>
      </Section>

      {/* Contact Form */}
      <Section
        background="muted"
        title={t("contact.form.subtitle")}
        description={t("contact.form.description")}
      >
        <div className="max-w-2xl mx-auto mt-6">
          <form
            action="https://formspree.io/f/xqarbkqb"
            method="POST"
            className="card-premium space-y-6"
          >
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.company")}
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="University of Science"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.phone")}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inquiry_type" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.inquiryType")}
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("contact.form.selectInquiryType")}
                  </option>
                  <option value="product">{t("contact.form.inquiryOptions.product")}</option>
                  <option value="quote">{t("contact.form.inquiryOptions.quote")}</option>
                  <option value="demo">{t("contact.form.inquiryOptions.demo")}</option>
                  <option value="support">{t("contact.form.inquiryOptions.support")}</option>
                  <option value="partnership">{t("contact.form.inquiryOptions.partnership")}</option>
                  <option value="other">{t("contact.form.inquiryOptions.other")}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder={t("contact.form.placeholderSubject")}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t("contact.form.message")}
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={t("contact.form.placeholderMessage")}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="submit" 
                className="btn-hero flex-1"
              >
                {t("contact.form.submitButton")}
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              {t("contact.form.disclaimer")}
            </p>
          </form>
        </div>
      </Section>

      {/* Office Locations
      <Section
        subtitle="Our Locations"
        title="Global Offices"
        description="Find us around the world. Our international presence ensures local support and expertise wherever you are."
      >
        <div className="flex justify-center">
          {offices.map((office, index) => (
            <div key={index} className="card-premium">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {office.title}
                </h3>
                <MapPin size={20} className="text-primary shrink-0" />
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Phone size={14} className="mr-2 text-muted-foreground" />
                  <span className="text-foreground">{office.phone}</span>
                </div>
                
                <div className="flex items-center">
                  <Mail size={14} className="mr-2 text-muted-foreground" />
                  <span className="text-foreground">{office.email}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock size={14} className="mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{office.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <Section>
        <div className="mt-8">
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.8407998533094!2d4.697092476277505!3d45.85448540731376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f48dcdc1ed8227%3A0x590a497e97ed2aaf!2sTeclis%20Scientific!5e0!3m2!1sfr!2s!4v1763183820311!5m2!1sfr!2s"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        background="gradient"
        subtitle={t("contact.faq.subtitle")}
        title={t("contact.faq.title")}
        description={t("contact.faq.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card-premium">
              <h3 className="font-semibold text-foreground mb-2">{t("contact.faq.q1")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.faq.a1")}
              </p>
            </div>
            
            <div className="card-premium">
              <h3 className="font-semibold text-foreground mb-2">{t("contact.faq.q2")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.faq.a2")}
              </p>
            </div>
            
            <div className="card-premium">
              <h3 className="font-semibold text-foreground mb-2">{t("contact.faq.q3")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.faq.a3")}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-premium">
              <h3 className="font-semibold text-foreground mb-2">{t("contact.faq.q4")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.faq.a4")}
              </p>
            </div>
            
            <div className="card-premium">
              <h3 className="font-semibold text-foreground mb-2">{t("contact.faq.q5")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.faq.a5")}
              </p>
            </div>
            
            <div className="card-premium">
              <h3 className="font-semibold text-foreground mb-2">{t("contact.faq.q6")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.faq.a6")}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
