import { Component, OnInit } from '@angular/core';
import { EMPTY, of } from 'rxjs';
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
      this.listings = listing && listing.listings ? listing.listings : [];
      if (this.listings.length > 0) {
        this.hasError = false;
      }
    });
  }
}
