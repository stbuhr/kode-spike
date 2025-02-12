import { Component, computed, ElementRef, input, output, signal, viewChild } from '@angular/core';
import { ProgramInfo } from '../../data/program-info';
import { ProgramListEntryComponent } from '../program-list-entry/program-list-entry.component';

@Component({
  selector: 'isb-program-list',
  imports: [ProgramListEntryComponent],
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.scss',
})
export class ProgramListComponent {
  programInfos = input.required<ProgramInfo[]>();
  selectionChanged = output<ProgramInfo>();
  selectedInfo = signal<ProgramInfo | undefined>(undefined);
  isOpen = signal(false);
  countOfInfos = computed(() => this.programInfos().length);
  container = viewChild.required<ElementRef>('container');

  constructor(private elementRef: ElementRef) {}

  toggleOpen() {
    this.isOpen.set(!this.isOpen());
    this.scrollIntoView();
  }

  selectInfo(info: ProgramInfo) {
    this.selectedInfo.set(info);
    this.isOpen.set(false);
    this.selectionChanged.emit(info);
    this.scrollIntoView();
    this.focusTop();
  }

  scrollIntoView() {
    const item = this.elementRef.nativeElement.querySelector('[role="button"]');
    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  focusOut(event: FocusEvent) {
    if (!this.elementRef.nativeElement.contains(event.relatedTarget as Node)) {
      this.isOpen.set(false);
    }
  }

  focusTop() {
    const item = this.elementRef.nativeElement.querySelector('[role="button"]');
    item.focus();
  }

  focusFirst(event: Event) {
    this.isOpen.set(true);
    const items = this.elementRef.nativeElement.querySelectorAll('.drop-down-item');
    items[0].focus();

    event.preventDefault();
  }

  focusPrev(event: Event) {
    const target = event.target as HTMLElement;
    const items = this.elementRef.nativeElement.querySelectorAll('.drop-down-item');
    const index = Array.from(items).indexOf(target);

    if (index > 0) {
      items[index - 1].focus();
    } else if (index === 0) {
      this.focusTop();
    }

    event.preventDefault();
  }

  focusNext(event: Event) {
    const target = event.target as HTMLElement;
    const items = this.elementRef.nativeElement.querySelectorAll('.drop-down-item');
    const index = Array.from(items).indexOf(target);

    if (index !== -1 && index < items.length - 1) {
      items[index + 1].focus();
    }

    event.preventDefault();
  }
}
