import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOfficeQueryComponent } from './post-office-query.component';

describe('PostOfficeQueryComponent', () => {
  let component: PostOfficeQueryComponent;
  let fixture: ComponentFixture<PostOfficeQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOfficeQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOfficeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
