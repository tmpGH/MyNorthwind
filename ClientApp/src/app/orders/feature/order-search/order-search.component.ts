import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
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

  ordered: Date;
  required: Date;
  shipped: Date;

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
      ordered: this.ordered ? this.ordered.toJSON() : '',
      required: this.required ? this.required.toJSON() : '',
      shipped: this.shipped ? this.shipped.toJSON() : ''
    });
  }

	onDateSelection(date: NgbDate, dataType: string) {
    switch(dataType) {
      case 'ordered':
        this.ordered = new Date(date.year, date.month-1, date.day);
        break;
        case 'required':
          this.required = new Date(date.year, date.month-1, date.day);
          break;
        case 'shipped':
          this.shipped = new Date(date.year, date.month-1, date.day);
          break;
      }
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
