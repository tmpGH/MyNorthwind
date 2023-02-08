import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { RegionListItem } from '../../data-access/regions-state';
import { RegionsService } from '../../data-access/regions.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  items$: Observable<RegionListItem[]>;
  pageNumber = 1;
  pageSize = 10;
  
  selectedItemId?: Number;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show region details',
    action: () => this.showRegion(),
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

  constructor(private dataService: RegionsService, private router: Router, private route: ActivatedRoute) {
    this.items$ = dataService.state$.pipe(
      map(x => x.RegionList)
    );
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: RegionListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.regionID;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.dataService.getRegionList();
  }

  showRegion() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }  
}
