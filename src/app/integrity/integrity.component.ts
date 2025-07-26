import { Component } from '@angular/core';

@Component({
  selector: 'app-integrity',
  templateUrl: './integrity.component.html',
  styleUrls: ['./integrity.component.less']
})
export class IntegrityComponent {
  achievements: string[] = [
    'Leading migration of legacy VB components into modern C# backend and React frontend.',
    'Collaborating cross-functionally to ensure scalable architecture and performance.'
  ];
  skills: string[] = [
    'React/TypeScript',
    'HTML/CSS',
    'VB.Net',
    'C#',
    'CI/CD Pipelines',
    'Azure DevOps',
    'Agile Methodologies',
    'Unit Testing',
    'Code Reviews'
  ];

  location: string = 'Integrity Software, Kloof, South Africa';
  position: string = 'Senior Software Engineer';
  duration: string = 'July 2025 - Present';
}
