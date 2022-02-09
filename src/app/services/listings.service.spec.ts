import { TestBed } from '@angular/core/testing';

import { ListingsService } from './listings.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ListingsService', () => {
  let service: ListingsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ListingsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getListingsForAccount', () => {
    it('should make a successful request under the default account name', () => {
      let listings;

      const mockListings = { total: 3, listings: [
        { id: 1, media: { main_image: 'someValue1.png' }},
        { id: 2, media: { main_image: 'someValue2.png' }},
        { id: 3, media: { main_image: 'someValue3.png' }}
      ] } as any;

      service.getListingsForAccount().subscribe(serverListings => {
        listings = serverListings;
      });

      const req = httpTestingController.expectOne({
        method: "GET",
        url: "http://localhost:4200/api/sothebys_international_realty"
      });

      req.flush(mockListings);

      expect(listings).toEqual(mockListings);
    });
  });

  describe('getListingsWithProperBackgrounds', () => {
    it('should return an array with all of the elements that have a "main_image" property', () => {
      const mockListings = [
        { id: 1, media: { main_image: 'someValue.png' }},
        { id: 2, media: {} },
        { id: 3, media: {} }
      ] as any;

      const returnedListings = service.getListingsWithProperBackgrounds(mockListings);

      expect(returnedListings.length).toEqual(1);
      expect(returnedListings).toEqual([{ id: 1, media: { main_image: 'someValue.png' }} as any]);
    });

    it('should return an empty array if none of the given listings have a "main_image" property', () => {
      const mockListings = [{
        id: 1,
        media: {}
      }] as any;

      expect(service.getListingsWithProperBackgrounds(mockListings)).toEqual([]);
    });
  });
});
