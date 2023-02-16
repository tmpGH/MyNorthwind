import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { atLeastOneRequiredValidator } from 'src/app/shared/validators/atLeastOneRequiredValidator';
import { EmployeeListItem } from '../../data-access/employees-state';
import { EmployeesService } from '../../data-access/employees.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent extends ListComponentBase<EmployeeListItem> implements OnInit {

  searchForm = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    title: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    region: new FormControl(''),
    postalCode: new FormControl(''),
    country: new FormControl('')
  }, { validators: atLeastOneRequiredValidator });

  contextMenuItems: ContextMenuItem[] = [];
  
  constructor(private dataService: EmployeesService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.EmployeeSearchList)
    );    
  }

  ngOnInit(): void {
    this.setContextMenu();
  }
  
  refreshList() {
    this.dataService.getEmployeeSearch(this.pageNumber, {
      lastName: this.searchForm.value.lastName,
      firstName: this.searchForm.value.firstName,
      title: this.searchForm.value.title,
      address: this.searchForm.value.address,
      city: this.searchForm.value.city,
      region: this.searchForm.value.region,
      postalCode: this.searchForm.value.postalCode,
      country: this.searchForm.value.country
    });
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show employee details',
      action: () => this.showItem('employees'),
      disabled: false,
      isSeparator: false
    }];
  }  
}
