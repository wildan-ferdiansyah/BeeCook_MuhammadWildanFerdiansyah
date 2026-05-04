import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BeeCook",
    template: "%s | BeeCook",
  },
  description: "Sebuah resep masakan yang mudah dan lezat untuk semua orang.",
  authors: [{ name: "Muhammad Wildan Ferdiansyah" }],
  creator: "Muhammad Wildan Ferdiansyah",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased ${inter.className}`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
