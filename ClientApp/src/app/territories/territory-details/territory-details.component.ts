import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeritoryDetails } from '../model/territory-details';
import { TerritoriesService } from '../territories.service';

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
