"use client";
import { useState, useMemo } from "react";
import ProductCard from "@/components/ui/product-card";
import CategoryFilter from "@/components/ui/category-filter";
import { products } from "@/types/products";
import { useTranslations } from "next-intl";

export default function ProductListClient() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState("all");

  const handleDownload = (pdfUrl: string, title: string) => {
    if (!pdfUrl) return;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.click();
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Products count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {t("products.page.showing", { count: filteredProducts.length })}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.productKey}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <ProductCard
              title={product.title}
              description={product.description}
              features={product.features}
              price={product.price}
              image={product.image}
              video={product.video}
              to={product.path}
              onDownload={() => handleDownload(product.pdfUrl, product.title)}
              productKey={product.productKey}
            />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {t("products.page.noResults.title")}
          </h3>
          <p className="text-muted-foreground">
            {t("products.page.noResults.description")}
          </p>
        </div>
      )}
    </div>
  );
}