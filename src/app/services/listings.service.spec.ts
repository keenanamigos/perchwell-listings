import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ListingsService } from './listings.service';

describe('ListingsService', () => {
  let service: ListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getListingsForAccount', () => {
    it('should make a request under the default account name', () => {});
  });
});
