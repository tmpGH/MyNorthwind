import { Component, OnInit } from '@angular/core';
import { OrderListItem } from '../model/order-list-item';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  items: OrderListItem[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private dataService: OrdersService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getOrderList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
