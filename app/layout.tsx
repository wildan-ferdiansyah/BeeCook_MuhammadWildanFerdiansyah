import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";
import { QueryProvider } from "@/providers/query-provider";
import Footer from "@/components/layouts/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Beranda",
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
      className={`${inter.variable} ${montSerrat.variable}  h-full antialiased ${inter.className}`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <QueryProvider>{children}</QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
