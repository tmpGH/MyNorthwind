import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, RouterModule } from '@angular/router';
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
export class AppComponent implements OnInit {
  title = 'MyNorthwind';
  menuItems = APP_ROUTES;
  activeMenuItemId?: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setActiveMenuItem();
  }

  setActiveMenuItem() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        let fragment = event.url.split('/')[1];
        let activatedRoute = APP_ROUTES.find(r => r.path == fragment) ?? APP_ROUTES[0];
        this.activeMenuItemId = activatedRoute.title?.toString();
      }
    });
  }

}
