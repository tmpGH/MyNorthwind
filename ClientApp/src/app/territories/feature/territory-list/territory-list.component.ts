import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { TerritoriesService } from '../../data-access/territories.service';
import { TerritoryListItem } from '../../data-access/territories-state';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';

@Component({
  selector: 'app-territory-list',
  templateUrl: './territory-list.component.html',
  styleUrls: ['./territory-list.component.css']
})
export class TerritoryListComponent extends ListComponentBase<TerritoryListItem> implements OnInit {

  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show territory details',
    action: () => this.showItem('territories'),
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
  
  constructor(private dataService: TerritoriesService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.TerritoryList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }
  
  refreshList() {
    this.dataService.getTerritoryList();
  }
}
