import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ListHome — Zero-Broker Apartment Rentals",
    template: "%s | ListHome",
  },
  description:
    "Discover verified apartments directly from owners. No broker fees. Browse listings across Mumbai, Bangalore & Hyderabad and connect via WhatsApp.",
  openGraph: {
    type: "website",
    siteName: "ListHome",
    title: "ListHome — Zero-Broker Apartment Rentals",
    description:
      "Browse verified rentals across India. Connect directly with owners. Zero broker fees.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
