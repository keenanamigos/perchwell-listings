import { LeaseTerm } from "../enums/lease-term";
import { LeaseType } from "../enums/lease-type";

export interface RentalDetails {
    bonus?:                 string;
    concession?:            string;
    free_rent?:             string;
    lease_term?:            LeaseTerm;
    lease_type?:            LeaseType;
    furnished_rent?:        number;
    lease_term_max_months?: number;
    lease_term_min_months?: number;
}
