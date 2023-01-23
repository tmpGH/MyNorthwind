import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipperDetails } from '../model/shipper-details';
import { ShippersService } from '../shippers.service';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
  styleUrls: ['./shipper-details.component.css']
})
export class ShipperDetailsComponent implements OnInit {

  data?: ShipperDetails;
  
  constructor(private dataService: ShippersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getShipper(id).subscribe( value => this.data = value );
  }
}
