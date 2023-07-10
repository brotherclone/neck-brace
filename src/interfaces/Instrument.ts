import { Pitch } from './Pitch';

export interface Instrument {
  polyphonic: boolean;
  displayName: string;
  pitchRange?: Pitch[];
}
