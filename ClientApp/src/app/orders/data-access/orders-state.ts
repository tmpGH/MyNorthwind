export class OrdersState {
  OrderList: OrderListItem[] = [];
  OrderListCount: Number = 0;
  OrderSearchList: OrderListItem[] = [];
  OrderSearchListCount: Number = 0;
  SelectedOrder: OrderDetails | undefined;
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
