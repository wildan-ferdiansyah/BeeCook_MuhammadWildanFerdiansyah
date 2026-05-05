export interface IMenu {
  id: number;
  name: string;
  description: string;
  cooking_duration: number;
  slug: string;
  image?: string;
  file_id?: string;
  category_id: number;
  category: {
    name: string;
    slug: string;
  };
  ingredients?: { id?: number; description: string }[];
  recipes?: { id?: number; description: string; sort_number: number }[];
  nutrition?: {
    id?: number;
    calory: number;
    protein: number;
    carbohydrate: number;
    fat: number;
  };
}
 
export interface MenuResponse {
  menus: IMenu[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}
 
export interface ICategory {
  id: number;
  name: string;
  image?: string;
  slug: string;
  file_id?: string;
}
 
export interface IIngredient {
  description: string;
}
 
export interface IRecipeStep {
  description: string;
  sort_number: string;
}
 
export interface INutritions {
  calory: string;
  protein: string;
  carbohydrate: string;
  fat: string;
}
 
export interface CategoryResponse {
  categories: ICategory[];
}
 
export interface CreateMenuPayload {
  name: string;
  description: string;
  cooking_duration: string;
  category_id: string;
  ingredients: IIngredient[];
  recipes: IRecipeStep[];
  nutritions: INutritions;
}