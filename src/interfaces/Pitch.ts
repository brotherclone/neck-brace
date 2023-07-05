import { PitchClass } from '../types/PitchClass';
import { ScaleInfo } from '../constants/ScaleInfo';

export interface Pitch {
  pitchClass: PitchClass;
  octave: number;
  scaleInfo?: ScaleInfo;
}
