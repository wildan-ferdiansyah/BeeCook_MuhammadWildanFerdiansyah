"use client";

import { useDeleteMenu } from "@/hooks/use-menus";
import { IMenu } from "@/types";
import { X, Trash2 } from "lucide-react";

interface IDeleteMenuModal {
  menu: IMenu;
  onClose: () => void;
}

export function ConfirmDeleteModal({ menu, onClose }: IDeleteMenuModal) {
  const { mutate, isPending } = useDeleteMenu();

  const handleDelete = () => {
    mutate(menu.id, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-base font-semibold text-gray-900">Hapus Resep</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto">
            <Trash2 size={22} className="text-red-500" />
          </div>
          <p className="text-center text-gray-700 text-sm">
            Yakin ingin menghapus resep{" "}
            <span className="font-semibold text-gray-900">"{menu.name}"</span>?
          </p>
          <p className="text-center text-xs text-gray-400">
            Tindakan ini tidak bisa dibatalkan.
          </p>
        </div>

        <div className="flex gap-3 p-5 border-t">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleDelete}
            disabled={isPending}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 disabled:opacity-50 transition-colors"
          >
            {isPending ? "Menghapus..." : "Hapus"}
          </button>
        </div>
      </div>
    </div>
  );
}
