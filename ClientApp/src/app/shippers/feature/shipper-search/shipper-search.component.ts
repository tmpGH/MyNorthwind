import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ShipperListItem } from '../../data-access/shippers-state';
import { ShippersService } from '../../data-access/shippers.service';

@Component({
  selector: 'app-shipper-search',
  templateUrl: './shipper-search.component.html',
  styleUrls: ['./shipper-search.component.css']
})
export class ShipperSearchComponent extends ListComponentBase<ShipperListItem> implements OnInit {

  name: string = '';
  phone: string = '';

  contextMenuItems: ContextMenuItem[] = [];
  
  constructor(private dataService: ShippersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.ShipperSearchList)
    );    
  }

  ngOnInit(): void {
    this.setContextMenu();
  }

  refreshList() {
    this.dataService.getShipperSearch(this.pageNumber, { name: this.name, phone: this.phone });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show shipper details',
      action: () => this.showItem('shippers'),
      disabled: false,
      isSeparator: false
    }];
  }   
}
