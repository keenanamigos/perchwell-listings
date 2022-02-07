export interface BuildingDetails {
    building_class:        string;
    building_name?:        string;
    flip_tax_pct?:         number;
    total_stories:         number;
    total_units:           number;
    year_built:            number;
    lot_width:             string;
    lot_depth:             string;
    flip_tax_description?: string;
}
