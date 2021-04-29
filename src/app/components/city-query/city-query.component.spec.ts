import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityQueryComponent } from './city-query.component';

describe('CityQueryComponent', () => {
  let component: CityQueryComponent;
  let fixture: ComponentFixture<CityQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
