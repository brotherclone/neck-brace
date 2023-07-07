import { FretInfo } from '../models/FretInfo';
import { Pitches } from './Pitches';

export const StandardGuitarTuning: FretInfo[] = [
  {
    octave: 2,
    pitchClass: Pitches[4],
    stringName: 'Low E, Standard Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 2,
    pitchClass: Pitches[9],
    stringName: 'A, Standard Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 3,
    pitchClass: Pitches[2],
    stringName: 'D, Standard Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 3,
    pitchClass: Pitches[7],
    stringName: 'G, Standard Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 3,
    pitchClass: Pitches[11],
    stringName: 'B, Standard Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 4,
    pitchClass: Pitches[4],
    stringName: 'High E, Standard Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
];
