import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { CustomerListItem } from '../../data-access/customer-list-item';
import { CustomersService } from '../../data-access/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  items$: Observable<CustomerListItem[]>;
  selectedItem?: CustomerListItem;
  pageNumber = 1;
  pageSize = 10;
  
  @ViewChild('contextMenu') contextmenu!: ListContextMenuComponent;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show customer details',
    action: () => this.showCustomer(),
    disabled: false
  }, {
    text: '',
    disabled: false
  }, {
    text: 'Another action',
    disabled: true
  }];
  
  constructor(private dataService: CustomersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }
  
  onRightClick(event: MouseEvent, item: CustomerListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.items$ = this.dataService.getCustomerList();
  }

  showCustomer() {
    let id = this.selectedItem?.customerID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }  
}
