"use client";
import  ProductCard  from '@/components/ui/product-card';
import { products } from '@/types/products';

export default function ProductListClient() {
  
  const handleDownload = (pdfUrl: string, title: string) => {
    if (!pdfUrl) return;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.click();
  };

  return (
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
          onDownload={() => handleDownload(product.pdfUrl, product.title)}
          productKey={product.productKey}
        />
      ))}
    </div>
  );
}