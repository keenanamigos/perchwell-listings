import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output()
  sideNavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSideNavClose(): void {
    this.sideNavClose.emit();
  }
}
