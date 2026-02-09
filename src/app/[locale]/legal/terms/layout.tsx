import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Teclis Scientific",
  description: "Terms of service for using the Teclis Scientific website. Read our terms and conditions for website usage and our products and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
