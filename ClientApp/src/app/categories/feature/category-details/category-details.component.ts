import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CategoriesService } from '../../data-access/categories.service';
import { CategoryDetails } from '../../data-access/categories-state';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  
  data$: Observable<CategoryDetails | undefined>;

  constructor(private dataService: CategoriesService, private route: ActivatedRoute) {
    this.data$ = dataService.state$.pipe(
      map(x => x.SelectedCategory)
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataService.getCategory(id);
  }
}
