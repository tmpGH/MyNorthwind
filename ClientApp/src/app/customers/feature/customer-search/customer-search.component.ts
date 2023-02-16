import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { atLeastOneRequiredValidator } from 'src/app/shared/validators/atLeastOneRequiredValidator';
import { CustomerListItem } from '../../data-access/customers-state';
import { CustomersService } from '../../data-access/customers.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent extends ListComponentBase<CustomerListItem> implements OnInit {

  searchForm = new FormGroup({
    customerName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    region: new FormControl(''),
    postalCode: new FormControl(''),
    country: new FormControl('')
  }, { validators: atLeastOneRequiredValidator });

  contextMenuItems: ContextMenuItem[] = [];

  constructor(private dataService: CustomersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.CustomerSearchList)
    );    
  }

  ngOnInit(): void {
    this.setContextMenu();
  }

  refreshList() {
    this.dataService.getCustomerSearch(this.pageNumber, {
      name: this.searchForm.value.customerName,
      address: this.searchForm.value.address,
      city: this.searchForm.value.city,
      region: this.searchForm.value.region,
      postalCode: this.searchForm.value.postalCode,
      country: this.searchForm.value.country
    });
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
