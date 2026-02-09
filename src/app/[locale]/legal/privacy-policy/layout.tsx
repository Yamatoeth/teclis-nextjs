import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Teclis Scientific",
  description: "Read Teclis Scientific's privacy policy. Learn how we handle your personal data and protect your privacy when you use our website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
