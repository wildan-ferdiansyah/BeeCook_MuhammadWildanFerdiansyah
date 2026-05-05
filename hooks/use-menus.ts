import {
  createMenu,
  getMenuById,
  getMenus,
  IMenuParams,
  updateMenu,
  uploadMenuImage,
} from "@/services/menu.service";
import { MenuResponse } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useMenus = (params: IMenuParams) => {
  return useQuery<MenuResponse>({
    queryKey: ["menus", params.category_id, params.page],
    queryFn: () => getMenus(params),
  });
};

export const useCreateMenu = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createMenu,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["menus"] });
    },
  });
};
export const useMenuById = (id: number) => {
  return useQuery({
    queryKey: ["menu", id],
    queryFn: () => getMenuById(id),
    enabled: !!id,
  });
};

export const useUpdateMenu = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: any) => updateMenu(id, payload),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["menus"] });
    },
  });
};

export const useUploadMenuImage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, file }: any) => uploadMenuImage(id, file),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["menus"] });
    },
  });
};
