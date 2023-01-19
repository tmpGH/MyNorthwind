import { NgModule } from '@angular/core';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CategoryListComponent }
];

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoriesModule { }
