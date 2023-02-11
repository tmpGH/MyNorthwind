import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { EmployeeListItem } from '../../data-access/employees-state';
import { EmployeesService } from '../../data-access/employees.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent extends ListComponentBase<EmployeeListItem> implements OnInit {

  lastName: string = '';
  firstName: string = '';
  title: string = '';
  address: string = '';
  city: string = '';
  region: string = '';
  postalCode: string = '';
  country: string = '';
  
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
      lastName: this.lastName,
      firstName: this.firstName,
      title: this.title,
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
      text: 'Show employee details',
      action: () => this.showItem('employees'),
      disabled: false,
      isSeparator: false
    }];
  }  
}
