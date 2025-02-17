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
    { value: 12, color: '#FF0000', legend: 'Red' },
    { value: 10, color: '#00FF00', legend: 'Green' },
    { value: 0, color: '#00FFFF', legend: 'Yellow' },
    { value: 33, color: '#0000FF', legend: 'Blue' },
  ];
}
