import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RegionDetails } from '../../data-access/region-details';
import { RegionsService } from '../../data-access/regions.service';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnInit {

  data$: Observable<RegionDetails>;
  
  constructor(private dataService: RegionsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.data$ = this.dataService.getRegion(id);
  }
}
