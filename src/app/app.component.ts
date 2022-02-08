import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { Listing } from './interfaces/listing';
import { ListingElement } from './interfaces/listing-element';
import { ListingsService } from './services/listings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'perchwell-listings';
  listings!: ListingElement[];
  hasError = false;
  hasLoaded = false;

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.getListings();
  }

  getListings(): void {
    this.listingsService.getListingsForAccount()
    .pipe(
      take(1),
      catchError((error) => {
        // In a production-level app you could log this error to New Relic or some similar service
        console.log(`An error occured while trying to retrieve the listings: ${JSON.stringify(error)}`);
        this.hasError = true;
        return of(error);
      })
    )
    .subscribe((listing: Listing) => {
      this.listings = listing && listing.listings && listing.listings.length > 0 ?
        this.listingsService.getListingsWithProperBackgrounds(listing.listings) : [];
      
      this._updateMainImage();
      this.hasLoaded = true;
    });
  }

  retry(): void {
    this.hasLoaded = false;
    this.hasError = false;
    this.getListings();
  }

  // Adding this for presentation due to 'Access Denied' issue for the given image
  private _updateMainImage() {
    const idOfBrokenListing = 3203391;
    const validUrl = 'https://media-staging.perchwell.com/property_images/pictures/011/021/447/medium/open-uri20210728-221-12rj8z7?1627500193';
    if (this.listings.length > 0) {
      const listingWithBrokenImage = this.listings.find(listing => listing.id === idOfBrokenListing)
      if (listingWithBrokenImage) {
        listingWithBrokenImage.media.main_image = validUrl;
      }
    }
  }
}
