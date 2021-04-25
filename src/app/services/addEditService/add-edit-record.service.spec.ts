import { TestBed } from '@angular/core/testing';

import { AddEditRecordService } from './add-edit-record.service';

describe('AddEditRecordService', () => {
  let service: AddEditRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEditRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
