import { Component } from '@angular/core';

interface EducationItem {
  title: string;
  duration: string;
  name?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent {
   educationList: EducationItem[] = [
    {
      title: 'BCom Honours in Information Systems & Technology',
      duration: '2019',
      name: 'University of KwaZulu-Natal'
    },
        {
      title: 'BSc in Computer Science and Information Technology',
      duration: '2016 - 2018'
    },
    {
      title: 'Matriculation',
      duration: '2012 - 2015',
      name:'Aquadene Secondary School'
    }
  ];
}
