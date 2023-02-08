import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../data-access/categories.service';
import { CategoriesState } from '../../data-access/categories-state';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  
  state$: Observable<CategoriesState>;

  constructor(private dataService: CategoriesService, private route: ActivatedRoute) {
    this.state$ = dataService.state$;
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getCategory(id);
  }
}
