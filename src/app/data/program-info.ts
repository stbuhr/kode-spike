import { ProgramType } from './program-type.enum';
import { ProgramState } from './program-state.enum';

export interface ProgramInfo {
  programType: ProgramType;
  programState: ProgramState;
  name: string;
  startDate: Date;
  activationDate: Date | null;
}
