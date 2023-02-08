export class SuppliersState {
  SupplierList: SupplierListItem[] = [];
  SupplierListCount: Number = 0;
  SupplierSearchList: SupplierListItem[] = [];
  SupplierSearchListCount: Number = 0;
  SelectedSupplier: SupplierDetails | undefined;
}

export class SupplierListItem {
  supplierID: number = 0;
  companyName: string = '';
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

export class SupplierDetails {
  supplierID: number = 0;
  companyName: string = '';
  address?: string;
  contactName?: string;
  contactTitle?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  fax?: string;
  homePage?: string;
}
