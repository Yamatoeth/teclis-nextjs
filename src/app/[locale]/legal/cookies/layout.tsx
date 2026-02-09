import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Teclis Scientific",
  description: "Learn about how Teclis Scientific uses cookies on our website. We only use essential cookies for basic functionality and language preferences.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
