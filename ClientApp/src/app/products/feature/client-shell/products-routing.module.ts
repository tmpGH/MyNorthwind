import { NgModule } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductSearchComponent } from '../product-search/product-search.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: ProductListComponent,
    }, {
      path: 'search',
      component: ProductSearchComponent,
    }, {
      path: ':id',
      component: ProductDetailsComponent,
    }, ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
