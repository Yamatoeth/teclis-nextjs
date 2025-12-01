"use client";
import { ArrowRight, Clock, Tag, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { articles } from '@/types/news'
import { useTranslations } from "next-intl";


const News = () => {
  const t = useTranslations();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'newsletter', name: 'Newsletters' },
    { id: 'events', name: 'Events' },
    { id: 'company', name: 'Company Info' },
    { id: 'scientific_papers', name: 'Scientific Papers' },
    {id: 'application_notes', name: 'Applications Notes' }
  ];
  

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
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
    const colors = {
      product: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      research: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      events: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      company: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      {/* News Section */}
      <Section>
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <article key={index} className="card-premium group cursor-pointer">
              <div className="rounded-xl overflow-hidden mb-6 h-60">
                {article.media && article.media !== "a remplir" ? (
                  article.media.endsWith('.mp4') ? (
                    <video
                      src={article.media}
                      controls
                      width="720"
                      height="405"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={article.media}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <img
                    src="/images/LogoTeclis.png"
                    alt="Default Logo"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge
                    className={getCategoryColor(article.category)}
                    variant="secondary"
                  >
                    {categories.find((c) => c.id === article.category)?.name}
                  </Badge>
                  <span>•</span>
                  <span>{formatDate(article.date)}</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock size={14} className="mr-1" />
                    {article.readTime}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-hover group/btn"
                    onClick={() => setPdfUrl(article.pdfurl)}
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

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              No articles found matching your criteria.
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Newsletter Signup */}
      <Section
        background="muted"
        subtitle="Stay Connected"
        title="Never Miss an Update"
        description="Subscribe to our newsletter for the latest news, product updates, and scientific insights delivered to your inbox."
      >
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input placeholder="Enter your email address" className="flex-1" />
            <Button className="btn-hero">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>
    {pdfUrl && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 h-5/6 rounded-lg overflow-hidden relative">
          <button
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-xl"
            onClick={() => setPdfUrl(null)}
          >
            ×
          </button>
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title="Article PDF"
          />
          <div className="absolute bottom-4 right-4">
            <Button onClick={() => setPdfUrl(null)} variant="outline" size="sm">
              Quit PDF
            </Button>
          </div>
        </div>
      </div>
    )}
    </Layout>
  );
};

export default News;
