import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { RegionListItem } from '../../data-access/region-list-item';
import { RegionsService } from '../../data-access/regions.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  items$: Observable<RegionListItem[]>;
  selectedItem?: RegionListItem;
  pageNumber = 1;
  pageSize = 10;
  
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

  constructor(private dataService: RegionsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: RegionListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }

  refreshList() {
    this.items$ = this.dataService.getRegionList();
  }

  showRegion() {
    let id = this.selectedItem?.regionID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }  
}
