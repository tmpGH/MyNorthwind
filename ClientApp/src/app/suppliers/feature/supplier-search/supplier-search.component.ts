import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { SupplierListItem } from '../../data-access/suppliers-state';
import { SuppliersService } from '../../data-access/suppliers.service';

@Component({
  selector: 'app-supplier-search',
  templateUrl: './supplier-search.component.html',
  styleUrls: ['./supplier-search.component.css']
})
export class SupplierSearchComponent extends ListComponentBase<SupplierListItem> implements OnInit {

  name: string = '';
  address: string = '';
  city: string = '';
  region: string = '';
  postalCode: string = '';
  country: string = '';

  contextMenuItems: ContextMenuItem[] = [];

  constructor(private dataService: SuppliersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.SupplierSearchList)
    );    
  }

  ngOnInit(): void {
  }
  
  refreshList() {
    this.dataService.getSupplierSearch(this.pageNumber, {
      name: this.name,
      address: this.address,
      city: this.city,
      region: this.region,
      postalCode: this.postalCode,
      country: this.country
    });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show supplier details',
      action: () => this.showItem('suppliers'),
      disabled: false,
      isSeparator: false
    }];
  }    
}
