import { getCategories } from "@/services/category.service"
import { ICategory } from "@/types"
import { useQuery } from "@tanstack/react-query"

export const useCategories = () => {
  return useQuery<ICategory[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  })
}