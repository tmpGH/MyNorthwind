import { Component, OnInit } from '@angular/core';
import { TerritoryListItem } from '../model/territory-list-item';
import { TerritoriesService } from '../territories.service';

@Component({
  selector: 'app-territory-list',
  templateUrl: './territory-list.component.html',
  styleUrls: ['./territory-list.component.css']
})
export class TerritoryListComponent implements OnInit {

  items: TerritoryListItem[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private dataService: TerritoriesService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getTeritoryList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
