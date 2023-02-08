export class EmployeesState {
  CategoryList: EmployeeListItem[] = [];
  CategoryListCount: Number = 0;
  CategorySearchList: EmployeeListItem[] = [];
  CategorySearchListCount: Number = 0;
  SelectedCategory: EmployeeDetails;
}

export class EmployeeListItem {
  employeeID: number = 0;
  lastName: string = '';
  firstName: string = '';
  title?: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

export class EmployeeDetails {
  employeeID: number = 0;
  lastName: string = '';
  firstName: string = '';
  title?: string;
  titleOfCourtesy?: string;
  birthDate?: Date;
  hireDate?: Date;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  homePhone?: string;
  extension?: string;
  notes?: string;
}
