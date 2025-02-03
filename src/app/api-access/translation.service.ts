import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  translate(key: string): string {
    switch (key) {
      case 'CompetenceCheck':
        return 'KODE® KompetenzCheck';
      case 'CompetenceCheckPlus':
        return 'KODE® KompetenzCheck Plus';
      case 'Leadership':
        return 'KODE® Leadership';
      case 'Feedback':
        return 'KODE® Feedback';
      case 'AgileFeedback':
        return 'KODE® Agile Feedback';
      case 'YoungTalents':
        return 'KODE® Young Talents';
      default:
        return key;
    }
  }
}
