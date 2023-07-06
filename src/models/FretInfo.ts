import { Pitch } from '../interfaces/Pitch';
import { PitchClass } from '../types/PitchClass';
import { PitchToScaleRelationship } from '../constants/PitchToScaleRelationship';

export class FretInfo implements Pitch {
  pitchClass: PitchClass;
  scaleInfo?: PitchToScaleRelationship;
  octave: number;

  constructor(
    pitchClass: PitchClass,
    octave: number,
    scaleInfo?: PitchToScaleRelationship
  ) {
    this.pitchClass = pitchClass;
    this.scaleInfo = scaleInfo;
    this.octave = octave;
  }
}
