import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponentBase } from 'src/app/core/abstractions/main-component-base';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends MainComponentBase implements OnInit {

  constructor(router: Router) {
    super(router);
    this.area= 'employees';
  }
  
  ngOnInit(): void {
    this.selectMenuItem();
  }
}