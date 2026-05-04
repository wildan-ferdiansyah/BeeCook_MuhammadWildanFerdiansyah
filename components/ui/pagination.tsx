"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  currentPage: number;
  totalPage: number;
}

export default function Pagination({ currentPage, totalPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    router.push(`?${params.toString()}`);
  };

  const generatePages = () => {
    const pages: (number | "...")[] = [];

    if (totalPage <= 7) {
      for (let i = 1; i <= totalPage; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPage - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPage - 2) pages.push("...");

      pages.push(totalPage);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        className="disabled:opacity-40 text-black text-sm"
      >
        « Previous
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={i}
            onClick={() => changePage(p)}
            className={`px-4 py-2 rounded-full ${
              p === currentPage ? "bg-gray-200 text-black text-sm" : "text-black text-sm hover:bg-gray-200 transition-all"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        disabled={currentPage === totalPage}
        onClick={() => changePage(currentPage + 1)}
        className="text-black text-sm disabled:opacity-40"
      >
        Next »
      </button>
    </div>
  );
}
