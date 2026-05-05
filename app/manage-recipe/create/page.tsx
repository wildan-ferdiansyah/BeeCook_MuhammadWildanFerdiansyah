import RecipeForm from "@/components/ui/recipe-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buat Resep",
};
export default function CreateRecipePage() {
  return (
    <>
      <RecipeForm mode="create" />
    </>
  );
}