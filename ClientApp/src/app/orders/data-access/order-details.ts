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
