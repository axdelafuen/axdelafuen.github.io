import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Maui.XaleToolkit',
      description: 'Trying to implement some natives features of Android / Windows / iOS in .NET MAUI.',
      technologies: ['C#', '.NET', 'MAUI'],
      githubUrl: 'https://github.com/axdelafuen/maui-xale-toolkit',
    },
    {
      title: 'Shizima',
      description: 'Shazam-like music recognition app.',
      technologies: ['C#', '.NET', 'Swift', "NextJS" , "Go"],
      githubUrl: 'https://github.com/iftlp',
    },
    {
      title: 'boardshelfd',
      description: 'Track, review, and discover board games.',
      technologies: ['Angular', 'C#', '.NET'],
      githubUrl: 'https://github.com/boardshelfd',
    },
    {
      title: 'Vampire Survivors Compagnon',
      description: 'Windows native app that help you during your Vampire Survivors adventure.',
      technologies: ['C#', '.NET', 'WPF'],
      githubUrl: 'https://github.com/axdelafuen/vampire-survivors-compagnon',
    },
    {
      title: 'pocketlib',
      description: 'Book management application, following the MVVM design pattern.',
      technologies: ['C#', '.NET', 'MAUI'],
      githubUrl: 'https://github.com/axdelafuen/pocketlib',
    },
    {
      title: 'archivr',
      description: 'Application that allows you to craft immersive experiences from 360-degree images.',
      technologies: ['PHP', 'A-Frame', 'JS'],
      githubUrl: 'https://github.com/axdelafuen/archivr',
    }
  ];
}