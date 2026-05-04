import HeroSection from "@/components/sections/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda | BeeCook",
}
export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
