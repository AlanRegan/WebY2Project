import { TestBed } from '@angular/core/testing';

import { MarketcheckApiService } from './marketcheck-api.service';

describe('MarketcheckApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketcheckApiService = TestBed.get(MarketcheckApiService);
    expect(service).toBeTruthy();
  });
});
