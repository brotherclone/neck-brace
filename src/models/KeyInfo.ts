import { PitchClass } from '../types/PitchClass';
import { PitchToScaleRelationship } from '../constants/PitchToScaleRelationship';

export enum KeyBoardKeyColor {
  White = 'white',
  Black = 'black',
}

export class KeyInfo {
  name: string;
  pitchClass: PitchClass;
  octave: number;
  keyColor?: KeyBoardKeyColor;
  scaleInfo?: PitchToScaleRelationship;
  constructor(
    name: string,
    pitchClass: PitchClass,
    octave: number,
    keyColor?: KeyBoardKeyColor,
    scaleInfo?: PitchToScaleRelationship
  ) {
    this.name = name;
    this.pitchClass = pitchClass;
    this.octave = octave;
    this.keyColor = keyColor ? keyColor : KeyBoardKeyColor.White;
    this.scaleInfo = scaleInfo ? scaleInfo : PitchToScaleRelationship.NotSet;
  }
}
