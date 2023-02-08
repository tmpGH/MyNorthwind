export class SuppliersState {
  CategoryList: SupplierListItem[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: SupplierListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: SupplierDetails;
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
