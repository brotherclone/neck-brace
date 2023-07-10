import { StringedInstrument } from '../models/StringedInstrument';
import { Pitches } from './Pitches';
import { Hand, PolyPhonicPlayMode } from './PlayMode';

export const StandardGuitar = new StringedInstrument(
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
  ]
);

export const OpenGTunedStandardGuitar = new StringedInstrument(
  'Open G Tuning',
  StandardGuitar.playModes,
  StandardGuitar.fretStepCount,
  [
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
  ]
);
