export interface IMenu {
  id: number;
  name: string;
  description: string;
  cooking_duration: number;
  slug: string;
  file_id: string;

  category: {
    name: string;
    slug: string;
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

export interface CategoryResponse {
  categories: ICategory[];
}
