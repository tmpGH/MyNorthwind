import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ShipperListItem } from '../../data-access/shippers-state';
import { ShippersService } from '../../data-access/shippers.service';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent extends ListComponentBase<ShipperListItem> implements OnInit {

  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show shipper details',
    action: () => this.showItem('shippers'),
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
    
  constructor(private dataService: ShippersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.ShipperList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getShipperList();
  }
}
