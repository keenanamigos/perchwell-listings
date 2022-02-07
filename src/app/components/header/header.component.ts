import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  sideNavToggle = new EventEmitter();

  onToggleSideNav(): void {
    this.sideNavToggle.emit();
  }
}
