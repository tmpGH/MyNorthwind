import { Component, OnInit } from '@angular/core';
import { SupplierListItem } from '../model/supplier-list-item';
import { SuppliersService } from '../suppliers.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  items: SupplierListItem[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private dataService: SuppliersService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getSupplierList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
