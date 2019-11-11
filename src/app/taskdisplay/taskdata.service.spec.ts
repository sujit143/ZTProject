import { TestBed } from '@angular/core/testing';

import { TaskdataService } from './taskdata.service';

describe('TaskdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskdataService = TestBed.get(TaskdataService);
    expect(service).toBeTruthy();
  });
});
