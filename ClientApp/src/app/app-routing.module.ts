// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Categories',
    path: 'categories',
    loadChildren: () => import('./categories/feature/client-shell/categories.module').then(m => m.CategoriesModule)
  }, {
    title: 'Customers',
    path: 'customers',
    loadChildren: () => import('./customers/feature/client-shell/customers.module').then(m => m.CustomersModule)
  }, {
    title: 'Employees',
    path: 'employees',
    loadChildren: () => import('./employees/feature/client-shell/employees.module').then(m => m.EmployeesModule)
  }, {
    title: 'Orders',
    path: 'orders',
    loadChildren: () => import('./orders/feature/client-shell/orders.module').then(m => m.OrdersModule)
  }, {
    title: 'Products',
    path: 'products',
    loadChildren: () => import('./products/feature/client-shell/products.module').then(m => m.ProductsModule)
  }, {
    title: 'Regions',
    path: 'regions',
    loadChildren: () => import('./regions/feature/client-shell/regions.module').then(m => m.RegionsModule)
  }, {
    title: 'Shippers',
    path: 'shippers',
    loadChildren: () => import('./shippers/feature/client-shell/shippers.module').then(m => m.ShippersModule)
  }, {
    title: 'Suppliers',
    path: 'suppliers',
    loadChildren: () => import('./suppliers/feature/client-shell/suppliers.module').then(m => m.SuppliersModule)
  }, {
    title: 'Territories',
    path: 'territories',
    loadChildren: () => import('./territories/feature/client-shell/territories.module').then(m => m.TerritoriesModule)
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

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
