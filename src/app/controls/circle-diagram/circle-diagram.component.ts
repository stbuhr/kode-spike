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
  animationTimer: any;
  values = input<CircleDiagramSegment[]>([]);
  startValue = linkedSignal<CircleDiagramSegment[], number>({
    source: this.values,
    computation: newSource => {
      console.log('newSource', newSource);
      clearTimeout(this.animationTimer);
      const total = this.values().reduce((acc, segment) => acc + segment.value, 0);
      this.animationTimer = setInterval(() => {
        const newValue = this.startValue() - total;
        if (newValue <= 0) {
          clearTimeout(this.animationTimer);
        }
        this.startValue.set(newValue);
        console.log('newValue', newValue);
      }, 20);
      return newSource.reduce((acc, segment) => acc + segment.value, 0) * 50;
    },
  });
  segments = computed(() => {
    const values = [...this.values(), { value: this.startValue(), color: '#FFFFFF', legend: '' }];
    const total = values.reduce((acc, segment) => acc + segment.value, 0);
    let start = 0;
    return values
      .filter(segment => segment.value > 0)
      .map(segment => {
        const end = start + segment.value;
        const color = segment.color;
        if (segment.value === total) {
          return {
            path: 'M 100 100 L 100 0 A 100 100 0 0 1 100 200 A 100 100 0 0 1 100 0 Z',
            color,
          };
        }
        const path = `
        M 100 100
        L ${Math.sin((start / total) * 2 * Math.PI) * 100 + 100} ${Math.cos((start / total) * 2 * Math.PI) * -100 + 100}
        A 100 100 0 ${segment.value / total > 0.5 ? 1 : 0} 1
        ${Math.sin((end / total) * 2 * Math.PI) * 100 + 100} ${Math.cos((end / total) * 2 * Math.PI) * -100 + 100}
        Z
        `;
        start = end;
        return { path, color };
      });
  });
}
