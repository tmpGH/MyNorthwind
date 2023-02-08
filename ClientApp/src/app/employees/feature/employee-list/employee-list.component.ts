import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { EmployeeListItem } from '../../data-access/employees-state';
import { EmployeesService } from '../../data-access/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  items$: Observable<EmployeeListItem[]>;
  pageNumber = 1;
  pageSize = 10;

  selectedItemId?: Number;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show employee details',
    action: () => this.showEmployee(),
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

  constructor(private dataService: EmployeesService, private router: Router, private route: ActivatedRoute) {
    this.items$ = dataService.state$.pipe(
      map(x => x.EmployeeList)
    )
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: EmployeeListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.employeeID;
    this.contextmenu.open(event.clientX, event.clientY);
  }
  
  refreshList() {
    this.dataService.getEmployeeList();
  }

  showEmployee() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }
}
