import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { CategoryListItem } from '../../data-access/categories-state';
import { CategoriesService } from '../../data-access/categories.service';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent extends ListComponentBase<CategoryListItem> implements OnInit {

  categoryName: string = '';
  description: string = '';

  contextMenuItems: ContextMenuItem[] = [];
  
  constructor(private dataService: CategoriesService, protected override router: Router) {
    super(router);
    this.items$ = dataService.state$.pipe(
      map(x => x.CategorySearchList)
    );    
  }

  ngOnInit(): void {
    this.setContextMenu();
  }
  
  refreshList() {
    this.dataService.getCategorySearch(this.pageNumber, { name: this.categoryName, description: this.description });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setContextMenu() {
    this.contextMenuItems = [{
      text: 'Show category details',
      action: () => this.showItem('categories'),
      disabled: false,
      isSeparator: false
    }];
  }
}
