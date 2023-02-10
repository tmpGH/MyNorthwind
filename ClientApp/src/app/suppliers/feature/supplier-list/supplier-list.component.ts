import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { SupplierListItem } from '../../data-access/suppliers-state';
import { SuppliersService } from '../../data-access/suppliers.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent extends ListComponentBase<SupplierListItem> implements OnInit {

  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show supplier details',
    action: () => this.showItem('suppliers'),
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
  
  constructor(private dataService: SuppliersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.SupplierList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getSupplierList();
  }
}
