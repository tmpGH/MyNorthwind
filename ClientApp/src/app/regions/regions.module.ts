import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionListComponent } from './region-list/region-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RegionsService } from './regions.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: RegionListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    RegionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule 
  ],
  providers: [RegionsService],
  exports: [RouterModule]
})
export class RegionsModule { }
