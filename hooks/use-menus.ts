import { getMenus, IMenuParams } from "@/services/menu.service";
import { MenuResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useMenus = (params: IMenuParams) => {
  return useQuery<MenuResponse>({
    queryKey: ["menus", params.category_id, params.page],
    queryFn: () => getMenus(params),
  });
};
