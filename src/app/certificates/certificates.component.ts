import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.less']
})
export class CertificatesComponent {
certificatesList: string[] = [
    'Angular - The Complete Guide (2024 Edition) by Maximilian Schwarzmuller',
    'RxJS 7 and Observables Introduction',
    '.NET Core MVC - The Complete Guide 2024 [E-commerce] [.NET8]',
    'C# Basics for Beginners Learn C# Fundamentals by Coding By Mosh',
    'C# Intermediate Classes, Interfaces and OOP By Mosh',
    'C# Advanced Topics Prepare for Technical Interviews By Mosh',
    'Data Structures and Algorithms In Depth using C#',
    'Jenkins, From Zero to Hero: Become a DevOps Jenkins Master '
  ];
}
