import { StringedInstrument } from '../models/StringedInstrument';
import { Hand, InstrumentOrientation, PolyPhonicPlayMode } from './PlayMode';
import { Pitches } from './Pitches';

export const StandardBassGuitar = new StringedInstrument(
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
    {
      fret: 3,
      marks: 1,
    },
    {
      fret: 5,
      marks: 1,
    },
    {
      fret: 7,
      marks: 1,
    },
    {
      fret: 9,
      marks: 1,
    },
    {
      fret: 12,
      marks: 2,
    },
    {
      fret: 15,
      marks: 1,
    },
    {
      fret: 17,
      marks: 1,
    },
    {
      fret: 19,
      marks: 1,
    },
    {
      fret: 21,
      marks: 1,
    },
  ]
);
