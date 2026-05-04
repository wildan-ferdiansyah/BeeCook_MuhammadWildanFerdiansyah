import CategorySection from "@/components/sections/category-section";
import HeroSection from "@/components/sections/hero-section";
import SubscribeSection from "@/components/sections/subscribe-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda | BeeCook",
}
export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <SubscribeSection />
    </>
  );
}
