import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { OrderDetails } from '../../data-access/orders-state';
import { OrdersService } from '../../data-access/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  data$: Observable<OrderDetails | undefined>;
  
  constructor(private dataService: OrdersService, private route: ActivatedRoute) {
    this.data$ = dataService.state$.pipe(
      map(x => x.SelectedOrder)
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getOrder(id);
  }
}
