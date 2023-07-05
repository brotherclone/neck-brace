import { Pitch } from '../interfaces/Pitch';
import { PitchClass } from '../types/PitchClass';
import { ScaleInfo } from '../constants/ScaleInfo';

export class FretInfo implements Pitch {
  pitchClass: PitchClass;
  scaleInfo?: ScaleInfo;
  octave: number;

  constructor(pitchClass: PitchClass, octave: number, scaleInfo?: ScaleInfo) {
    this.pitchClass = pitchClass;
    this.scaleInfo = scaleInfo;
    this.octave = octave;
  }
}
