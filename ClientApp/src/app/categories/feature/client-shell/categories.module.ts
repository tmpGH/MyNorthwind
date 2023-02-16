import { NgModule } from '@angular/core';
import { CategoryListComponent } from '../category-list/category-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDetailsComponent } from '../category-details/category-details.component';
import { CategoriesService } from '../../data-access/categories.service';
import { SharedModule } from '../../../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategorySearchComponent } from '../category-search/category-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    CategorySearchComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [CategoriesService],
  exports: [RouterModule]
})
export class CategoriesModule { }
