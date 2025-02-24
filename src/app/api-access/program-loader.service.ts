import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap } from 'rxjs';
import { ProgramInfo } from '../data/program-info';
import { ProgramType } from '../data/program-type.enum';
import { ProgramState } from '../data/program-state.enum';
import { CompetenceCheckData, ProgramData } from '../data/program-data';

@Injectable({ providedIn: 'root' })
export class ProgramLoaderService {
  getProgramInfos(): Observable<ProgramInfo[]> {
    const programInfos: ProgramInfo[] = [
      {
        id: '1',
        programType: ProgramType.CompetenceCheck,
        programState: ProgramState.InProgress,
        name: 'Cornerstone Module',
        startDate: new Date('2025-01-28'),
        activationDate: new Date('2025-01-29'),
      },
      {
        id: '2',
        programType: ProgramType.CompetenceCheckPremium,
        programState: ProgramState.NotActivated,
        name: 'Feedback Team',
        startDate: new Date('2025-01-28'),
        activationDate: null,
      },
      {
        id: '3',
        programType: ProgramType.Leadership,
        programState: ProgramState.Completed,
        name: 'Führungskräfte',
        startDate: new Date('2024-06-28'),
        activationDate: new Date('2024-06-30'),
      },
      {
        id: '4',
        programType: ProgramType.AgileFeedback,
        programState: ProgramState.InProgress,
        name: 'Agiles Feedback Team',
        startDate: new Date('2025-01-28'),
        activationDate: new Date('2025-01-30'),
      },
    ];
    return of(programInfos).pipe(delay(200));
  }

  getProgramData(id: string): Observable<ProgramData | null> {
    return this.getProgramType(id).pipe(
      switchMap(programType => this.getProgramDataFromType(id, programType)),
    );
  }

  private getProgramDataFromType(
    id: string,
    programType: ProgramType,
  ): Observable<ProgramData | null> {
    switch (programType) {
      case ProgramType.CompetenceCheck:
        return this.getCompetenceCheckData(id);
      case ProgramType.CompetenceCheckPremium:
        return this.getCompetenceCheckPremiumData(id);
      default:
        return of(null).pipe(delay(200));
    }
  }

  private getCompetenceCheckData(id: string): Observable<CompetenceCheckData> {
    return of({
      id: id,
      programType: ProgramType.CompetenceCheck,
      programState: ProgramState.InProgress,
      name: 'Cornerstone Module',
      startDate: new Date('2025-01-28'),
      activationDate: new Date('2025-01-29'),
      endDate: new Date('2025-02-28'),
      organizationName: 'Cornerstone',
      numberOfParticipants: 14,
      allowThirdPartyAssessment: true,
      profileInfos: [{ id: '1', name: 'Interkulturelle Kompetenz' }],
      statistics: {
        numberOfParticipantsFinished: 8,
        numberOfParticipantsStarted: 4,
        numberOfParticipantsRegistered: 2,
        numberOfParticipantsNotRegistered: 3,
      },
    }).pipe(delay(200));
  }

  private getCompetenceCheckPremiumData(id: string): Observable<CompetenceCheckData> {
    return of({
      id: id,
      programType: ProgramType.CompetenceCheckPremium,
      programState: ProgramState.NotActivated,
      name: 'Feedback Team',
      startDate: new Date('2025-02-06'),
      activationDate: null,
      endDate: new Date('2025-03-06'),
      organizationName: 'Cornerstone',
      numberOfParticipants: 8,
      allowThirdPartyAssessment: true,
      profileInfos: [
        { id: '1', name: 'Interkulturelle Kompetenz' },
        { id: '2', name: 'Führungskompetenz' },
        { id: '3', name: 'Vertriebs- und Verhandlungskompetenz' },
        { id: '4', name: 'Selbstentwicklungskompetenz' },
      ],
      statistics: {
        numberOfParticipantsFinished: 8,
        numberOfParticipantsStarted: 4,
        numberOfParticipantsRegistered: 2,
        numberOfParticipantsNotRegistered: 5,
      },
    }).pipe(delay(200));
  }

  getProgramType(id: string): Observable<ProgramType> {
    switch (id) {
      case '1':
        return of(ProgramType.CompetenceCheck).pipe(delay(200));
      case '2':
        return of(ProgramType.CompetenceCheckPremium).pipe(delay(200));
      case '3':
        return of(ProgramType.Leadership).pipe(delay(200));
      case '4':
        return of(ProgramType.AgileFeedback).pipe(delay(200));
      default:
        return of(ProgramType.CompetenceCheck).pipe(delay(200));
    }
  }
}
