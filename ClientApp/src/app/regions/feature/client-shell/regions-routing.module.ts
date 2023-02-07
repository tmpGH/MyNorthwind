import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionListComponent } from '../region-list/region-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RegionDetailsComponent } from '../region-details/region-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { RegionsService } from '../../data-access/regions.service';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
