import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { RegionListItem } from '../../data-access/regions-state';
import { RegionsService } from '../../data-access/regions.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent extends ListComponentBase<RegionListItem> implements OnInit {

  contextMenuItems: ContextMenuItem[] = [];

  constructor(private dataService: RegionsService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.RegionList)
    );
  }

  ngOnInit(): void {
    this.setContextMenu();
    this.refreshList();
  }

  refreshList() {
    this.dataService.getRegionList();
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show region details',
      action: () => this.showItem('regions'),
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
  }  
}
