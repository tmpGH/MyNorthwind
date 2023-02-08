import { NgModule } from '@angular/core';
import { RegionListComponent } from '../region-list/region-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { RegionDetailsComponent } from '../region-details/region-details.component';
import { RegionSearchComponent } from '../region-search/region-search.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: RegionListComponent,
    }, {
      path: 'search',
      component: RegionSearchComponent,
    }, {
      path: ':id',
      component: RegionDetailsComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
