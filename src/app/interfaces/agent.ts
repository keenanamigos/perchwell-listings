import { Title } from "../enums/title";

export interface Agent {
    email:         string;
    first_name:    string;
    image_url?:    string;
    last_name:     string;
    phone:         string;
    office_phone?: string;
    cell_phone?:   string;
    title?:        Title;
    url?:          string;
}
