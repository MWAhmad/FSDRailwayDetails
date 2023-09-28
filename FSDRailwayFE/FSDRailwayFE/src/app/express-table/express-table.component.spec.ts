import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressTableComponent } from './express-table.component';

describe('ExpressTableComponent', () => {
  let component: ExpressTableComponent;
  let fixture: ComponentFixture<ExpressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
