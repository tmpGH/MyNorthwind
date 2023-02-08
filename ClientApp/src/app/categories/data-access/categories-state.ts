export class CategoriesState {
  CategoryList: CategoryListItem[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: CategoryListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: CategoryDetails;
}

export class CategoryDetails {
  categoryID: number = 0;
  categoryName: string = '';
  description?: string;
}

export class CategoryListItem {
  categoryID: number = 0;
  categoryName: string = '';
  description?: string;
}