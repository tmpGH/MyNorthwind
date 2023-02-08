import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RegionDetails } from '../../data-access/regions-state';
import { RegionsService } from '../../data-access/regions.service';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnInit {

  data$: Observable<RegionDetails | undefined>;
  
  constructor(private dataService: RegionsService, private route: ActivatedRoute) {
    this.data$ = dataService.state$.pipe(
      map(x => x.SelectedRegion)
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getRegion(id);
  }
}
