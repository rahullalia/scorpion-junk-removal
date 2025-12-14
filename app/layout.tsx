import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scorpion Junk Removal | Bakersfield, CA | 24/7 Service",
  description: "Professional junk removal service in Bakersfield, CA. Open 24 hours. Fast, affordable, and eco-friendly junk hauling. Call (661) 444-7965 for a free quote!",
  keywords: "junk removal, Bakersfield, Oildale, California, hauling, trash removal, furniture removal, appliance removal, yard waste",
  openGraph: {
    title: "Scorpion Junk Removal | Bakersfield, CA",
    description: "Professional 24/7 junk removal service. Fast, affordable, eco-friendly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
