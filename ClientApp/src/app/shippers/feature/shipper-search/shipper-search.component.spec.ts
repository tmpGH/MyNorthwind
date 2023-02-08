import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperSearchComponent } from './shipper-search.component';

describe('ShipperSearchComponent', () => {
  let component: ShipperSearchComponent;
  let fixture: ComponentFixture<ShipperSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
