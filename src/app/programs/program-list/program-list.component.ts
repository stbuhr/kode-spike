import { Component, computed, input, output, signal } from '@angular/core';
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

  toggleOpen() {
    this.isOpen.set(!this.isOpen());
  }
  selectInfo(info: ProgramInfo) {
    this.selectedInfo.set(info);
    this.isOpen.set(false);
    this.selectionChanged.emit(info);
  }
}
