import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextMenuItem, ListContextMenuComponent } from 'src/app/shared/components/list-context-menu/list-context-menu.component';
import { OrderListItem } from '../model/order-list-item';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  items: OrderListItem[] = [];
  selectedItem?: OrderListItem;
  pageNumber = 1;
  pageSize = 10;

  @ViewChild('contextMenu') contextmenu!: ListContextMenuComponent;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show order details',
    action: () => this.showOrder(),
    disabled: false
  }, {
    text: '',
    disabled: false
  }, {
    text: 'Another action',
    disabled: true
  }];
    
  constructor(private dataService: OrdersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: OrderListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.dataService.getOrderList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }

  showOrder() {
    let id = this.selectedItem?.orderID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }
}
