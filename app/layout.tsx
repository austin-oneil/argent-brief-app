import type { Metadata } from "next";
import {Inter, Source_Serif_4} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-source-serif",
    display: "swap",
});


export const metadata: Metadata = {
  title: "The Argent Brief",
  description: "Sanctions, export controls, and global risk intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
