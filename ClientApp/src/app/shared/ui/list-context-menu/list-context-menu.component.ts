import { Component, Input, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { ContextMenuItem } from './context-menu-item';

@Component({
  selector: 'app-list-context-menu',
  templateUrl: './list-context-menu.component.html',
  styleUrls: ['./list-context-menu.component.css']
})
export class ListContextMenuComponent {

  @Input('menuItems') menuItems: ContextMenuItem[] = [];
  @ViewChild('dropdownMenu') dropdownmenu!: NgbDropdown;
  menuPosition =  {left: '0px', top: '0px'}
  
  constructor() { }

  open(left = 0, top = 0) {
    this.menuPosition.left = left + 'px'; 
    this.menuPosition.top = top + 'px'; 
    this.dropdownmenu.open();
  }

  invokeAction(menuItem: ContextMenuItem): void {
    if(menuItem.action) {
      menuItem.action();
    }
  }
}
