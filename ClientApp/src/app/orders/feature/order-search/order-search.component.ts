import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { atLeastOneRequiredValidator } from 'src/app/shared/validators/atLeastOneRequiredValidator';
import { OrderListItem } from '../../data-access/orders-state';
import { OrdersService } from '../../data-access/orders.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent extends ListComponentBase<OrderListItem> implements OnInit {

  searchForm = new FormGroup({
    ordered: new FormControl<Date>(new Date()),
    required: new FormControl<Date>(new Date()),
    shipped: new FormControl<Date>(new Date())
  }, { validators: atLeastOneRequiredValidator });

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
      ordered: this.searchForm.value.ordered ? this.searchForm.value.ordered.toJSON() : '',
      required: this.searchForm.value.required ? this.searchForm.value.required.toJSON() : '',
      shipped: this.searchForm.value.shipped ? this.searchForm.value.shipped.toJSON() : ''
    });
  }

  // TODO: forme dates
  onDateSelection(date: NgbDate, dataType: string) {
    switch(dataType) {
      case 'ordered':
        this.searchForm.value.ordered = new Date(date.year, date.month-1, date.day);
        break;
      case 'required':
        this.searchForm.value.required = new Date(date.year, date.month-1, date.day);
        break;
      case 'shipped':
        this.searchForm.value.shipped = new Date(date.year, date.month-1, date.day);
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
