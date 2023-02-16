import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { atLeastOneRequiredValidator } from 'src/app/shared/validators/atLeastOneRequiredValidator';
import { ProductListItem } from '../../data-access/products-state';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent extends ListComponentBase<ProductListItem> implements OnInit {

  searchForm = new FormGroup({
    name: new FormControl(''),
    unitPrice: new FormControl<Number>(Number.NaN)
  }, { validators: atLeastOneRequiredValidator });

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
    let query = !Number.isNaN(this.searchForm.value.unitPrice)
      ? {
        name: this.searchForm.value.name,
        unitPrice: this.searchForm.value.unitPrice
      }
      : { name: this.searchForm.value.name };

    this.dataService.getProductSearch(this.pageNumber, query);
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
