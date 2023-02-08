export class ProductsState {
  ProductList: ProductListItem[] = [];
  ProductListCount: Number = 0;
  ProductSearchList: ProductListItem[] = [];
  ProductSearchListCount: Number = 0;
  SelectedProduct: ProductDetails | undefined;
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
