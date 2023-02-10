import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { OrderListItem } from '../../data-access/orders-state';
import { OrdersService } from '../../data-access/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent extends ListComponentBase<OrderListItem> implements OnInit {

  contextMenuItems: ContextMenuItem[] = [];
    
  constructor(private dataService: OrdersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.OrderList)
    );
  }

  ngOnInit(): void {
    this.setContextMenu();    
    this.refreshList();
  }

  refreshList() {
    this.dataService.getOrderList();
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show order details',
      action: () => this.showItem('orders'),
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
  }  
}
