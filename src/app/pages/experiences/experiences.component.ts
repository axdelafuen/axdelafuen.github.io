import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  experiences = [
    {
      title: 'Work-study program at the Chappes Research Center',
      company: 'Vilmorin & Cie (Limagrain) - SIS',
      period: 'Sept 2024 - Present',
      location: 'Chappes, France',
      description: 'Developer for scientific research applications created by the Chappes Research Center.',
      technologies: ['.NET', 'Angular', 'Java', 'SQL Server', 'AzureDevOps'],
      current: true,
    },
    {
      title: 'Internship at the Rilland Research Center',
      company: 'Limagrain Europe - PHIRA',
      period: 'Jul - Aug 2025',
      location: 'Rilland, Netherlands',
      description: 'Development of a mobile application for monitoring maize flowering.',
      technologies: ['MAUI', '.NET'],
      current: false,
    },
    {
      title: 'Internship at the Chappes Research Center',
      company: 'Vilmorin & Cie (Limagrain) - SIS',
      period: 'Feb - Aug 2024',
      location: 'Chappes, France',
      description: 'Developed the Business Continuity Plan (BCP) for the web application of the Chappes Research Center.',
      technologies: ['SQL Server', 'PowerShell', '.NET', 'Angular'],
      current: false,
    },
    {
      title: 'Internship at LIARA of UQAC',
      company: 'UQAC - Ambient Intelligence Laboratory for Activity Recognition',
      period: 'Jun - Aug 2023',
      location: 'Chicoutimi, Canada',
      description: 'Using sensors (accelerometer and PPG channels), we investigated which movements and activities could be detected using a smartband: Polar OH1.',
      technologies: ['Python', 'polarpy', 'tsfresh', 'sklearn'],
      current: false,
    },
    {
      title: 'Versatile employee',
      company: 'Intermaché',
      period: 'Jun - Dec 2022',
      location: 'Pont-du-Chateau, France',
      description: 'Preparing bakery products (baking and arranging bread).',
      technologies: [],
      current: false,
    },
    {
      title: 'Farm worker',
      company: 'Christophe Giraudon’s farm',
      period: 'Summer 2018, 2019, 2020, 2021',
      location: 'Vertaizon, France',
      description: 'Corn detasseling & harvesting garlic, onions, and strawberries',
      technologies: [],
      current: false,
    },
  ];
}
