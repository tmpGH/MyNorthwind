import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { TerritoryDetailsComponent } from '../territory-details/territory-details.component';
import { TerritoryListComponent } from '../territory-list/territory-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: ':id',
      component: TerritoryDetailsComponent,
    }, {
      path: '',
      pathMatch: 'full',
      component: TerritoryListComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerritoriesRoutingModule { }
