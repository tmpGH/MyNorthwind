import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipper-search',
  templateUrl: './shipper-search.component.html',
  styleUrls: ['./shipper-search.component.css']
})
export class ShipperSearchComponent implements OnInit {

  name: string = '';
  phone: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
