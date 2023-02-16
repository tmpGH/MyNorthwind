import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListComponentBase } from 'src/app/shared/ui/list-component-base/list-component-base';
import { ContextMenuItem } from 'src/app/shared/ui/list-context-menu/context-menu-item';
import { CategoryListItem } from '../../data-access/categories-state';
import { CategoriesService } from '../../data-access/categories.service';
import { atLeastOneRequiredValidator } from '../../../shared/validators/atLeastOneRequiredValidator'

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent extends ListComponentBase<CategoryListItem> implements OnInit {

  searchForm = new FormGroup({
    categoryName: new FormControl(''),
    description: new FormControl('')
  }, { validators: atLeastOneRequiredValidator });

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
    this.dataService.getCategorySearch(this.pageNumber, {
      name: this.searchForm.value.categoryName,
      description: this.searchForm.value.description
    });
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
