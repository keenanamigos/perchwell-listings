import { Component, Input } from '@angular/core';
import { ListingElement } from 'src/app/interfaces/listing-element';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent {
  @Input()
  listing!: ListingElement
}
