import { StringedInstrument } from '../models/StringedInstrument';
import { Hand, InstrumentOrientation, PolyPhonicPlayMode } from './PlayMode';
import { Pitches } from './Pitches';

const standardBanjo = new StringedInstrument(
  'Standard Banjo',
  [
    {
      displayName: 'Strum',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
    },
    {
      displayName: 'Muted Strum',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
    },
    {
      displayName: 'Full Strum',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.All,
    },
    {
      displayName: 'Pluck/Pick',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
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
    {
      displayName: 'Finger Pick',
      polyPhonicPlayMode: PolyPhonicPlayMode.One,
      hand: Hand.Secondary,
    },
    {
      displayName: 'Clawhammer',
      polyPhonicPlayMode: PolyPhonicPlayMode.All,
      hand: Hand.Secondary,
    },
  ],
  22,
  [
    {
      octave: 4,
      pitchClass: Pitches[7],
      stringName: 'Thumb string G',
      fretNumber: 8,
      fretName: 'Open',
    },
    {
      octave: 3,
      pitchClass: Pitches[0],
      stringName: 'C string',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 3,
      pitchClass: Pitches[7],
      stringName: 'G string',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 3,
      pitchClass: Pitches[11],
      stringName: 'B string',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 4,
      pitchClass: Pitches[2],
      stringName: 'D string',
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

const doubleCTunedBanjo = new StringedInstrument(
  'Double C Banjo',
  [
    {
      displayName: 'Strum',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
    },
    {
      displayName: 'Muted Strum',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
    },
    {
      displayName: 'Full Strum',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.All,
    },
    {
      displayName: 'Pluck/Pick',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
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
    {
      displayName: 'Finger Pick',
      polyPhonicPlayMode: PolyPhonicPlayMode.One,
      hand: Hand.Secondary,
    },
    {
      displayName: 'Clawhammer',
      polyPhonicPlayMode: PolyPhonicPlayMode.All,
      hand: Hand.Secondary,
    },
  ],
  22,
  [
    {
      octave: 4,
      pitchClass: Pitches[7],
      stringName: 'Thumb string G',
      fretNumber: 8,
      fretName: 'Open',
    },
    {
      octave: 3,
      pitchClass: Pitches[0],
      stringName: 'Low C string',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 3,
      pitchClass: Pitches[7],
      stringName: 'G string',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 4,
      pitchClass: Pitches[0],
      stringName: 'High C string',
      fretNumber: 0,
      fretName: 'Open',
    },
    {
      octave: 4,
      pitchClass: Pitches[2],
      stringName: 'D string',
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

export const StandardBanjo = standardBanjo;
export const DoubleCTunedBanjo = doubleCTunedBanjo;
