import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { AppComponent } from './app.component';
import { ListingsService } from './services/listings.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let listingsService: ListingsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientModule],
      providers: [ListingsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    listingsService = TestBed.inject(ListingsService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'perchwell-listings'`, () => {
    expect(component.title).toEqual('perchwell-listings');
  });

  describe('ngOnInit', () => {
    it('should call getListings', () => {
      jest.spyOn(component, 'getListings');

      component.ngOnInit();

      expect(component.getListings).toHaveBeenCalledTimes(1);
    });
  });

  describe('getListings', () => {
    it('should get all of the listings when the call is successful', () => {
      jest.spyOn(listingsService, 'getListingsForAccount').mockReturnValue(
        of({
          total: 1,
          listings: [{ id: 1, media: { main_image: 'someValue.png' }}]
        } as any)
      )

      component.getListings();

      expect(component.hasError).toEqual(false);
      expect(component.hasLoaded).toEqual(true);
      expect(component.listings).toEqual([{ id: 1, media: { main_image: 'someValue.png' }} as any])
    });

    it('should set the listings to an empty array when the call is successful but no listings are returned', () => {
      jest.spyOn(listingsService, 'getListingsForAccount').mockReturnValue(of({ total: 0, listings: []}))

      component.getListings();

      expect(component.hasError).toEqual(false);
      expect(component.hasLoaded).toEqual(true);
      expect(component.listings).toEqual([])
    });

    it('should log the error, set the hasError flag, and set the listings to an empty array when the call fails', () => {
      jest.spyOn(listingsService, 'getListingsForAccount').mockReturnValue(throwError(() => 'an unknown error occurred'));
      jest.spyOn(console, 'log');

      component.getListings();

      expect(console.log).toHaveBeenCalledWith('An error occured while trying to retrieve the listings: "an unknown error occurred"');
      expect(component.hasError).toEqual(true);
      expect(component.hasLoaded).toEqual(true);
      expect(component.listings).toEqual([])
    });
  });

  describe('retry', () => {
    it('should call getListings when called', () => {
      jest.spyOn(component, 'getListings');

      component.retry();

      expect(component.getListings).toHaveBeenCalledTimes(1);
    });
  });
});
