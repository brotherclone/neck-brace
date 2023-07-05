import { FretInfo } from './FretInfo';
import { Pitches } from '../constants/Pitches';
import { ScaleInfo } from '../constants/ScaleInfo';

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
    let pitchTracker = 0;
    let octaveTracker = 0;
    if (!this.built) {
      for (let i = 0; i < this.fretCount; i++) {
        if (i === 0) {
          this.frets.push(this.openNote);
          pitchTracker = this.openNote.pitchClass.integerNotation;
          octaveTracker = this.openNote.octave;
        } else {
          if (pitchTracker + 1 < Pitches.length) {
            pitchTracker++;
          } else {
            octaveTracker++;
            pitchTracker = 0;
          }
          const newFret: FretInfo = {
            octave: octaveTracker,
            pitchClass: Pitches[pitchTracker],
          };
          this.frets.push(newFret);
        }
      }
    }
    this.built = true;
  }
  setScale(intervals: number[]) {
    for (let f = 0; f < this.frets.length; f++) {
      const check = intervals.indexOf(this.frets[f].pitchClass.integerNotation);
      if (check > -1) {
        this.frets[f].scaleInfo = ScaleInfo.Tonic;
      } else {
        this.frets[f].scaleInfo = ScaleInfo.Chromatic;
      }
    }
  }
}
