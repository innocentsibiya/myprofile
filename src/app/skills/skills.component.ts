import { Component } from '@angular/core';

interface SkillItem {
  title: string;
  names: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {
  skillsList: SkillItem[] = [
    {
      title: 'Languages & Frameworks',
      names: 'C#, .NET, Angular, Typescript, HTML/CSS, Node.js, Bootstrap'
    },
    {
      title: 'Databases',
      names: 'SQL Server, PostgreSQL, Oracle SQL, PLSQL, MongoDB'
    },
    {
      title: 'Tools & Platforms',
      names: 'Git, GitHub, Azure DevOps, Postman, IIS, BI Publisher, Oracle Forms, JSON, YAML, XML'
    },
    {
      title: 'DevOps',
      names: 'CI/CD, Jenkins, Azure DevOps Pipelines'
    }
  ];
}
