import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive()
export abstract class MainComponentBase implements OnInit, OnDestroy {

  protected activeNavItem?: string;
  protected menuSubscription?: Subscription;

  constructor(protected router: Router) { }

  ngOnInit(): void {
    this.setMenuItem();
  }

  ngOnDestroy(): void {
    this.menuSubscription?.unsubscribe();
  }

  protected setMenuItem() {
    this.menuSubscription = this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        let items = event.url.split('/');
        
        if (!items[2]) {
          this.activeNavItem = 'list';
        } else if (items[2] == 'search') {
          this.activeNavItem = 'search';
        } else {
          this.activeNavItem = 'details';
        }
      }
    });
  }
}