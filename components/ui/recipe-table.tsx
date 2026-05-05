"use client";
import { useMenus } from "@/hooks/use-menus";
import { IMenu } from "@/types";
import { ImageIcon, Loader2, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadImageModal } from "../modal/upload-image";

export default function RecipeTable() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [uploadTarget, setUploadTarget] = useState<IMenu | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<IMenu | null>(null);

  const { data, isLoading } = useMenus({ page, limit: 15 });
  const menus = data?.menus ?? [];
  return (
    <div className="space-y-8 mt-8">
      <button
        className="bg-primary text-white rounded-lg px-8 py-3 text-sm font-semibold"
        onClick={() => router.push("/manage-recipe/create")}
      >
        Tambah Resep
      </button>

      <table className="md:table-fixed table-auto w-full text-left">
        <thead className="text-gray-500 text-sm font-medium border-b border-gray-300">
          <tr>
            <td className="py-2">Nama Resep</td>
            <td className="py-2 md:table-cell hidden">Kategori</td>
            <td className="py-2 md:table-cell hidden">File ID</td>
            <td className="py-2">Action</td>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6} className="px-4 py-12 text-center text-gray-400">
                <Loader2 className="animate-spin mx-auto mb-2" size={24} />
                <p className="text-sm">Memuat data...</p>
              </td>
            </tr>
          ) : menus.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="px-4 py-12 text-center text-gray-400 text-sm"
              >
                Belum ada resep
              </td>
            </tr>
          ) : (
            menus.map((menu) => (
              <tr
                key={menu.id}
                className="hover:bg-gray-50 transition-colors border-b border-gray-300"
              >
                <td className="py-2">
                  <p className="font-semibold text-[#1F2937] text-sm">
                    {menu.name}
                  </p>
                </td>
                <td className="py-2 hidden md:table-cell text-[#1F2937] text-sm font-semibold">
                  {menu.category.name}
                </td>

                <td className="py-2 hidden lg:table-cell text-[#1F2937] text-sm font-semibold">
                  {menu.file_id || "-"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-start gap-2">
                    <button
                      onClick={() => setDeleteTarget(menu)}
                      className="text-[#EF4444] text-sm font-semibold"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        router.push(`/manage-recipe/edit/${menu.id}`)
                      }
                      className="text-[#2563EB] text-sm font-semibold"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => setUploadTarget(menu)}
                      className="text-[#14B8A6] text-sm font-semibold"
                    >
                      {" "}
                      Gambar{" "}
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {uploadTarget && (
        <UploadImageModal
          menuId={uploadTarget.id}
          onClose={() => setUploadTarget(null)}
        />
      )}
    </div>
  );
}
