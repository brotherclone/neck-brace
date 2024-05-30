import { FretInfo } from './FretInfo';
import { Pitches } from '../constants/Pitches';
import { PitchToScaleRelationship } from '../constants/PitchToScaleRelationship';
import { PitchClass } from '../types/PitchClass';

export class StringInfo {
  fretCount: number;
  frets: FretInfo[] = [];
  openNote: FretInfo;
  built = false;
  name: string;

  constructor(
    fretCount: number,
    openNote: FretInfo,
    name: string,
    suppliedFrets?: FretInfo[]
  ) {
    this.fretCount = fretCount;
    if (suppliedFrets) {
      this.frets = suppliedFrets;
      this.built = true;
    }
    this.name = name;
    this.openNote = openNote;
  }
  buildString() {
    let pitchTracker = this.openNote.pitchClass.integerNotation;
    let octaveTracker = this.openNote.octave;
    if (!this.built) {
      for (let i = 1; i < this.fretCount; i++) {
        if (pitchTracker + 1 < Pitches.length) {
          pitchTracker++;
        } else {
          octaveTracker++;
          pitchTracker = 0;
        }
        const newFret: FretInfo = {
          octave: octaveTracker,
          pitchClass: Pitches[pitchTracker],
          fretName: `${this.name} - Fret ${i}`,
          fretNumber: i,
          stringName: this.name,
          hidden: false,
          //hidden: this.openNote.fretNumber > 0 && i < this.openNote.fretNumber,
        };
        this.frets.push(newFret);
      }
    }
    this.built = true;
  }

  setScale(pitches: PitchClass[]) {
    for (let f = 0; f < this.frets.length; f++) {
      this.frets[f].scaleInfo = PitchToScaleRelationship.NotSet;
      const checkFilter = pitches.filter(
        (pitch) =>
          pitch.integerNotation === this.frets[f].pitchClass.integerNotation
      );
      const check: boolean = checkFilter.length > 0;
      if (check) {
        this.frets[f].scaleInfo = PitchToScaleRelationship.Tonic;
      } else {
        this.frets[f].scaleInfo = PitchToScaleRelationship.Chromatic;
      }
    }
  }
}
