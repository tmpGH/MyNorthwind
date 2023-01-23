import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
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
  
  @ViewChild('dropdownMenu') dropdownmenu!: NgbDropdown;
  menuPosition =  {left: '0', top: '0'}
  selectedItem: CategoryListItem | undefined;

  constructor(private dataService: CategoriesService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: CategoryListItem) { 
    event.preventDefault(); 

    this.selectedItem = item;

    this.menuPosition.left = event.clientX + 'px'; 
    this.menuPosition.top = event.clientY + 'px'; 

    this.dropdownmenu.open();
  }
  
  showCategory() {
    console.log(this.selectedItem);
  }

  refreshList() {
    this.dataService.getCategoryList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }
}
