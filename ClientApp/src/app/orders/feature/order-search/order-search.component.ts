import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { OrderListItem } from '../../data-access/orders-state';
import { OrdersService } from '../../data-access/orders.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent extends ListComponentBase<OrderListItem> implements OnInit {

  ordered: string = '';
  required: string = '';
  shipped: string = '';

  contextMenuItems: ContextMenuItem[] = [];
  
  constructor(private dataService: OrdersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.OrderSearchList)
    );    
  }

  ngOnInit(): void {
    this.setContextMenu();
  }
  
  refreshList() {
    this.dataService.getOrderSearch(this.pageNumber, {
      ordered: this.ordered,
      required: this.required,
      shipped: this.shipped
    });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show order details',
      action: () => this.showItem('orders'),
      disabled: false,
      isSeparator: false
    }];
  }    
}
