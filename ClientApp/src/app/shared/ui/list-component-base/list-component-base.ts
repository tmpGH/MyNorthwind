import { Directive, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListContextMenuComponent } from '../list-context-menu/list-context-menu.component';

@Directive()
export abstract class ListComponentBase<T> {

  protected items$: Observable<T[]>;
  protected pageNumber = 1;
  protected pageSize = 10;
  protected selectedItemId?: Number | string;

  @ViewChild('contextMenu') contextmenu: ListContextMenuComponent;

  constructor(protected router: Router) { }

  onRightClick(event: MouseEvent, itemId: Number | string) { 
    event.preventDefault(); 
    this.selectedItemId = itemId;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  showItem(itemPagePath: string) {
    this.router.navigate([itemPagePath, this.selectedItemId]);
  }  
}
