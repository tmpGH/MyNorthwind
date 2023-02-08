import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TerritoriesService } from '../../data-access/territories.service';
import { TerritoryDetails } from '../../data-access/territories-state';

@Component({
  selector: 'app-territory-details',
  templateUrl: './territory-details.component.html',
  styleUrls: ['./territory-details.component.css']
})
export class TerritoryDetailsComponent implements OnInit {

  data$: Observable<TerritoryDetails | undefined>;
  
  constructor(private dataService: TerritoriesService, private route: ActivatedRoute) {
    this.data$ = dataService.state$.pipe(
      map(x => x.SelectedTerritory)
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getTerritory(id);
  }
}
