import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextMenuItem, ListContextMenuComponent } from 'src/app/shared/components/list-context-menu/list-context-menu.component';
import { ShipperListItem } from '../model/shipper-list-item';
import { ShippersService } from '../shippers.service';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent implements OnInit {

  items: ShipperListItem[] = [];
  selectedItem?: ShipperListItem;
  pageNumber = 1;
  pageSize = 10;

  @ViewChild('contextMenu') contextmenu!: ListContextMenuComponent;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show shipper details',
    action: () => this.showShipper(),
    disabled: false
  }, {
    text: '',
    disabled: false
  }, {
    text: 'Another action',
    disabled: true
  }];
    
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
    this.dataService.getShipperList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }

  showShipper() {
    let id = this.selectedItem?.shipperID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }  
}
