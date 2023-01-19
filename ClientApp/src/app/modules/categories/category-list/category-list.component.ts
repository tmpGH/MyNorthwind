import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { CategoryListItem } from '../model/category-list-item';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList: CategoryListItem[] = [];

  constructor(private dataService: CategoriesService) { }

  ngOnInit(): void {
    this.dataService.getCategoryList().subscribe(data => {
      this.categoryList = data.map(x => x);
    });
  }
}
