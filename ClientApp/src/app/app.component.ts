import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, RouterModule } from '@angular/router';
import { NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { APP_ROUTES, getActiveRouteOrFirst } from './app-routing.module';

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

  constructor(private router: Router, private offcanvasService: NgbOffcanvas) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.activeMenuItemId = getActiveRouteOrFirst(event.url)?.title?.toString();
      }
    });
  }

	open(content: any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' });
	}
}
