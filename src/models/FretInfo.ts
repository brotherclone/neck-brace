import { Pitch } from '../interfaces/Pitch';
import { PitchClass } from '../types/PitchClass';
import { PitchToScaleRelationship } from '../constants/PitchToScaleRelationship';

export class FretInfo implements Pitch {
  pitchClass: PitchClass;
  scaleInfo?: PitchToScaleRelationship;
  octave: number;
  stringName: string;
  fretNumber: number;
  fretName: string;
  constructor(
    pitchClass: PitchClass,
    octave: number,
    stringName: string,
    fretNumber: number,
    fretName: string,
    scaleInfo?: PitchToScaleRelationship
  ) {
    this.pitchClass = pitchClass;
    this.scaleInfo = scaleInfo;
    this.octave = octave;
    this.stringName = stringName;
    this.fretNumber = fretNumber;
    this.fretName = fretName;
  }
}
