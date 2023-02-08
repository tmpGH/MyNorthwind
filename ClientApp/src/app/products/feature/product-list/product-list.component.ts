import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { ProductListItem } from '../../data-access/products-state';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items$: Observable<ProductListItem[]>;
  pageNumber = 1;
  pageSize = 10;

  selectedItemId?: Number;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show product details',
    action: () => this.showProduct(),
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
  
  constructor(private dataService: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.items$ = dataService.state$.pipe(
      map(x => x.ProductList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: ProductListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.productID;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.dataService.getProductList();
  }

  showProduct() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }
}
