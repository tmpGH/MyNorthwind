import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { SupplierListItem } from '../../data-access/supplier-list-item';
import { SuppliersService } from '../../data-access/suppliers.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  items$: Observable<SupplierListItem[]>;
  selectedItem?: SupplierListItem;
  pageNumber = 1;
  pageSize = 10;

  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show supplier details',
    action: () => this.showSupplier(),
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
  
  constructor(private dataService: SuppliersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: SupplierListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.items$ = this.dataService.getSupplierList();
  }

  showSupplier() {
    let id = this.selectedItem?.supplierID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }
}
