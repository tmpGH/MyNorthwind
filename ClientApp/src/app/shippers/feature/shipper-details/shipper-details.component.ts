import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ShipperDetails } from '../../data-access/shippers-state';
import { ShippersService } from '../../data-access/shippers.service';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
  styleUrls: ['./shipper-details.component.css']
})
export class ShipperDetailsComponent implements OnInit {

  data$: Observable<ShipperDetails | undefined>;

  constructor(private dataService: ShippersService, private route: ActivatedRoute) {
    this.data$ = dataService.state$.pipe(
      map(x => x.SelectedShipper)
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getShipper(id);
  }
}
