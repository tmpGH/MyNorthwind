import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ShipperDetails } from '../../data-access/shippers-state';
import { ShippersService } from '../../data-access/shippers.service';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
  styleUrls: ['./shipper-details.component.css']
})
export class ShipperDetailsComponent implements OnInit {

  data$: Observable<ShipperDetails>;

  constructor(private dataService: ShippersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.data$ = this.dataService.getShipper(id);
  }
}
