import { Event, NavigationEnd, Router } from '@angular/router';

export abstract class MainComponentBase {

  protected area: string = '';
  protected activeNavItem?: string;

  constructor(protected router: Router) { }

  protected selectMenuItem() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        // TODO: change
        let items = event.url.split('/');
        //console.log(items);
        this.activeNavItem = ((items[1] == this.area) && items[2]) ? 'details' : 'list';
      }
    });
  }
}