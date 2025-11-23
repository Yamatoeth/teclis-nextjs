"use client";
import { Search, Filter, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import ProductCard from '@/components/ui/product-card';
import { Badge } from '@/components/ui/badge';
import { categories, products } from '@/types/products';

const Products = () => {
  

  return (
    <Layout>
      {/* Products Section */}
      <Section>
        

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
              price={product.price}
              image={product.image}
              video={product.video}
              to={product.path}
              onDownload={() => console.log('Download PDF for', product.title)}
            />
          ))}
        </div>

        
      </Section>

      {/* Features Overview */}
      <Section
        background="muted"
        subtitle="Why Choose Teclis"
        title="Advanced Technology Features"
        description="Our instruments incorporate cutting-edge technology and innovative design to deliver unparalleled precision and reliability."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Real-Time Analysis</h3>
            <p className="text-muted-foreground">
              Immediate results with advanced real-time measurement capabilities and instant data visualization.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Precision Control</h3>
            <p className="text-muted-foreground">
              Unmatched accuracy with automated systems and precise environmental control capabilities.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Advanced Software</h3>
            <p className="text-muted-foreground">
              Comprehensive analysis software with automated reporting and data management tools.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        subtitle="Need Help Choosing?"
        title="Let Our Experts Guide You"
        description="Our technical team can help you select the perfect instrument for your specific research needs and applications."
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero">
              Schedule Consultation
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Products;
