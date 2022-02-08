import { Component, Input, OnInit } from '@angular/core';
import { ListingElement } from 'src/app/interfaces/listing-element';
import { ListingForDisplay } from 'src/app/interfaces/listing-for-display';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
  @Input()
  listing!: ListingElement

  listingForDisplay!: ListingForDisplay;

  ngOnInit(): void {
    this.listingForDisplay = this._prepareForDisplay();
  }

  private _prepareForDisplay(): ListingForDisplay {
    return {
      status: this.listing.listing_details.status,
      newDevelopment: this.listing.features.new_development,
      location: this.listing.location.address_with_unit,
      unitMonthlyCosts: `$ ${this.listing.unit_details.total_monthlies} / mo`,
      unitDetails: this._generateUnitDetailsForDisplay(),
      neighborhood: this.listing.location.place,
      propertyType: this.listing.unit_details.property_type
    }
  }

  private _getBathroomAmount(): number {
    return this.listing.unit_details.full_baths + this.listing.unit_details.half_baths;
  }

  private _generateUnitDetailsForDisplay(): string {
    return `${this.listing.unit_details.beds} BD | ${this._getBathroomAmount()} BA | ${this.listing.unit_details.sqft} SQFT`;
  }
}
