import { Component } from '@angular/core';
import {
  CircleDiagramComponent,
  CircleDiagramSegment,
} from '../controls/circle-diagram/circle-diagram.component';

@Component({
  selector: 'isb-dashboard',
  imports: [CircleDiagramComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  segments: CircleDiagramSegment[] = [
    { value: 12, color: '#00CC99', legend: 'Fertiggestellt' },
    { value: 10, color: '#F16D49', legend: 'Angefangen' },
    { value: 0, color: '#FFB349', legend: 'Angemeldet' },
    { value: 33, color: '#BCBCBC', legend: 'Nicht angemeldet' },
  ];
}
