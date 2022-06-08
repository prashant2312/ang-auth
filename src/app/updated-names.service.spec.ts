import { TestBed } from '@angular/core/testing';

import { UpdatedNamesService } from './updated-names.service';

describe('UpdatedNamesService', () => {
  let service: UpdatedNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
