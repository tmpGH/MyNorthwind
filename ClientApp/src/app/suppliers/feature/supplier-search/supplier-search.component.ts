import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-search',
  templateUrl: './supplier-search.component.html',
  styleUrls: ['./supplier-search.component.css']
})
export class SupplierSearchComponent implements OnInit {

  name: string = '';
  address: string = '';
  city: string = '';
  region: string = '';
  postalCode: string = '';
  country: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
