import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionListComponent } from './region-list/region-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RegionsService } from './regions.service';
import { RegionDetailsComponent } from './region-details/region-details.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: ':id',
      component: RegionDetailsComponent,
    }, {
      path: '',
      pathMatch: 'full',
      component: RegionListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    RegionListComponent,
    RegionDetailsComponent
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
  providers: [RegionsService],
  exports: [RouterModule]
})
export class RegionsModule { }
