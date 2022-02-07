import { Agent } from "./agent";
import { BuildingDetails } from "./building-details";
import { Features } from "./features";
import { ListingDetails } from "./listing-details";
import { Media } from "./media";
import { Policies } from "./policies";
import { RentalDetails } from "./rental-details";
import { UnitDetails } from "./unit-details";
import { ViewsAndExposures } from "./views-and-exposures";

export interface ListingElement {
    id:                  number;
    location:            Location;
    agents:              Agent[];
    media:               Media;
    public_documents:    any[];
    listing_details:     ListingDetails;
    rental_details:      RentalDetails;
    unit_details:        UnitDetails;
    unit_amenities:      { [key: string]: boolean };
    building_details:    BuildingDetails;
    building_amenities:  { [key: string]: boolean };
    views_and_exposures: ViewsAndExposures;
    features:            Features;
    policies:            Policies;
}
