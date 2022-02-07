import { Configuration } from "../enums/configuration";
import { Furnished } from "../enums/furnished";
import { GeneralCondition } from "../enums/general-condition";
import { PropertyType } from "../enums/property-type";

export interface UnitDetails {
    beds:                number;
    floor_number?:       number;
    full_baths:          number;
    furnished?:          Furnished;
    general_condition?:  GeneralCondition;
    half_baths:          number;
    home_offices?:       number;
    maint_cc:            number;
    property_type:       PropertyType;
    real_estate_tax:     number;
    total_monthlies:     number;
    sqft?:               number;
    total_rooms?:        number;
    unit_number?:        string;
    width:               string;
    configuration?:      Configuration;
    max_financing_pct?:  number;
    pct_tax_deductable?: number;
    exterior_sqft?:      number;
}
