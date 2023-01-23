import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContextMenuComponent } from './list-context-menu.component';

describe('ContextMenuComponent', () => {
  let component: ListContextMenuComponent;
  let fixture: ComponentFixture<ListContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContextMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
