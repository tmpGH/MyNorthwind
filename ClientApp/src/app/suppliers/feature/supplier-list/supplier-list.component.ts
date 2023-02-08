import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { SupplierListItem, SuppliersState } from '../../data-access/suppliers-state';
import { SuppliersService } from '../../data-access/suppliers.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  items$: Observable<SupplierListItem[]>;
  pageNumber = 1;
  pageSize = 10;

  selectedItemId?: Number;
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
  
  constructor(private dataService: SuppliersService, private router: Router, private route: ActivatedRoute) {
    this.items$ = dataService.state$.pipe(
      map(x => x.SupplierList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: SupplierListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.supplierID;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.dataService.getSupplierList();
  }

  showSupplier() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }
}
