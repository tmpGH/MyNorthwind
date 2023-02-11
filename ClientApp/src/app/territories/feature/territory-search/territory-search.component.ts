import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { TerritoryListItem } from '../../data-access/territories-state';
import { TerritoriesService } from '../../data-access/territories.service';

@Component({
  selector: 'app-territory-search',
  templateUrl: './territory-search.component.html',
  styleUrls: ['./territory-search.component.css']
})
export class TerritorySearchComponent extends ListComponentBase<TerritoryListItem> implements OnInit {

  description: string = '';
  
  contextMenuItems: ContextMenuItem[] = [];

  constructor(private dataService: TerritoriesService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.TerritorySearchList)
    );    
  }

  ngOnInit(): void {
  }

  refreshList() {
    this.dataService.getTerritorySearch(this.pageNumber, { description: this.description });
  }  

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show territory details',
      action: () => this.showItem('territories'),
      disabled: false,
      isSeparator: false
    }];
  }   
}
