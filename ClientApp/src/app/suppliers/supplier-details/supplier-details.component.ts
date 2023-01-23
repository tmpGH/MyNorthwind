import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierDetails } from '../model/supplier-details';
import { SuppliersService } from '../suppliers.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  data?: SupplierDetails;
  
  constructor(private dataService: SuppliersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getSupplier(id).subscribe( value => this.data = value );
  }
}
