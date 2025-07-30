import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuSideComponent } from './navigation-menu-side.component';

describe('NavigationMenuSideComponent', () => {
  let component: NavigationMenuSideComponent;
  let fixture: ComponentFixture<NavigationMenuSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationMenuSideComponent]
    });
    fixture = TestBed.createComponent(NavigationMenuSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
