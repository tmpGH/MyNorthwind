import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductDetails, ProductsState } from '../../data-access/products-state';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  data$: Observable<ProductDetails | undefined>;
  
  constructor(private dataService: ProductsService, private route: ActivatedRoute) {
    this.data$ = dataService.state$.pipe(
      map(x => x.SelectedProduct)
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getProduct(id);
  }
}
