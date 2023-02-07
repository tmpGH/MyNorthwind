import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TerritoryDetailsComponent } from '../territory-details/territory-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { TerritoriesService } from '../../data-access/territories.service';
import { TerritoryListComponent } from '../territory-list/territory-list.component';
import { TerritoriesRoutingModule } from './territories-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    TerritoryListComponent,
    TerritoryDetailsComponent
  ],
  imports: [
    CommonModule,
    TerritoriesRoutingModule,
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
