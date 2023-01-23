import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Categories',
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  }, {
    title: 'Customers',
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  }, {
    title: 'Employees',
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  }, {
    title: 'Orders',
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  }, {
    title: 'Products',
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }, {
    title: 'Regions',
    path: 'regions',
    loadChildren: () => import('./regions/regions.module').then(m => m.RegionsModule)
  }, {
    title: 'Shippers',
    path: 'shippers',
    loadChildren: () => import('./shippers/shippers.module').then(m => m.ShippersModule)
  }, {
    title: 'Suppliers',
    path: 'suppliers',
    loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule)
  }, {
    title: 'Territories',
    path: 'territories',
    loadChildren: () => import('./territories/territories.module').then(m => m.TerritoriesModule)
  }, {
    title: 'Login',
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }, {
    path: '**',
    redirectTo: 'categories'
  }
];
export const APP_ROUTES = routes;
export function getActiveRouteOrFirst(url: string) {
  let fragment = url.split('/')[1];
  return APP_ROUTES.find(r => r.path == fragment) ?? APP_ROUTES[0];
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
