import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "../../ui/main/main.component";
import { CategoryDetailsComponent } from "../category-details/category-details.component";
import { CategoryListComponent } from "../category-list/category-list.component";
import { CategorySearchComponent } from "../category-search/category-search.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: CategoryListComponent,
    }, {
      path: 'search',
      pathMatch: 'full',
      component: CategorySearchComponent,
    }, {
      path: ':id',
      component: CategoryDetailsComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }