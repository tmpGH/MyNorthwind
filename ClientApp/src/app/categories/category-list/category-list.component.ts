import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextMenuItem, ListContextMenuComponent } from 'src/app/shared/components/list-context-menu/list-context-menu.component';
import { CategoriesService } from '../categories.service';
import { CategoryListItem } from '../model/category-list-item';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {

  items: CategoryListItem[] = [];
  selectedItem?: CategoryListItem;
  pageNumber = 1;
  pageSize = 10;

  @ViewChild('contextMenu') contextmenu!: ListContextMenuComponent;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show category details',
    action: () => this.showCategory(),
    disabled: false
  }, {
    text: '',
    disabled: false
  }, {
    text: 'Another action',
    disabled: true
  }];

  constructor(private dataService: CategoriesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: CategoryListItem) { 
    event.preventDefault(); 
    this.selectedItem = item;
    this.contextmenu.open(event.clientX, event.clientY);
  }
  
  refreshList() {
    this.dataService.getCategoryList().subscribe(data => {
      this.items = data.map(x => x);
    });
  }

  showCategory() {
    let id = this.selectedItem?.categoryID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }
}
