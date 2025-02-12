import { ProgramInfo } from './program-info';

export interface ProfileInfo {
  id: string;
  name: string;
}

export interface ProgramData extends ProgramInfo {
  endDate: Date | null;
  organizationName: string;
  numberOfParticipants: number;
}

export interface CompetenceCheckData extends ProgramData {
  allowThirdPartyAssessment: boolean;
  profileInfos: ProfileInfo[];
}
