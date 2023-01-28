import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextMenuItem } from 'src/app/shared/components/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/components/list-context-menu/list-context-menu.component';
import { RegionListItem } from '../model/region-list-item';
import { RegionsService } from '../regions.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  items: RegionListItem[] = [];
  selectedItem?: RegionListItem;
  pageNumber = 1;
  pageSize = 10;
  
  @ViewChild('contextMenu') contextmenu!: ListContextMenuComponent;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show region details',
    action: () => this.showRegion(),
    disabled: false
  }, {
    text: '',
    disabled: false
  }, {
    text: 'Another action',
    disabled: true
  }];

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
    this.dataService.getRegionList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }

  showRegion() {
    let id = this.selectedItem?.regionID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }  
}
