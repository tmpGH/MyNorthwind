import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { CustomerListItem } from '../model/customer-list-item';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  items: CustomerListItem[] = [];
  pageNumber = 1;
  pageSize = 10;
  
  constructor(private dataService: CustomersService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getCustomerList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
