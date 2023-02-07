import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "../../ui/main/main.component";
import { CategoryDetailsComponent } from "../category-details/category-details.component";
import { CategoryListComponent } from "../category-list/category-list.component";

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }