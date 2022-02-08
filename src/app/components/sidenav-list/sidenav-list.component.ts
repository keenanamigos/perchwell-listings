import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {
  @Output()
  sideNavClose = new EventEmitter();

  onSideNavClose(): void {
    this.sideNavClose.emit();
  }
}
