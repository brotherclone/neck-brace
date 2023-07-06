import { PitchClass } from '../types/PitchClass';
import { PitchToScaleRelationship } from '../constants/PitchToScaleRelationship';

export interface Pitch {
  pitchClass: PitchClass;
  octave: number;
  scaleInfo?: PitchToScaleRelationship;
}
