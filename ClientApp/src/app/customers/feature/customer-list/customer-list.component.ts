import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { CustomerListItem } from '../../data-access/customers-state';
import { CustomersService } from '../../data-access/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends ListComponentBase<CustomerListItem> implements OnInit {

  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show customer details',
    action: () => this.showItem('customers'),
    disabled: false,
    isSeparator: false

  }, {
    disabled: false,
    isSeparator: true
  }, {
    text: 'Another action',
    disabled: true,
    isSeparator: false
  }];
  
  constructor(private dataService: CustomersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.CustomerList)
    )
  }

  ngOnInit(): void {
    this.refreshList();
  }
  
  refreshList() {
    this.dataService.getCustomerList();
  }
}
