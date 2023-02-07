import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TerritoriesService } from '../../data-access/territories.service';
import { TeritoryDetails } from '../../data-access/territory-details';

@Component({
  selector: 'app-territory-details',
  templateUrl: './territory-details.component.html',
  styleUrls: ['./territory-details.component.css']
})
export class TerritoryDetailsComponent implements OnInit {

  data?: TeritoryDetails;
  
  constructor(private dataService: TerritoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getTeritory(id).subscribe( value => this.data = value );
  }
}
