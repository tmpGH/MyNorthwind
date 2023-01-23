import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { EmployeeListItem } from '../model/employee-list-item';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  items: EmployeeListItem[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private dataService: EmployeesService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getEmployeeList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
