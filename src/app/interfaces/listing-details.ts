import { ApprovalStatus } from "../enums/approval-status";
import { ListingType } from "../enums/listing-type";
import { Status } from "../enums/status";

export interface ListingDetails {
    brokerage:             string;
    brokerage_id:          number;
    office?:               string;
    coexclusive?:          boolean;
    current_price:         number;
    details_last_updated:  Date;
    description?:          string;
    expiration_date?:      Date;
    list_date?:            Date;
    listing_type:          ListingType;
    listing_url:           string;
    original_price?:       number;
    short_description?:    string;
    showing_instructions?: string;
    status:                Status;
    approval_status:       ApprovalStatus;
    updated_at:            Date;
    buyer_commission?:     number;
    commission_remarks?:   string;
    sale_date?:            Date;
    sale_price?:           number;
    contract_date?:        Date;
    contract_price?:       number;
    commission_total?:     number;
}
