import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  }, {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  }, {
    path: 'employees', // TODO
    redirectTo: 'categories'
  }, {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
  }, {
    path: 'products', // TODO
    redirectTo: 'categories'
  }, {
    path: 'regions', // TODO
    redirectTo: 'categories'
  }, {
    path: 'shippers', // TODO
    redirectTo: 'categories'
  }, {
    path: 'suppliers', // TODO
    redirectTo: 'categories'
  }, {
    path: 'territories', // TODO
    redirectTo: 'categories'
  }, {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  }, {
    path: '**',
    redirectTo: 'categories'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
