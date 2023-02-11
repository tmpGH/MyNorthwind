import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { CustomerListItem } from '../../data-access/customers-state';
import { CustomersService } from '../../data-access/customers.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent extends ListComponentBase<CustomerListItem> implements OnInit {

  customerName: string = '';
  address: string = '';
  city: string = '';
  region: string = '';
  postalCode: string = '';
  country: string = '';

  contextMenuItems: ContextMenuItem[] = [];

  constructor(private dataService: CustomersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.CustomerSearchList)
    );    
  }

  refreshList() {
    this.dataService.getCustomerSearch(this.pageNumber, {
      name: this.customerName,
      address: this.address,
      city: this.city,
      region: this.region,
      postalCode: this.postalCode,
      country: this.country
    });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.setContextMenu();
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show customer details',
      action: () => this.showItem('customers'),
      disabled: false,
      isSeparator: false
    }];
  }  
}
