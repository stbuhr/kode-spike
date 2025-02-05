import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ProgramInfo } from '../data/program-info';
import { ProgramType } from '../data/program-type.enum';
import { ProgramState } from '../data/program-state.enum';

@Injectable({ providedIn: 'root' })
export class ProgramLoaderService {
  getProgramInfos(): Observable<ProgramInfo[]> {
    const programInfos: ProgramInfo[] = [
      {
        programType: ProgramType.CompetenceCheck,
        programState: ProgramState.InProgress,
        name: 'Cornerstone Module',
        startDate: new Date('2025-01-28'),
        activationDate: new Date('2025-01-29'),
      },
      {
        programType: ProgramType.CompetenceCheckPremium,
        programState: ProgramState.NotActivated,
        name: 'Feedback Team',
        startDate: new Date('2025-01-28'),
        activationDate: null,
      },
      {
        programType: ProgramType.Leadership,
        programState: ProgramState.Completed,
        name: 'Führungskräfte',
        startDate: new Date('2024-06-28'),
        activationDate: new Date('2024-06-30'),
      },
      {
        programType: ProgramType.AgileFeedback,
        programState: ProgramState.InProgress,
        name: 'Agiles Feedback Team',
        startDate: new Date('2025-01-28'),
        activationDate: new Date('2025-01-30'),
      },
    ];
    return of(programInfos).pipe(delay(1000));
  }
}
