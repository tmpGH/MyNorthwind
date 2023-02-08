import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { EmployeeListItem } from '../../data-access/employee-list-item';
import { EmployeesService } from '../../data-access/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  items$: Observable<EmployeeListItem[]>;
  selectedItem?: EmployeeListItem;  
  pageNumber = 1;
  pageSize = 10;

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

  constructor(private dataService: EmployeesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: EmployeeListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }
  
  refreshList() {
    this.items$ = this.dataService.getEmployeeList();
  }

  showEmployee() {
    let id = this.selectedItem?.employeeID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }
}
