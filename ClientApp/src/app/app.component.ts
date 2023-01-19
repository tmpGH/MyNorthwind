import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
	imports: [
    CommonModule,
    NgbNavModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyNorthwind';
  activeMenuItemId = 1;
  menuItems = [{
      id: 1,
      title: 'Categories',
      route: 'categories/'
    }, {
      id: 2,
      title: 'Customers',
      route: 'customers/'
    }, {
      id: 3,
      title: 'Orders',
      route: 'orders/'
    }, {
      id: 100,
      title: 'Login',
      route: 'login/'
    }
  ]
}
