import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_ROUTES } from './app-routing.module';

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

  menuItems = APP_ROUTES;
  activeMenuItemId = APP_ROUTES[0].title;
}
