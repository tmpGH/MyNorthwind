import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TerritoriesService } from '../../data-access/territories.service';
import { TerritoryDetails } from '../../data-access/territories-state';

@Component({
  selector: 'app-territory-details',
  templateUrl: './territory-details.component.html',
  styleUrls: ['./territory-details.component.css']
})
export class TerritoryDetailsComponent implements OnInit {

  data$: Observable<TerritoryDetails>;
  
  constructor(private dataService: TerritoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.data$ = this.dataService.getTeritory(id);
  }
}
