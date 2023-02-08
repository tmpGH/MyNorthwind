import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../data-access/categories.service';
import { CategoryDetails } from '../../data-access/category-details';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  
  data$: Observable<CategoryDetails>;

  constructor(private dataService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.data$ = this.dataService.getCategory(id);
  }
}
