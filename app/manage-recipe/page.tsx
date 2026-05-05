import RecipeTable from "@/components/ui/recipe-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kelola Resep",
};
export default function ManageRecipePage() {
  return (
    <>
      <div className="w-full overflow-hidden bg-white  overflow-x-hidden md:py-32 py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-black font-bold text-3xl">Kelola Resep</h1>

          <RecipeTable />
        </div>
      </div>
    </>
  );
}
