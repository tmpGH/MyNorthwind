import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../../data-access/customers-state';
import { CustomersService } from '../../data-access/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  data$: Observable<CustomerDetails>;

  constructor(private dataService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.data$ = this.dataService.getCustomer(id);
  }
}
