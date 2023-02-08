export class CustomersState {
  CategoryList: CustomerListItem[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: CustomerListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: CustomerDetails;
}

export class CustomerListItem {
  customerID: string = '';
  companyName: string = '';
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

export class CustomerDetails {
  customerID: string = '';
  companyName: string = '';
  contactName?: string;
  contactTitle?: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  fax?: string;
}
