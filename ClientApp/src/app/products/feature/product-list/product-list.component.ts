import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ProductListItem } from '../../data-access/products-state';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends ListComponentBase<ProductListItem>  implements OnInit {

  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show product details',
    action: () => this.showItem('products'),
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
  
  constructor(private dataService: ProductsService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.ProductList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getProductList();
  }
}
