import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveQueryComponent } from './archive-query.component';

describe('ArchiveQueryComponent', () => {
  let component: ArchiveQueryComponent;
  let fixture: ComponentFixture<ArchiveQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
