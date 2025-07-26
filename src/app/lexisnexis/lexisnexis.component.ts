import { Component } from '@angular/core';

@Component({
  selector: 'app-lexisnexis',
  templateUrl: './lexisnexis.component.html',
  styleUrls: ['./lexisnexis.component.less']
})
export class LexisnexisComponent {
  achievements: string[] = [
    'Co-developed Lexis+AI, an integrated AI solution for legal research and drafting.',
    'Revamped application to Protégé, focusing on modular design for Drafting Mode.',
    'Refactored monolithic components into microservices to improve scalability.',
    'Designed and implemented optimized CI/CD pipelines enabling one-click deployment.',
    'Mentored new graduate hires to support onboarding and technical upskilling.'
  ];
  skills: string[] = [
    'Angular/Tpescript',
    'HTML/CSS',
    'Microservices Architecture',
    'CI/CD Pipelines',
    'Azure DevOps',
    'Agile Methodologies',
    'Unit Testing',
    'Code Reviews',
    'Mentorship and Training'
  ];

  location: string = 'LexisNexis, Umhlanga, South Africa';
  position: string = 'Software Engineer II';
  duration: string = 'July 2023 - June 2025';
}
