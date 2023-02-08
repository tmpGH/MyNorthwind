import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../../data-access/employee-details';
import { EmployeesService } from '../../data-access/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  data$: Observable<EmployeeDetails>;

  constructor(private dataService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.data$ = this.dataService.getEmployee(id);
  }
}
