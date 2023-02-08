import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionListComponent } from '../region-list/region-list.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RegionDetailsComponent } from '../region-details/region-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { RegionsService } from '../../data-access/regions.service';
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionSearchComponent } from '../region-search/region-search.component';

@NgModule({
  declarations: [
    MainComponent,
    RegionListComponent,
    RegionDetailsComponent,
    RegionSearchComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule,
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
