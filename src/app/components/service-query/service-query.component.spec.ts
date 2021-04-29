import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceQueryComponent } from './service-query.component';

describe('ServiceQueryComponent', () => {
  let component: ServiceQueryComponent;
  let fixture: ComponentFixture<ServiceQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
