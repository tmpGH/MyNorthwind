import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { EmployeeListItem } from '../../data-access/employees-state';
import { EmployeesService } from '../../data-access/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends ListComponentBase<EmployeeListItem> implements OnInit {

  contextMenuItems: ContextMenuItem[] = [];

  constructor(private dataService: EmployeesService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.EmployeeList)
    )
  }

  ngOnInit(): void {
    this.setContextMenu();
    this.refreshList();
  }

  refreshList() {
    this.dataService.getEmployeeList();
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show employee details',
      action: () => this.showItem('employees'),
      disabled: false,
      isSeparator: false
    }, {
      disabled: false,
      isSeparator: true
    }, {
      text: 'Another action',
      disabled: true,
      isSeparator: false
    }];
  }  
}
