import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponentBase } from 'src/app/shared/ui/main-component-base/main-component-base';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends MainComponentBase implements OnInit, OnDestroy {

  constructor(router: Router) { super(router); }
  
  ngOnInit(): void {
    this.setMenuItem();
  }
  
  ngOnDestroy(): void {
    this.menuSubscription?.unsubscribe();
  }
}
