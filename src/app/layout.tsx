import "@/index.css";
import '../../i18n-key-logger';
import Providers from "./providers";


export const metadata = {
  title: "Teclis Scientific - Advanced Interface Science Instruments",
  description: "Leading manufacturer of advanced scientific instruments for interface science, surface tension analysis, and foam characterization.",
  authors: [{ name: "Teclis Scientific" }],
  openGraph: {
    title: "Teclis Scientific - Advanced Interface Science Instruments",
    description: "Leading manufacturer of advanced scientific instruments for interface science, surface tension analysis, and foam characterization.",
    type: "website",
    url: "https://teclis-scientifique.com",
    images: ["https://teclis-scientifique.com"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@TeclisScientifique",
    images: ["https://teclis-scientifique.com"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
