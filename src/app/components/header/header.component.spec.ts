import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onToggleSideNav', () => {
    it('should emit from sideNavToggle when called', () => {
      jest.spyOn(component.sideNavToggle, 'emit');
      
      component.onToggleSideNav();

      expect(component.sideNavToggle.emit).toHaveBeenCalledWith();
    });

    it('should call onToggleSideNav when clicked', () => {
      jest.spyOn(component, 'onToggleSideNav');
      const menuIconButton = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

      menuIconButton.click();

      expect(component.onToggleSideNav).toHaveBeenCalledWith();
    });
  });
});
