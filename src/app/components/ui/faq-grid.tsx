"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQGridProps {
  items: FAQItem[];
}

const FAQGrid = ({ items }: FAQGridProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
              openIndex === index
                ? "bg-card border-primary/30 shadow-lg shadow-primary/5"
                : "bg-card/50 border-border/50 hover:border-primary/20 hover:shadow-md"
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {/* Gradient accent line */}
            <div
              className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-accent transition-opacity duration-300 ${
                openIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="p-6">
              {/* Question */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <MessageCircle size={16} />
                  </div>
                  <h3
                    className={`font-semibold text-base leading-snug transition-colors duration-300 ${
                      openIndex === index
                        ? "text-primary"
                        : "text-foreground group-hover:text-primary"
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-96 opacity-100 mt-4"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQGrid;
