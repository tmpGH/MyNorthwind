import { Component, OnInit } from '@angular/core';
import { ShipperListItem } from '../model/shipper-list-item';
import { ShippersService } from '../shippers.service';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent implements OnInit {

  items: ShipperListItem[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private dataService: ShippersService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getShipperList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
