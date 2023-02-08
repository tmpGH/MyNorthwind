import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { ListContextMenuComponent } from 'src/app/shared/ui/list-context-menu/list-context-menu.component';
import { CategoriesState, CategoryListItem } from '../../data-access/categories-state';
import { CategoriesService } from '../../data-access/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {

  state$: Observable<CategoriesState>;
  pageNumber = 1;
  pageSize = 10;

  selectedItemId?: Number;
  contextMenuItems: ContextMenuItem[] = [{
    text: 'Show category details',
    action: () => this.showCategory(),
    disabled: false,
    isSeparator: false
  }, {
    disabled: false,
    isSeparator: true
  }, {
    text: 'Another action',
    disabled: true,
    isSeparator: false
  }];
  @ViewChild('contextMenu') contextmenu: ListContextMenuComponent;

  constructor(private dataService: CategoriesService, private router: Router, private route: ActivatedRoute) {
    this.state$ = dataService.state$;
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onRightClick(event: MouseEvent, item: CategoryListItem) { 
    event.preventDefault(); 
    this.selectedItemId = item.categoryID;
    this.contextmenu.open(event.clientX, event.clientY);
  }
  
  refreshList() {
    this.dataService.getCategoryList();
  }

  showCategory() {
    this.router.navigate(['.', this.selectedItemId], {relativeTo: this.route});
  }
}
