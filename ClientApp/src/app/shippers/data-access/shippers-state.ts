export class ShippersState {
  CategoryList: ShipperListItem[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: ShipperListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: ShipperDetails;
}

export class ShipperListItem {
  shipperID: number = 0;
  companyName: string = '';
  phone?: string;
}

export class ShipperDetails {
  shipperID: number = 0;
  companyName: string = '';
  phone?: string;
}
