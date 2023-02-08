import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorySearchComponent } from './territory-search.component';

describe('TerritorySearchComponent', () => {
  let component: TerritorySearchComponent;
  let fixture: ComponentFixture<TerritorySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerritorySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerritorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
