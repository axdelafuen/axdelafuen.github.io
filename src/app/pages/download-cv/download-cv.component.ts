import { Component } from '@angular/core';

@Component({
  selector: 'app-download-cv',
  imports: [],
  templateUrl: './download-cv.component.html',
  styleUrl: './download-cv.component.css'
})
export class DownloadCvComponent {
  cvs = [
    { label: 'English version', file: '/assets/pdf/CV_EN_OCT_2025_DE_LA_FUENTE_Axel.pdf' },
    { label: 'French version', file: '/assets/pdf/CV_FR_OCT_2025_DE_LA_FUENTE_Axel.pdf' }
  ];
  lastUpdated = 'October 2025';
}
