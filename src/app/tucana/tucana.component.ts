import { Component } from '@angular/core';

@Component({
  selector: 'app-tucana',
  templateUrl: './tucana.component.html',
  styleUrls: ['./tucana.component.less']
})
export class TucanaComponent {
  achievements: string[] = [
    'Optimized SQL queries, reducing billing generation from 24+ hours to minutes.',
    'Developed communications features in the HIP system used by multiple scheme members.',
    'Actively maintained and expanded core system features.',
    'Contributed to urgent production issue resolutions.',
    'Participated in project estimation and requirement planning.',
    'Mentored new graduate hires to support onboarding and technical upskilling.'
  ];
  skills: string[] = [
    'PL\SQL',
    'Oracle Database',
    'HTML/CSS',
    'Apex',
    'JavaScript',
    'BI Publisher',
    'Agile Methodologies',
    'Unit Testing',
    'Code Reviews',
    'Mentorship and Training'
  ];

  location: string = '2Cana Solutions, Umhlanga, South Africa';
  position: string = 'Junior Software Developer';
  duration: string = 'Jan 2020 - Apr 2023';
}
