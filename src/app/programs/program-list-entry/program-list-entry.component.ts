import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ProgramInfo } from '../../data/program-info';
import { TranslationService } from '../../api-access/translation.service';
import { ProgramType } from '../../data/program-type.enum';

@Component({
  selector: 'isb-program-list-entry',
  imports: [DatePipe],
  templateUrl: './program-list-entry.component.html',
  styleUrl: './program-list-entry.component.scss',
  host: {
    '[class.error]': 'programState() === "NotActivated"',
    '[class.inactive]': 'programState() === "Completed"',
  },
})
export class ProgramListEntryComponent {
  programInfo = input<ProgramInfo>();

  programTypeImage = computed(() =>
    this.getProgramTypeImageName(this.programInfo()?.programType),
  );
  programName = computed(() => this.programInfo()?.name);
  programTypeName = computed(() =>
    this.translationService.translate(this.programInfo()?.programType ?? ''),
  );
  programStartDate = computed(() => this.programInfo()?.startDate);
  programState = computed(() => this.programInfo()?.programState);
  programActivationDate = computed(() => this.programInfo()?.activationDate);
  countOfPrograms = input<number>(0);

  constructor(private translationService: TranslationService) {}

  getProgramTypeImageName(programType: ProgramType | undefined): string {
    switch (programType) {
      case ProgramType.CompetenceCheck:
        return 'competence-check.jpg';
      case ProgramType.CompetenceCheckPlus:
        return 'competence-check-plus.jpg';
      case ProgramType.Leadership:
        return 'leadership.jpg';
      case ProgramType.AgileFeedback:
        return 'agile-feedback.jpg';
      case ProgramType.YoungTalents:
        return 'young-talents.jpg';
      default:
        return 'none.jpg';
    }
  }
}
