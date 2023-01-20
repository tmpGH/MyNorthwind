import { Component, OnInit } from '@angular/core';
import { ProductListItem } from '../model/product-list-item';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: ProductListItem[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private dataService: ProductsService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getProductList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
