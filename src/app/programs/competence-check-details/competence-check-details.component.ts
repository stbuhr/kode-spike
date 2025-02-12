import { Component, computed, input } from '@angular/core';
import { CompetenceCheckData } from '../../data/program-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'isb-competence-check-details',
  imports: [DatePipe],
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
}
