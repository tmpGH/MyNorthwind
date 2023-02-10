import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { CategoryListItem } from '../../data-access/categories-state';
import { CategoriesService } from '../../data-access/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent extends ListComponentBase<CategoryListItem> implements OnInit {

  contextMenuItems: ContextMenuItem[] = [];

  constructor(private dataService: CategoriesService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.CategoryList)
    );
  }

  ngOnInit(): void {
    this.setContextMenu();
    this.refreshList();
  }

  refreshList() {
    this.dataService.getCategoryList();
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show category details',
      action: () => this.showItem('categories'),
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
  }
}
