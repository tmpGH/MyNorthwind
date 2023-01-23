import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextMenuItem, ListContextMenuComponent } from 'src/app/shared/components/list-context-menu/list-context-menu.component';
import { ProductListItem } from '../model/product-list-item';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: ProductListItem[] = [];
  selectedItem?: ProductListItem;
  pageNumber = 1;
  pageSize = 10;

  @ViewChild('contextMenu') contextmenu!: ListContextMenuComponent;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show product details',
    action: () => this.showProduct(),
    disabled: false
  }, {
    text: '',
    disabled: false
  }, {
    text: 'Another action',
    disabled: true
  }];
  
  constructor(private dataService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: ProductListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.dataService.getProductList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }

  showProduct() {
    let id = this.selectedItem?.productID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }
}
