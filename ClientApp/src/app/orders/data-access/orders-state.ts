export class OrdersState {
  CategoryList: OrderListItem[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: OrderListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: OrderDetails;
}

export class OrderListItem {
  orderID: number = 0;
  orderDate?: Date;
  requiredDate?: Date;
  shippedDate?: Date;
}

export class OrderDetails {
  orderID: number = 0;
  orderDate?: Date;
  requiredDate?: Date;
  shippedDate?: Date;
  freight?: number;
  shipName?: string;
  shipAddress?: string;
  shipCity?: string;
  shipRegion?: string;
  shipPostalCode?: string;
  shipCountry?: string;
}
