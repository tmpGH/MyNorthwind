import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerritoryListComponent } from './territory-list/territory-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TerritoriesService } from './territories.service';
import { TerritoryDetailsComponent } from './territory-details/territory-details.component';
import { SharedModule } from '../shared/shared.module';

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
  declarations: [
    MainComponent,
    TerritoryListComponent,
    TerritoryDetailsComponent
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
  providers: [TerritoriesService],
  exports: [RouterModule]
})
export class TerritoriesModule { }
