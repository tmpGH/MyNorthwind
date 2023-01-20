import { Component, OnInit } from '@angular/core';
import { RegionListItem } from '../model/region-list-item';
import { RegionsService } from '../regions.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  items: RegionListItem[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private dataService: RegionsService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getRegionList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
