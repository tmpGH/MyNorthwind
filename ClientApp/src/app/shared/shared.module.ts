import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContextMenuComponent } from './components/list-context-menu/list-context-menu.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListContextMenuComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [ListContextMenuComponent]
})
export class SharedModule { }
