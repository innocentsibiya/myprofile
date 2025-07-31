import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu-side',
  templateUrl: './navigation-menu-side.component.html',
  styleUrls: ['./navigation-menu-side.component.less']
})
export class NavigationMenuSideComponent {
    menuItems = [
    { label: 'Personal Information', link: '/personalinfo', icon: 'assets/images/user.png' },
    { label: 'Technical Skills', link: '/skills', icon: 'assets/images/skills.png' },
    { label: 'Integrity', link: '/integrity', icon: 'assets/images/integrity.png' },
    { label: 'LexisNexis', link: '/lexisnexis', icon: 'assets/images/lexisnexis.png' },
    { label: 'Tucana', link: '/tucana', icon: 'assets/images/tucana.png' },
    { label: 'Education', link: '/education', icon: 'assets/images/education.png' },
    { label: 'Certifications', link: '/certificates', icon: 'assets/images/certificates.png' },
    { label: 'References', link: '/references', icon: 'assets/images/references.png' }
  ];

  activeLink: string = '';

  setActive(link: string) {
    this.activeLink = link;
  }

  getActiveLink(): string {
    return this.activeLink;
  }
}
