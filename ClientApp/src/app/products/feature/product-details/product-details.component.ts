import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../../data-access/product-details';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  data?: ProductDetails;
  
  constructor(private dataService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getProduct(id).subscribe( value => this.data = value );
  }
}
