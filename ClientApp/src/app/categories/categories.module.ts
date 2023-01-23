import { NgModule } from '@angular/core';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoriesService } from './categories.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: ':id',
      component: CategoryDetailsComponent,
    }, {
      path: '',
      pathMatch: 'full',
      component: CategoryListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    CategoryListComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule,
    SharedModule
  ],
  providers: [CategoriesService],
  exports: [RouterModule]
})
export class CategoriesModule { }
