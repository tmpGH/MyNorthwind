import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { TerritoriesService } from '../../data-access/territories.service';
import { TerritoryListItem } from '../../data-access/territory-list-item';

@Component({
  selector: 'app-territory-list',
  templateUrl: './territory-list.component.html',
  styleUrls: ['./territory-list.component.css']
})
export class TerritoryListComponent implements OnInit {

  items$: Observable<TerritoryListItem[]>;
  selectedItem?: TerritoryListItem;
  pageNumber = 1;
  pageSize = 10;
  
  @ViewChild('contextMenu') contextmenu!: ListContextMenuComponent;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show territory details',
    action: () => this.showTerritory(),
    disabled: false
  }, {
    text: '',
    disabled: false
  }, {
    text: 'Another action',
    disabled: true
  }];

  constructor(private dataService: TerritoriesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }
  
  onRightClick(event: MouseEvent, item: TerritoryListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.items$ = this.dataService.getTeritoryList();
  }

  showTerritory() {
    let id = this.selectedItem?.territoryID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }  
}
