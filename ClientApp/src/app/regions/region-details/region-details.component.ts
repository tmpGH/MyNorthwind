import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionDetails } from '../model/region-details';
import { RegionsService } from '../regions.service';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnInit {

  data?: RegionDetails;
  
  constructor(private dataService: RegionsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getRegion(id).subscribe( value => this.data = value );
  }
}
