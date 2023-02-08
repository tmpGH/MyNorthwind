import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  selectedItem?: ProductListItem;
  pageNumber = 1;
  pageSize = 10;

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
    this.items$ = this.dataService.getProductList();
  }

  showProduct() {
    let id = this.selectedItem?.productID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }
}
