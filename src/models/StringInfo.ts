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
    this.frets.push(this.openNote);
    if (!this.built) {
      for (let i = this.openNote.fretNumber + 1; i < this.fretCount; i++) {
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
        };
        this.frets.push(newFret);
      }
    }
    if (this.openNote.fretNumber !== 0) {
      this.backFillFrets();
    }
    this.built = true;
  }
  backFillFrets() {
    for (let i = 0; i < this.openNote.fretNumber; i++) {
      const newFret: FretInfo = {
        octave: this.openNote.octave,
        pitchClass: Pitches[this.openNote.pitchClass.integerNotation],
        fretName: 'hidden fret',
        fretNumber: i,
        stringName: this.name,
        hidden: true,
      };
      this.frets.unshift(newFret);
    }
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
