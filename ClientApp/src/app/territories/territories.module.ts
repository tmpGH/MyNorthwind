import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerritoryListComponent } from './territory-list/territory-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TerritoriesService } from './territories.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: TerritoryListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    TerritoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule 
  ],
  providers: [TerritoriesService],
  exports: [RouterModule]
})
export class TerritoriesModule { }
