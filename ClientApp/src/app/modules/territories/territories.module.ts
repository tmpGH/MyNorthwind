import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerritoryListComponent } from './territory-list/territory-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TerritoryListComponent }
];

@NgModule({
  declarations: [
    TerritoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TerritoriesModule { }
