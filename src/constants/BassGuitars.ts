import { StringedInstrument } from '../models/StringedInstrument';
import { Hand, InstrumentOrientation, PolyPhonicPlayMode } from './PlayMode';
import { Pitches } from './Pitches';

const standardBassGuitar = new StringedInstrument(
  'Bass Guitar',
  [
    {
      displayName: 'Pluck',
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
      hand: Hand.Primary,
    },
    {
      displayName: 'Strum',
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
      hand: Hand.Primary,
    },
    {
      displayName: 'Full Strum',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.All,
    },
    {
      displayName: 'Fret',
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
      hand: Hand.Secondary,
    },
    {
      displayName: 'Bar',
      polyPhonicPlayMode: PolyPhonicPlayMode.All,
      hand: Hand.Secondary,
    },
  ],
  21,
  [
    {
      octave: 1,
      pitchClass: Pitches[4],
      stringName: 'E',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 1,
      pitchClass: Pitches[9],
      stringName: 'A',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 2,
      pitchClass: Pitches[2],
      stringName: 'D',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 2,
      pitchClass: Pitches[7],
      stringName: 'G',
      fretNumber: 0,
      fretName: 'Open',
    },
  ],
  InstrumentOrientation.Right,
  [
    { fret: 0, marks: 0 },
    { fret: 1, marks: 0 },
    { fret: 2, marks: 0 },
    { fret: 3, marks: 1 },
    { fret: 4, marks: 0 },
    { fret: 5, marks: 1 },
    { fret: 6, marks: 0 },
    { fret: 7, marks: 1 },
    { fret: 8, marks: 0 },
    { fret: 9, marks: 1 },
    { fret: 10, marks: 0 },
    { fret: 11, marks: 0 },
    { fret: 12, marks: 2 },
    { fret: 13, marks: 0 },
    { fret: 14, marks: 0 },
    { fret: 15, marks: 1 },
    { fret: 16, marks: 0 },
    { fret: 17, marks: 1 },
    { fret: 18, marks: 0 },
    { fret: 19, marks: 1 },
    { fret: 20, marks: 0 },
    { fret: 21, marks: 1 },
  ]
);

export const StandardBassGuitar = standardBassGuitar;
