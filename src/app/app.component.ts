import { Component, ViewChild } from '@angular/core';
import { NavigationMenuSideComponent } from './navigation-menu-side/navigation-menu-side.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myprofile';
  @ViewChild(NavigationMenuSideComponent)
  navMenu!: NavigationMenuSideComponent;

  // Example: method to get the active link
  get currentActiveLink(): string {
    return this.navMenu ? this.navMenu.getActiveLink() : '';
  }
}
