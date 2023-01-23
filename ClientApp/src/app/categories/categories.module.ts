import { NgModule } from '@angular/core';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbDropdownModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoriesService } from './categories.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    children: [{
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
    NgbDropdownModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule 
  ],
  providers: [CategoriesService],
  exports: [RouterModule]
})
export class CategoriesModule { }
