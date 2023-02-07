import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../data-access/customers.service';
import { CustomerDetails } from '../../data-access/customer-details';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  data?: CustomerDetails;

  constructor(private dataService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getCustomer(id).subscribe( value => this.data = value );
  }
}
