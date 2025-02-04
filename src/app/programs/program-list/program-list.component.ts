import { Component, input } from '@angular/core';
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
}
