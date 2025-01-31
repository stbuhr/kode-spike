import { Component } from '@angular/core';
import { ProgramListEntryComponent } from './program-list-entry/program-list-entry.component';

@Component({
  selector: 'isb-programs',
  imports: [ProgramListEntryComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
})
export class ProgramsComponent {}
