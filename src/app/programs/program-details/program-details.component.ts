import { Component, computed, input } from '@angular/core';
import { ProgramData, CompetenceCheckData } from '../../data/program-data';
import { CompetenceCheckDetailsComponent } from '../competence-check-details/competence-check-details.component';

@Component({
  selector: 'isb-program-details',
  imports: [CompetenceCheckDetailsComponent],
  templateUrl: './program-details.component.html',
  styleUrl: './program-details.component.scss',
})
export class ProgramDetailsComponent {
  program = input<ProgramData>();
  competenceCheckDetails = computed(() => this.program() as CompetenceCheckData);
  // competenceCheckPremiumDetails = computed(() => this.program() as CompetenceCheckData);
  // leadershipDetails = computed(() => this.program() as CompetenceCheckData);
}
