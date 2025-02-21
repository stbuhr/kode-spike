import { Component, computed, input, linkedSignal, signal } from '@angular/core';

export class CircleDiagramSegment {
  value = 1;
  color = '#0F0F0F';
  legend = '';
}

@Component({
  selector: 'isb-circle-diagram',
  imports: [],
  templateUrl: './circle-diagram.component.html',
  styleUrl: './circle-diagram.component.scss',
})
export class CircleDiagramComponent {
  values = input<CircleDiagramSegment[]>([]);
  segments = computed(() => {
    return [
      { dasharray: '502.4 1000', color: 'red', label: 'red' },
      { dasharray: '350 1000', color: 'green', label: 'green' },
      { dasharray: '180 1000', color: 'blue', label: 'blue' },
    ];
  });
}
