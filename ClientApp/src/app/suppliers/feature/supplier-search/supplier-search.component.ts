import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { atLeastOneRequiredValidator } from 'src/app/shared/validators/atLeastOneRequiredValidator';
import { SupplierListItem } from '../../data-access/suppliers-state';
import { SuppliersService } from '../../data-access/suppliers.service';

@Component({
  selector: 'app-supplier-search',
  templateUrl: './supplier-search.component.html',
  styleUrls: ['./supplier-search.component.css']
})
export class SupplierSearchComponent extends ListComponentBase<SupplierListItem> implements OnInit {

  searchForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    region: new FormControl(''),
    postalCode: new FormControl(''),
    country: new FormControl('')
  }, { validators: atLeastOneRequiredValidator });

  contextMenuItems: ContextMenuItem[] = [];

  constructor(private dataService: SuppliersService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.SupplierSearchList)
    );    
  }

  ngOnInit(): void {
    this.setContextMenu();
  }
  
  refreshList() {
    this.dataService.getSupplierSearch(this.pageNumber, {
      name: this.searchForm.value.name,
      address: this.searchForm.value.address,
      city: this.searchForm.value.city,
      region: this.searchForm.value.region,
      postalCode: this.searchForm.value.postalCode,
      country: this.searchForm.value.country
    });
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
