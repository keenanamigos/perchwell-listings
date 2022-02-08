import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsComponent } from './listing-details.component';

describe('ListingDetailsComponent', () => {
  let component: ListingDetailsComponent;
  let fixture: ComponentFixture<ListingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDetailsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailsComponent);
    component = fixture.componentInstance;
    const mockListing = {
      listing_details: {
        status: 'active',
        current_price: 10000
      },
      features: {
        new_development: true
      },
      location: {
        address_with_unit: '1234 Addison #7',
        place: 'Canarsie'
      },
      unit_details: {
        beds: 3,
        sqft: 1200,
        full_baths: 2,
        half_baths: 1,
        property_type: 'Condo'
      },
      media: {
        main_image: 'someimg.png'
      }
    }
    component.listing = mockListing as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call _prepareListingForDisplay', () => {
      jest.spyOn<any, any>(component, '_prepareListingForDisplay');

      component.ngOnInit();

      expect(component['_prepareListingForDisplay']).toHaveBeenCalledTimes(1);
    });
  });

  describe('_prepareListingForDisplay', () => {
    it('should ready the listingForDisplay property for display in the UI', () => {
      component["_prepareListingForDisplay"]();

      expect(component.listingForDisplay.status).toEqual('active');
      expect(component.listingForDisplay.newDevelopment).toEqual(true);
      expect(component.listingForDisplay.location).toEqual('1234 Addison #7');
      expect(component.listingForDisplay.unitMonthlyCosts).toEqual('$ 10,000 / mo');
      expect(component.listingForDisplay.unitDetails).toEqual('3 BD | 3 BA | 1200 SQFT');
      expect(component.listingForDisplay.neighborhood).toEqual('Canarsie');
      expect(component.listingForDisplay.propertyType).toEqual('Condo');
      expect(component.listingForDisplay.image).toEqual('someimg.png');
    });
  });
});
