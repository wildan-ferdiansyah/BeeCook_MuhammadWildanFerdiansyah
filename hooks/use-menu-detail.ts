import { getMenuSlug } from "@/services/menu.service";
import { useQuery } from "@tanstack/react-query";

export const useMenuDetail = (slug: string) => {
  return useQuery({
    queryKey: ["menu-detail", slug],
    queryFn: () => getMenuSlug(slug),
    enabled: !!slug,
  });
};
