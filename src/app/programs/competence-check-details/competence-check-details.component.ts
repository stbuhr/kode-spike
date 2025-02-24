import { Component, computed, input } from '@angular/core';
import { CompetenceCheckData } from '../../data/program-data';
import { DatePipe } from '@angular/common';
import { CircleDiagramComponent } from '../../controls/circle-diagram/circle-diagram.component';

@Component({
  selector: 'isb-competence-check-details',
  imports: [DatePipe, CircleDiagramComponent],
  templateUrl: './competence-check-details.component.html',
  styleUrl: './competence-check-details.component.scss',
})
export class CompetenceCheckDetailsComponent {
  details = input<CompetenceCheckData>();
  startDate = computed(() => this.details()?.startDate);
  endDate = computed(() => this.details()?.endDate);
  daysLeft = computed(() => {
    if (this.endDate() === undefined) {
      return 0;
    }
    var end = this.endDate() ?? new Date();
    const days = Math.floor((end.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return days < 0 ? 0 : days;
  });
  organizationName = computed(() => this.details()?.organizationName);
  allowThirdPartyAssessment = computed(() => this.details()?.allowThirdPartyAssessment);
  profiles = computed(() => this.details()?.profileInfos);
  segments = computed(() =>
    this.details()
      ? [
          {
            value: this.details()!.statistics.numberOfParticipantsFinished,
            color: '#00CC99',
            legend: 'Fertiggestellt',
          },
          {
            value: this.details()!.statistics.numberOfParticipantsStarted,
            color: '#F16D49',
            legend: 'Angefangen',
          },
          {
            value: this.details()!.statistics.numberOfParticipantsRegistered,
            color: '#FFB349',
            legend: 'Angemeldet',
          },
          {
            value: this.details()!.statistics.numberOfParticipantsNotRegistered,
            color: '#BCBCBC',
            legend: 'Nicht angemeldet',
          },
        ]
      : [],
  );
}
