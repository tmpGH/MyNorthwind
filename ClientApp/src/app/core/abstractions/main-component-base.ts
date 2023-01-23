import { Event, NavigationEnd, Router } from '@angular/router';

export abstract class MainComponentBase {

  protected area: string = '';
  activeNavItem?: string;

  constructor(protected router: Router) { }

  protected selectMenuItem() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        let items = event.url.split('/');
        this.activeNavItem = ((items[1] == this.area) && items[2]) ? 'details' : 'list';
      }
    });
  }
}