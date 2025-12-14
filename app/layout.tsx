import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scorpion Junk Removal | Bakersfield, CA | 7 AM - 7 PM Daily",
  description: "Professional junk removal service in Bakersfield, CA. Fast, affordable, and eco-friendly junk hauling. Text photos for instant quotes! Call (661) 444-7965.",
  keywords: "junk removal, Bakersfield, Oildale, California, hauling, trash removal, furniture removal, appliance removal, yard waste, demolition, dumpster rental",
  openGraph: {
    title: "Scorpion Junk Removal | Bakersfield, CA",
    description: "Junk Gone. Space Reclaimed. Bakersfield's premium junk removal service.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
