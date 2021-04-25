import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRecordModalComponent } from './add-edit-record-modal.component';

describe('AddEditRecordModalComponent', () => {
  let component: AddEditRecordModalComponent;
  let fixture: ComponentFixture<AddEditRecordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRecordModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
