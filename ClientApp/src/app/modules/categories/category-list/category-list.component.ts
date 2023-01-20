import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { CategoryListItem } from '../model/category-list-item';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {

  items: CategoryListItem[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private dataService: CategoriesService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dataService.getCategoryList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
