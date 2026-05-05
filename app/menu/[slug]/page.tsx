import MenuDetail from "@/components/ui/menu-detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Menu",
}

export default function MenuDetailPage() {
  
  return (
    <div className="w-full overflow-hidden bg-white  overflow-x-hidden md:py-32 py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <MenuDetail />
      </div>
    </div>
  );
}
