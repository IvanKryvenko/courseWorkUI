import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportQueryComponent } from './transport-query.component';

describe('TransportQueryComponent', () => {
  let component: TransportQueryComponent;
  let fixture: ComponentFixture<TransportQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
