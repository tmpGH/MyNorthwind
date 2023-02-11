import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponentBase } from 'src/app/shared/ui/main-component-base/main-component-base';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends MainComponentBase {

  constructor(router: Router) { super(router); }

}
