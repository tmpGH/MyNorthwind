import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ProductListItem } from '../../data-access/products-state';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent extends ListComponentBase<ProductListItem> implements OnInit {

  name: string = '';
  unitPrice: string = '';
  
  contextMenuItems: ContextMenuItem[] = [];
  
  constructor(private dataService: ProductsService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.ProductSearchList)
    );    
  }

  ngOnInit(): void {
    this.setContextMenu();
  }
  
  refreshList() {
    this.dataService.getProductSearch(this.pageNumber, { name: this.name, unitPrice: this.unitPrice });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show product details',
      action: () => this.showItem('products'),
      disabled: false,
      isSeparator: false
    }];
  }   
}
