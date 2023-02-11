import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-territory-search',
  templateUrl: './territory-search.component.html',
  styleUrls: ['./territory-search.component.css']
})
export class TerritorySearchComponent implements OnInit {

  description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }  
}
