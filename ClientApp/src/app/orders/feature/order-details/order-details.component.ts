import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from '../../data-access/order-details';
import { OrdersService } from '../../data-access/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  data?: OrderDetails;
  
  constructor(private dataService: OrdersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getOrder(id).subscribe( value => this.data = value );
  }
}
