import { TestBed } from '@angular/core/testing';

import { NpcsDataService } from './npcs-data.service';

describe('NpcsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NpcsDataService = TestBed.get(NpcsDataService);
    expect(service).toBeTruthy();
  });
});
