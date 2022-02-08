import { PropertyType } from "../enums/property-type";
import { Status } from "../enums/status";

export interface ListingForDisplay {
    status: Status;
    newDevelopment: boolean;
    location: string;
    unitMonthlyCosts: string;
    unitDetails: string;
    neighborhood: string;
    propertyType: PropertyType
}
