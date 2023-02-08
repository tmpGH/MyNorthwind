import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { CustomerListItem } from '../../data-access/customers-state';
import { CustomersService } from '../../data-access/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  items$: Observable<CustomerListItem[]>;
  pageNumber = 1;
  pageSize = 10;
  
  selectedItemId?: string;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show customer details',
    action: () => this.showCustomer(),
    disabled: false,
    isSeparator: false

  }, {
    disabled: false,
    isSeparator: true
  }, {
    text: 'Another action',
    disabled: false,
    isSeparator: false
  }];
  @ViewChild('contextMenu') contextmenu: ListContextMenuComponent;
  
  constructor(private dataService: CustomersService, private router: Router, private route: ActivatedRoute) {
    this.items$ = dataService.state$.pipe(
      map(x => x.CustomerList)
    )
  }

  ngOnInit(): void {
    this.refreshList();
  }
  
  onRightClick(event: MouseEvent, item: CustomerListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.customerID;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.dataService.getCustomerList();
  }

  showCustomer() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }  
}
