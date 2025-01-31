import { DatePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';

export enum ProgramState {
  NotActivated = 'NotActivated',
  InProgress = 'InProgress',
  Completed = 'Completed',
}

@Component({
  selector: 'isb-program-list-entry',
  imports: [DatePipe],
  templateUrl: './program-list-entry.component.html',
  styleUrl: './program-list-entry.component.scss',
  host: {
    '[class.error]': 'programState() === "NotActivated"',
    '[class.warning]': 'programState() === "Completed"',
  },
})
export class ProgramListEntryComponent {
  programTypeImage = input('competence-check.jpg');
  programName = input('Cornerstone Module');
  programTypeName = input('KODE® KompetenzCheck');
  programStartDate = input('01.01.2021');
  programState = input(ProgramState.NotActivated);
  programActivationDate = input('01.01.2021');
}
