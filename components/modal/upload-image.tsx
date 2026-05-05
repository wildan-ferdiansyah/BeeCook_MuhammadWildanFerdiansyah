"use client";

import { useUploadMenuImage } from "@/hooks/use-menus";
import { X, ImageIcon, Images } from "lucide-react";
import { useRef, useState } from "react";

interface IUploadImage {
  menuId: number;
  onClose: () => void;
}
export function UploadImageModal({ menuId, onClose }: IUploadImage) {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate, isPending } = useUploadMenuImage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setFile(e.target.files[0]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files?.length) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleUploadImage = () => {
    if (!file) return;

    mutate(
      { id: menuId, file },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  const previewImage = file ? URL.createObjectURL(file) : null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center  p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Upload Gambar</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div
            className={`border-2 border-dashed  rounded-lg p-8 text-center  ${dragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => inputRef.current?.click()} 
          >
           <div className="flex justify-center">
             <button
              className="flex justify-center mb-4"
            >
              <ImageIcon
                size={48}
                className="text-blue-500"
                strokeWidth={1.5}
              />
            </button>
           </div>
            <p className="text-gray-700 font-medium">
              Drop your files here or{" "}
              <button
                className="text-blue-500 hover:text-blue-600 font-semibold"
                onClick={() => inputRef.current?.click()}
              >
                browse
              </button>
            </p>

            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
            <p className="text-sm text-gray-500 mt-2">Maximum size: 50MB</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-900">Preview</h3>
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="preview"
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <ImageIcon size={48} className="mx-auto mb-2" />
                  <p>No image selected</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 text-black rounded-lg py-2 text-sm font-medium bg-white border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            disabled={!file || isPending}
            onClick={handleUploadImage}
            className="px-6 py-2 text-sm rounded-lg bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-700"
          >
            {isPending ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
