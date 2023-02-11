import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-search',
  templateUrl: './region-search.component.html',
  styleUrls: ['./region-search.component.css']
})
export class RegionSearchComponent implements OnInit {

  description: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
