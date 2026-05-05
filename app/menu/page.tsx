import CategoryFilter from "@/components/ui/category-filter";
import MenuList from "@/components/ui/menu-list";
import PreviewCardTrending from "@/components/ui/preview-card-trending";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Menu",
};
export default function MenuPage() {
  
  return (
    <>
      <div className="w-full overflow-hidden bg-white  overflow-x-hidden md:py-32 py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="w-full max-w-7xl mx-auto">
          <PreviewCardTrending />

          <div className="flex gap-4 flex-nowrap md:overflow-hidden overflow-x-scroll  mt-6">
            <CategoryFilter />
          </div>
          <MenuList />
          
        </div>
      </div>
    </>
  );
}
