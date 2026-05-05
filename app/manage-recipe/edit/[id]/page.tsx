"use client";

import RecipeForm from "@/components/ui/recipe-form";
import { useMenuById } from "@/hooks/use-menus";
import { Loader2 } from "lucide-react";
import { use } from "react";

interface EditRecipePageProps {
  params: Promise<{ id: string }>;
}

export default function EditRecipePage({ params }: EditRecipePageProps) {
  const { id } = use(params);
  const { data: menu, isLoading } = useMenuById(Number(id));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-gray-400">
          <Loader2 className="animate-spin mx-auto mb-2" size={28} />
          <p className="text-sm">Memuat data resep...</p>
        </div>
      </div>
    );
  }

  if (!menu) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-sm text-gray-500">Resep tidak ditemukan.</p>
      </div>
    );
  }

  return <RecipeForm mode="edit" initialData={menu} />;
}
