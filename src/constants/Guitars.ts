import { StringedInstrument } from '../models/StringedInstrument';
import { Pitches } from './Pitches';
import { Hand, InstrumentOrientation, PolyPhonicPlayMode } from './PlayMode';

const baseGuitar = new StringedInstrument(
  'Standard Guitar',
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
      displayName: 'Tap',
      hand: Hand.Primary,
      polyPhonicPlayMode: PolyPhonicPlayMode.One,
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
      displayName: 'Pinch',
      polyPhonicPlayMode: PolyPhonicPlayMode.Some,
      hand: Hand.Secondary,
    },
    {
      displayName: 'Hammer',
      polyPhonicPlayMode: PolyPhonicPlayMode.One,
      hand: Hand.Secondary,
    },
  ],
  22,
  [
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
    { fret: 22, marks: 0 },
  ]
);

const openG = baseGuitar;
openG.displayName = 'Open G Tuning';
openG.stringTuning = [
  {
    octave: 2,
    pitchClass: Pitches[2],
    stringName: 'Lowest D, Open G Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 2,
    pitchClass: Pitches[7],
    stringName: 'Low G, Open G Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 3,
    pitchClass: Pitches[2],
    stringName: 'Middle D, Open G Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 3,
    pitchClass: Pitches[7],
    stringName: 'High G, Open G Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 3,
    pitchClass: Pitches[11],
    stringName: 'B, Open G Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
  {
    octave: 4,
    pitchClass: Pitches[2],
    stringName: 'High D, Open G Tuning',
    fretNumber: 0,
    fretName: 'Open',
  },
];
export const StandardGuitar = baseGuitar;
export const OpenGTunedStandardGuitar = openG;
