import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { OrderListItem } from '../../data-access/orders-state';
import { OrdersService } from '../../data-access/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  items$: Observable<OrderListItem[]>;
  pageNumber = 1;
  pageSize = 10;

  selectedItemId?: Number;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show order details',
    action: () => this.showOrder(),
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
    
  constructor(private dataService: OrdersService, private router: Router, private route: ActivatedRoute) {
    this.items$ = dataService.state$.pipe(
      map(x => x.OrderList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: OrderListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.orderID;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.dataService.getOrderList();
  }

  showOrder() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }
}
