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
