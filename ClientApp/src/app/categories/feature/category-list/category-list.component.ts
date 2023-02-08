import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { CategoriesService } from '../../data-access/categories.service';
import { CategoryListItem } from '../../data-access/category-list-item';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {

  items$: Observable<CategoryListItem[]>;
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
    this.items$ = this.dataService.getCategoryList();
  }

  showCategory() {
    let id = this.selectedItem?.categoryID;
    this.router.navigate(['.', id], {relativeTo: this.route});
  }
}
