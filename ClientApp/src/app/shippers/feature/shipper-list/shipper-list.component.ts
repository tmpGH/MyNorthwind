import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  selectedItem?: ShipperListItem;
  pageNumber = 1;
  pageSize = 10;

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
    
  constructor(private dataService: ShippersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: ShipperListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }
  
  refreshList() {
    this.items$ = this.dataService.getShipperList();
  }

  showShipper() {
    let id = this.selectedItem?.shipperID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }  
}
