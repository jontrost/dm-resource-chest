import { TestBed } from '@angular/core/testing';

import { MagicItemsDataService } from './magic-items-data.service';

describe('MagicItemDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicItemsDataService = TestBed.get(MagicItemsDataService);
    expect(service).toBeTruthy();
  });
});
