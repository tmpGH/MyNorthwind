export class CustomersState {
  CustomerList: CustomerListItem[] = [];
  CustomerListCount: Number = 0;
  CustomerSearchList: CustomerListItem[] = [];
  CustomerSearchListCount: Number = 0;
  SelectedCustomer: CustomerDetails | undefined;
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
