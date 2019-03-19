import { TestBed } from '@angular/core/testing';

import { SaleStorageService } from './sale-storage.service';

describe('SaleStorageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleStorageService = TestBed.get(SaleStorageService);
    expect(service).toBeTruthy();
  });
});
