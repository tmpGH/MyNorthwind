import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextMenuItem, ListContextMenuComponent } from 'src/app/shared/components/list-context-menu/list-context-menu.component';
import { EmployeesService } from '../employees.service';
import { EmployeeListItem } from '../model/employee-list-item';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  items: EmployeeListItem[] = [];
  selectedItem?: EmployeeListItem;  
  pageNumber = 1;
  pageSize = 10;

  @ViewChild('contextMenu') contextmenu!: ListContextMenuComponent;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show employee details',
    action: () => this.showEmployee(),
    disabled: false
  }, {
    text: '',
    disabled: false
  }, {
    text: 'Another action',
    disabled: true
  }];

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
    this.dataService.getEmployeeList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }

  showEmployee() {
    let id = this.selectedItem?.employeeID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }
}
