import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Categories',
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  }, {
    title: 'Customers',
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  }, {
    title: 'Employees',
    path: 'employees',
    loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule)
  }, {
    title: 'Orders',
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
  }, {
    title: 'Products',
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  }, {
    title: 'Regions',
    path: 'regions',
    loadChildren: () => import('./modules/regions/regions.module').then(m => m.RegionsModule)
  }, {
    title: 'Shippers',
    path: 'shippers',
    loadChildren: () => import('./modules/shippers/shippers.module').then(m => m.ShippersModule)
  }, {
    title: 'Suppliers',
    path: 'suppliers',
    loadChildren: () => import('./modules/suppliers/suppliers.module').then(m => m.SuppliersModule)
  }, {
    title: 'Territories',
    path: 'territories',
    loadChildren: () => import('./modules/territories/territories.module').then(m => m.TerritoriesModule)
  }, {
    title: 'Login',
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  }, {
    path: '**',
    redirectTo: 'categories'
  }
];
export const APP_ROUTES = routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
