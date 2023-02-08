import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SupplierDetails } from '../../data-access/suppliers-state';
import { SuppliersService } from '../../data-access/suppliers.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  data$: Observable<SupplierDetails>;
  
  constructor(private dataService: SuppliersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.data$ = this.dataService.getSupplier(id);
  }
}
