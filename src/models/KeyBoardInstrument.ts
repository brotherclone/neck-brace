import { Instrument } from '../interfaces/Instrument';
import { KeyBoardKeyColor, KeyInfo } from './KeyInfo';
import { PitchClass } from '../types/PitchClass';
import { Pitches } from '../constants/Pitches';
import { whiteKeys } from '../constants/Keys';
import { PitchToScaleRelationship } from '../constants/PitchToScaleRelationship';

export class KeyBoardInstrument implements Instrument {
  polyphonic = true;
  displayName: string;
  startingPitch: PitchClass;
  octaveCount: number;
  keys: KeyInfo[];
  built: boolean;
  constructor(
    displayName: string,
    startingPitch: PitchClass,
    octaveNumber: number
  ) {
    this.displayName = displayName;
    this.startingPitch = startingPitch;
    this.octaveCount = octaveNumber;
    this.built = false;
    this.keys = [];
  }
  buildKeys() {
    let pitchTracker = this.startingPitch.integerNotation;
    let octaveTracker = this.octaveCount;
    if (!this.built) {
      for (let i = 0; i < 12; i++) {
        if (pitchTracker + 1 < 12) {
          pitchTracker++;
        } else {
          octaveTracker++;
          pitchTracker = 0;
        }
        const newKey: KeyInfo = {
          octave: octaveTracker,
          pitchClass: Pitches[pitchTracker],
          name: 'Key',
        };
        if (whiteKeys.includes(i + 1)) {
          newKey.keyColor = KeyBoardKeyColor.White;
        } else {
          newKey.keyColor = KeyBoardKeyColor.Black;
        }
        this.keys?.push(newKey);
      }
    }
  }
  setScale(pitches: PitchClass[]) {
    for (let k = 0; k < this.keys.length; k++) {
      this.keys[k].scaleInfo = PitchToScaleRelationship.NotSet;
      const checkFilter = pitches.filter(
        (pitch) =>
          pitch.integerNotation === this.keys[k].pitchClass.integerNotation
      );
      const check: boolean = checkFilter.length > 0;
      if (check) {
        this.keys[k].scaleInfo = PitchToScaleRelationship.Tonic;
      } else {
        this.keys[k].scaleInfo = PitchToScaleRelationship.Chromatic;
      }
    }
  }
}
