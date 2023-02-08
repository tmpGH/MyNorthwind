export class ShippersState {
  ShipperList: ShipperListItem[] = [];
  ShipperListCount: Number = 0;
  ShipperSearchList: ShipperListItem[] = [];
  ShipperSearchListCount: Number = 0;
  SelectedShipper: ShipperDetails | undefined;
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
