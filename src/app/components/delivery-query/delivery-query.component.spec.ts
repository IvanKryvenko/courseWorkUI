import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryQueryComponent } from './delivery-query.component';

describe('DeliveryQueryComponent', () => {
  let component: DeliveryQueryComponent;
  let fixture: ComponentFixture<DeliveryQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
