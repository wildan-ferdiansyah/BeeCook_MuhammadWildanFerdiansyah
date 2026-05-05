"use client";
import { useMenus } from "@/hooks/use-menus";
import { useSearchParams } from "next/navigation";
import MenuSkeleton from "./menu-skeleton";
import MenuCard from "./menu-card";
import Pagination from "./pagination";

export default function MenuList() {
  const params = useSearchParams();

  const page = Number(params.get("page") ?? 1);
  const category_id = params.get("category_id");

  const { data, isLoading } = useMenus({
    page,
    limit: 15,
    search: "",
    category_id,
  });

  return (
    <>
      <div className="mt-12 grid md:grid-cols-3 grid-cols-1 gap-y-12   w-full">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <MenuSkeleton key={i} />)
          : data?.menus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
      </div>

      <Pagination
        currentPage={data?.currentPage ?? 1}
        totalPage={data?.totalPages ?? 1}
      />
    </>
  );
}
