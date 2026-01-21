"use client";
import { ArrowRight, Clock, Search, ChevronRight, Newspaper, FileText, Calendar, X, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { articles } from '@/types/news'
import { useTranslations } from "next-intl";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";


const News = () => {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [email, setEmail] = useState('');
  const [loadingSubscribe, setLoadingSubscribe] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: t('news.categories.all'), icon: Newspaper },
    { id: 'newsletter', name: t('news.categories.newsletters'), icon: FileText },
    { id: 'events', name: t('news.categories.events'), icon: Calendar },
    { id: 'company', name: t('news.categories.company'), icon: Newspaper },
    { id: 'scientific_papers', name: t('news.categories.scientific'), icon: FileText },
    { id: 'application_notes', name: t('news.categories.applications'), icon: FileText }
  ];
  

  const filteredArticles = articles.filter(article => {
  const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || (article.excerpt ?? "").toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
  return matchesSearch && matchesCategory;
  });

  const regularArticles = filteredArticles;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      newsletter: 'from-blue-600/10 to-cyan-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
      events: 'from-purple-600/10 to-pink-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
      company: 'from-orange-600/10 to-amber-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20',
      scientific_papers: 'from-green-600/10 to-emerald-500/10 text-green-700 dark:text-green-300 border-green-500/20',
      application_notes: 'from-teal-600/10 to-cyan-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20'
    };
    return colors[category] || 'from-gray-600/10 to-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-500/20';
  };

  const truncate = (text: string, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(`${window.location.origin}${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = async () => {
  setSubscribeMessage(null);

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    setSubscribeMessage(t('news.newsletter.invalidEmail'));
    return;
  }

  try {
    setLoadingSubscribe(true);
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (!res.ok) {
      setSubscribeMessage(data?.error || t('news.newsletter.error'));
    } else {
      setSubscribeMessage(t('news.newsletter.success'));
      setEmail('');
    }
  } catch (err) {
    setSubscribeMessage(t('news.newsletter.networkError'));
  } finally {
    setLoadingSubscribe(false);
  }
};

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link
              href={`/${locale}`}
              className="hover:text-foreground transition-colors"
            >
              {t("nav.home")}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{t("nav.news")}</span>
          </nav>

          <div className={`max-w-3xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              {t("news.hero.badge")}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t("news.hero.title")}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t("news.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <Section background="muted">
        {/* Search and Filter */}
        <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder={t("news.search.placeholder")}
                className="pl-12 h-12 rounded-xl border-border/50 bg-background/80 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-linear-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                      : 'bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">
            {t("news.results", { count: filteredArticles.length })}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <article 
              key={index} 
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {article.media && article.media !== "a remplir" ? (
                  article.media.endsWith('.mp4') ? (
                    <video
                      src={article.media}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={article.media}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-primary/30" />
                  </div>
                )}
                
                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-linear-to-r ${getCategoryColor(article.category)} border backdrop-blur-sm`}>
                    {categories.find((c) => c.id === article.category)?.name}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(article.date ?? "")}</span>
                  <span className="mx-1">•</span>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {truncate(article.excerpt ?? '', 120)}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  {/* Share Buttons */}
                  <div className="flex items-center gap-1">
                    <FacebookShareButton url={`${typeof window !== 'undefined' ? window.location.origin : ''}${article.pdfurl}`}>
                      <div className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                        <FacebookIcon size={18} round />
                      </div>
                    </FacebookShareButton>
                    <TwitterShareButton url={`${typeof window !== 'undefined' ? window.location.origin : ''}${article.pdfurl}`} title={article.title}>
                      <div className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                        <TwitterIcon size={18} round />
                      </div>
                    </TwitterShareButton>
                    <LinkedinShareButton url={`${typeof window !== 'undefined' ? window.location.origin : ''}${article.pdfurl}`} title={article.title}>
                      <div className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                        <LinkedinIcon size={18} round />
                      </div>
                    </LinkedinShareButton>
                    <button 
                      onClick={() => handleCopyLink(article.pdfurl ?? '')}
                      className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-muted-foreground" />}
                    </button>
                  </div>

                  {/* Read More */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-hover hover:bg-primary/10 group/btn"
                    onClick={() => setPdfUrl(article.pdfurl ?? null)}
                  >
                    {t('cta.learnMore')}
                    <ArrowRight
                      size={14}
                      className="ml-1 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <Search className="w-10 h-10 text-primary/50" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t("news.empty.title")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("news.empty.description")}
            </p>
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              {t("news.empty.clear")}
            </Button>
          </div>
        )}
      </Section>

      {/* Newsletter Signup */}
      <Section
        background="gradient"
        decorated
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-foreground border border-white/20 mb-6">
            {t("news.newsletter.badge")}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("news.newsletter.title")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {t("news.newsletter.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              placeholder={t("news.newsletter.placeholder")}
              className="flex-1 h-12 rounded-xl bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="h-12 px-6 rounded-xl bg-linear-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              onClick={handleSubscribe}
              disabled={loadingSubscribe}
            >
              {loadingSubscribe ? t("news.newsletter.sending") : t("news.newsletter.subscribe")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {subscribeMessage && (
            <p className={`text-sm mt-4 ${subscribeMessage.includes('success') || subscribeMessage.includes('réussie') ? 'text-green-500' : 'text-red-500'}`}>
              {subscribeMessage}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            {t("news.newsletter.privacy")}
          </p>
        </div>
      </Section>

      {/* PDF Modal */}
      {pdfUrl && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden relative shadow-2xl border border-border/50">
            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-card/95 backdrop-blur-sm border-b border-border/50 flex items-center justify-between px-4 z-10">
              <span className="text-sm font-medium text-foreground">Document Preview</span>
              <button
                className="p-2 rounded-xl hover:bg-secondary/50 transition-colors"
                onClick={() => setPdfUrl(null)}
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* PDF Content */}
            <iframe
              src={pdfUrl}
              className="w-full h-full pt-14"
              title="Article PDF"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default News;
