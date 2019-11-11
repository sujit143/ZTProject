import { TestBed } from '@angular/core/testing';

import { ProductresolverService } from './productresolver.service';

describe('ProductresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductresolverService = TestBed.get(ProductresolverService);
    expect(service).toBeTruthy();
  });
});
