import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { ShipperListItem } from '../../data-access/shippers-state';
import { ShippersService } from '../../data-access/shippers.service';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent implements OnInit {

  items$: Observable<ShipperListItem[]>;
  pageNumber = 1;
  pageSize = 10;

  selectedItemId?: Number;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show shipper details',
    action: () => this.showShipper(),
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
    
  constructor(private dataService: ShippersService, private router: Router, private route: ActivatedRoute) {
    this.items$ = dataService.state$.pipe(
      map(x => x.ShipperList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: ShipperListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.shipperID;
    this.contextmenu.open(event.clientX, event.clientY);
  }
  
  refreshList() {
    this.dataService.getShipperList();
  }

  showShipper() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }  
}
