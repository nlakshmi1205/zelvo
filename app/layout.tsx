import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Zelvo — Zero-Broker Apartment Rentals in Bangalore",
    template: "%s | Zelvo",
  },
  description:
    "Discover verified apartments directly from owners in Bangalore. No broker fees. Browse listings in Koramangala, HSR Layout, Indiranagar and more.",
  openGraph: {
    type: "website",
    siteName: "Zelvo",
    title: "Zelvo — Zero-Broker Apartment Rentals in Bangalore",
    description:
      "Browse verified rentals in Bangalore. Connect directly with owners. Zero broker fees.",
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
