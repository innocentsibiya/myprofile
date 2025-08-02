import { Component, ViewChild } from '@angular/core';
import { NavigationMenuSideComponent } from './navigation-menu-side/navigation-menu-side.component';
import { ThemeService } from './services/themetoggler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myprofile';
  @ViewChild(NavigationMenuSideComponent) navMenu!: NavigationMenuSideComponent;

  /**
   *
   */
  constructor(public themeService: ThemeService) {
    
  }

 toggleTheme() {
    this.themeService.toggleTheme();
  }

  get currentActiveLink(): string {
    return this.navMenu ? this.navMenu.getActiveLink() : '';
  }
}
