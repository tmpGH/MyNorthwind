import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextMenuItem } from 'src/app/shared/components/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/components/list-context-menu/list-context-menu.component';
import { CustomersService } from '../customers.service';
import { CustomerListItem } from '../model/customer-list-item';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  items: CustomerListItem[] = [];
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
    this.dataService.getCustomerList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }

  showCustomer() {
    let id = this.selectedItem?.customerID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }  
}
