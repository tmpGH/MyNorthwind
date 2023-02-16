import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { RegionListItem } from '../../data-access/regions-state';
import { RegionsService } from '../../data-access/regions.service';

@Component({
  selector: 'app-region-search',
  templateUrl: './region-search.component.html',
  styleUrls: ['./region-search.component.css']
})
export class RegionSearchComponent extends ListComponentBase<RegionListItem> implements OnInit {

  description = new FormControl('', Validators.required);
  
  contextMenuItems: ContextMenuItem[] = [];
  
  constructor(private dataService: RegionsService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.RegionSearchList)
    );    
  }

  ngOnInit(): void {
    this.setContextMenu();
  }

  refreshList() {
    this.dataService.getRegionSearch(this.pageNumber, {
      description: this.description.value
    });
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show region details',
      action: () => this.showItem('regions'),
      disabled: false,
      isSeparator: false
    }];
  }  
}
