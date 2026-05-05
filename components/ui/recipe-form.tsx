"use client";

import { useCategories } from "@/hooks/use-categories";
import { useCreateMenu, useUpdateMenu } from "@/hooks/use-menus";
import { CreateMenuPayload, IMenu } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Trash2, Loader2 } from "lucide-react";

interface RecipeFormProps {
  mode: "create" | "edit";
  initialData?: IMenu & {
    ingredients?: { id?: number; description: string }[];
    recipes?: { id?: number; description: string; sort_number: string }[];
    nutritions?: {
      id?: number;
      calory: string;
      protein: string;
      carbohydrate: string;
      fat: string;
    };
  };
}

const emptyForm = {
  name: "",
  description: "",
  cooking_duration: "",
  category_id: "",
  ingredients: [{ description: "" }],
  recipes: [{ description: "", sort_number: "1" }],
};

export default function RecipeForm({ mode, initialData }: RecipeFormProps) {
  const router = useRouter();
  const { data: categories } = useCategories();
  const { mutate: createMenu, isPending: isCreating } = useCreateMenu();
  const { mutate: updateMenu, isPending: isUpdating } = useUpdateMenu();
  const isPending = isCreating || isUpdating;

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setForm({
        name: initialData.name ?? "",
        description: initialData.description ?? "",
        cooking_duration: String(initialData.cooking_duration ?? ""),
        category_id: String(initialData.category_id ?? ""),
        ingredients: initialData.ingredients?.length
          ? initialData.ingredients.map((i) => ({ description: i.description }))
          : [{ description: "" }],
        recipes: initialData.recipes?.length
          ? [...initialData.recipes]
              .sort((a, b) => Number(a.sort_number) - Number(b.sort_number))
              .map((r) => ({
                description: r.description,
                sort_number: String(r.sort_number),
              }))
          : [{ description: "", sort_number: "1" }],
      });
    }
  }, [mode, initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const addIngredient = () =>
    setForm({
      ...form,
      ingredients: [...form.ingredients, { description: "" }],
    });
  const changeIngredient = (i: number, v: string) => {
    const items = [...form.ingredients];
    items[i].description = v;
    setForm({ ...form, ingredients: items });
  };
  const removeIngredient = (i: number) =>
    setForm({
      ...form,
      ingredients: form.ingredients.filter((_, idx) => idx !== i),
    });

  const addRecipe = () =>
    setForm({
      ...form,
      recipes: [
        ...form.recipes,
        {
          description: "",
          sort_number: String(form.recipes.length + 1),
        },
      ],
    });

  const changeRecipe = (i: number, v: string) => {
    const items = [...form.recipes];
    items[i].description = v;
    setForm({ ...form, recipes: items });
  };
  const removeRecipe = (i: number) => {
    const filtered = form.recipes
      .filter((_, idx) => idx !== i)
      .map((item, idx) => ({
        ...item,
        sort_number: String(idx + 1),
      }));

    setForm({ ...form, recipes: filtered });
  };

  const handleSubmit = () => {
    const payload: CreateMenuPayload = {
      name: form.name,
      description: form.description,

      cooking_duration: String(form.cooking_duration),
      category_id: String(form.category_id),

      ingredients: form.ingredients.filter((i) => i.description.trim()),

      recipes: form.recipes
        .filter((r) => r.description.trim())
        .map((r, index) => ({
          description: r.description,
          sort_number: String(index + 1),
        })),

      nutritions: {
        calory: "90",
        protein: "80",
        carbohydrate: "90",
        fat: "90",
      },
    };

    console.log("PAYLOAD:", JSON.stringify(payload, null, 2));

    if (mode === "create") {
      createMenu(payload, {
        onSuccess: () => router.push("/manage-recipe"),
      });
    } else if (mode === "edit" && initialData) {
      updateMenu(
        { id: initialData.id, payload },
        { onSuccess: () => router.push("/manage-recipe") },
      );
    }
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg text-black px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-amber-400 transition-colors bg-white";

  return (
    <div className="w-full overflow-hidden bg-white  overflow-x-hidden md:py-32 py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto  px-4 md:px-0 space-y-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold text-black">
            {mode === "create" ? "Buat Resep Baru" : "Edit Resep"}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <h2 className="text-base font-bold text-black mb-6">
            Informasi Utama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1.5">
                  Nama Resep
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama Resep"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1.5">
                  Kategori
                </label>
                <div className="relative">
                  <select
                    name="category_id"
                    value={form.category_id}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none pr-8`}
                  >
                    <option value="">Kategori</option>
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                    ▾
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1.5">
                  Durasi Masak
                </label>
                <input
                  name="cooking_duration"
                  type="number"
                  value={form.cooking_duration}
                  onChange={handleChange}
                  placeholder="60"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-medium text-black mb-1.5">
                Deskripsi
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Isi deskripsi singkat tentang makanan"
                className={`${inputClass} flex-1 min-h-45 resize-none`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-black">Bahan - Bahan</h2>
              <button
                onClick={addIngredient}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-lg transition-colors border-2 border-gray-200"
              >
                Tambah Bahan
              </button>
            </div>
            <div className="space-y-2.5">
              {form.ingredients.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    value={item.description}
                    onChange={(e) => changeIngredient(i, e.target.value)}
                    placeholder={`Bahan ${i + 1}`}
                    className={inputClass}
                  />
                  {form.ingredients.length > 1 && (
                    <button
                      onClick={() => removeIngredient(i)}
                      className="shrink-0 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-black">
                Instruksi Masak
              </h2>
              <button
                onClick={addRecipe}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-lg transition-colors border-2 border-gray-200"
              >
                Tambah Instruksi
              </button>
            </div>
            <div className="space-y-2.5">
              {form.recipes.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    value={item.description}
                    onChange={(e) => changeRecipe(i, e.target.value)}
                    placeholder={`Instruksi ${i + 1}`}
                    className={inputClass}
                  />
                  {form.recipes.length > 1 && (
                    <button
                      onClick={() => removeRecipe(i)}
                      className="shrink-0 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pb-8">
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="flex items-center gap-2 px-8 py-2.5 text-xs font-semibold bg-primary text-white rounded-md disabled:opacity-50 transition-colors"
          >
            {isPending && <Loader2 size={14} className="animate-spin" />}
            {isPending
              ? "Menyimpan..."
              : mode === "create"
                ? "Simpan Resep"
                : "Update Resep"}
          </button>
        </div>
      </div>
    </div>
  );
}
