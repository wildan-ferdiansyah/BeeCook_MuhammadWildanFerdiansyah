import { getMenus, IMenuParams } from "@/services/menu.service";
import { useQuery } from "@tanstack/react-query";

export const useMenus = (params: IMenuParams) => {
  return useQuery({
    queryKey: ["menus", params.category_id, params.page],
    queryFn: () => getMenus(params),
  });
};
