export class ProductsState {
  CategoryList: ProductListItem[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: ProductListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: ProductDetails;
}

export class ProductListItem {
  productID: number = 0;
  productName: string = '';
  unitPrice?: number;
}

export class ProductDetails {
  productID: number = 0;
  productName: string = '';
  quantityPerUnit?: string;
  unitPrice?: number;
  unitsInStock?: number;
  unitsOnOrder?: number;
  reorderLevel?: number;
  discontinued?: boolean;
}
