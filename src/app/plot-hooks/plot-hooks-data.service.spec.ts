import { TestBed } from '@angular/core/testing';

import { PlotHooksDataService } from './plot-hooks-data.service';

describe('PlotHooksDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotHooksDataService = TestBed.get(PlotHooksDataService);
    expect(service).toBeTruthy();
  });
});
