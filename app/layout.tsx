import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
