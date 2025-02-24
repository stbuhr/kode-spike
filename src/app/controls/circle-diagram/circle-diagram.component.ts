import { Component, computed, input } from '@angular/core';

export class CircleDiagramSegment {
  value = 1;
  color = '#0F0F0F';
  legend = '';
}

class LineSegment {
  index = 0;
  dasharray = '0 1000';
  color = '#0F0F0F';
  label = '';
}

@Component({
  selector: 'isb-circle-diagram',
  imports: [],
  templateUrl: './circle-diagram.component.html',
  styleUrl: './circle-diagram.component.scss',
})
export class CircleDiagramComponent {
  strokeWidth = input(40);
  inactiveColor = input('#E0E0E0');
  values = input<CircleDiagramSegment[]>([]);
  radius = computed(() => 100 - this.strokeWidth() / 2);
  fullArc = computed(() => Math.PI * 2 * this.radius());
  segments = computed(() => {
    const total = this.values().reduce((acc, segment) => acc + segment.value, 0);
    return this.values()
      .reduce((acc: any, segment, index) => {
        acc.push({
          index: index,
          value: (acc[index - 1]?.value || 0) + segment.value,
          dasharray: this.getLineArray((acc[index - 1]?.value || 0) + segment.value, total),
          color: segment.color,
          label: segment.legend,
        });
        return acc;
      }, [] as LineSegment[])
      .reverse();
  });

  getLineArray = (value: number, total: number) => `${(value / total) * this.fullArc()} 1000`;
}
