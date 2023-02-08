import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { TerritoriesService } from '../../data-access/territories.service';
import { TerritoriesState, TerritoryListItem } from '../../data-access/territories-state';

@Component({
  selector: 'app-territory-list',
  templateUrl: './territory-list.component.html',
  styleUrls: ['./territory-list.component.css']
})
export class TerritoryListComponent implements OnInit {

  items$: Observable<TerritoryListItem[]>;
  pageNumber = 1;
  pageSize = 10;

  selectedItemId?: string;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show territory details',
    action: () => this.showTerritory(),
    disabled: false,
    isSeparator: false
  }, {
    disabled: false,
    isSeparator: true
  }, {
    text: 'Another action',
    disabled: false,
    isSeparator: false
  }];
  @ViewChild('contextMenu') contextmenu: ListContextMenuComponent;
  
  constructor(private dataService: TerritoriesService, private router: Router, private route: ActivatedRoute) {
    this.items$ = dataService.state$.pipe(
      map(x => x.TerritoryList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }
  
  onRightClick(event: MouseEvent, item: TerritoryListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.territoryID;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.dataService.getTerritoryList();
  }

  showTerritory() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }  
}
