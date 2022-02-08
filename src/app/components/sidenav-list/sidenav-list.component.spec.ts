import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponent } from './sidenav-list.component';

function getParentElementByLabel(spanElements: HTMLSpanElement[], label: string): HTMLAnchorElement | null {
  const span = spanElements.filter(
    element => element.innerHTML.toLowerCase() === label.toLowerCase()
  )[0] as HTMLSpanElement;

  if (!span) {
    return null;
  }

  return span.parentElement as HTMLAnchorElement;
};

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;
  let spanElements: HTMLSpanElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spanElements = Array.from(fixture.nativeElement.querySelectorAll('span')) as HTMLSpanElement[];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSideNavClose', () => {
    it('should emit from sideNavClose when called', () => {
      jest.spyOn(component.sideNavClose, 'emit');

      component.onSideNavClose();

      expect(component.sideNavClose.emit).toHaveBeenCalledWith();
    });

    it('should call onSideNavClose when the Home list item is clicked', () => {
      jest.spyOn(component, 'onSideNavClose');
      const homeListItemAnchor = getParentElementByLabel(spanElements, 'Home') as HTMLAnchorElement;

      homeListItemAnchor.click();

      expect(component.onSideNavClose).toHaveBeenCalledTimes(1);
    });

    it('should call onSideNavClose when the "Sales" list item is clicked', () => {
      jest.spyOn(component, 'onSideNavClose');
      const salesListItemAnchor = getParentElementByLabel(spanElements, 'Sales') as HTMLAnchorElement;

      salesListItemAnchor.click();

      expect(component.onSideNavClose).toHaveBeenCalledTimes(1);
    });

    it('should call onSideNavClose when the "Rentals" list item is clicked', () => {
      jest.spyOn(component, 'onSideNavClose');
      const rentalsListItemAnchor = getParentElementByLabel(spanElements, 'Rentals') as HTMLAnchorElement;

      rentalsListItemAnchor.click();

      expect(component.onSideNavClose).toHaveBeenCalledTimes(1);
    });

    it('should call onSideNavClose when the "About" list item is clicked', () => {
      jest.spyOn(component, 'onSideNavClose');
      const aboutListItemAnchor = getParentElementByLabel(spanElements, 'About') as HTMLAnchorElement;

      aboutListItemAnchor.click();

      expect(component.onSideNavClose).toHaveBeenCalledTimes(1);
    });

    it('should call onSideNavClose when the "Team" list item is clicked', () => {
      jest.spyOn(component, 'onSideNavClose');
      const teamListItemAnchor = getParentElementByLabel(spanElements, 'Team') as HTMLAnchorElement;

      teamListItemAnchor.click();

      expect(component.onSideNavClose).toHaveBeenCalledTimes(1);
    });

    it('should call onSideNavClose when the "Contact Us" list item is clicked', () => {
      jest.spyOn(component, 'onSideNavClose');
      const contactUsListItemAnchor = getParentElementByLabel(spanElements, 'Contact Us') as HTMLAnchorElement;

      contactUsListItemAnchor.click();

      expect(component.onSideNavClose).toHaveBeenCalledTimes(1);
    });
  });
});
