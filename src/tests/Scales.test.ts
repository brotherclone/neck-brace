import { describe, expect, test } from '@jest/globals';
import {
  nextPitch,
  integersToPitchClasses,
  createScaleNotes,
  createAllScales,
  createScaleSelections,
} from '../constants/Scales';
import { PitchClass } from '../types/PitchClass';
import { Scale } from '../types/Scale';
import { AllScaleTypes } from '../constants/ScaleInvervals';
import { ScaleType } from '../types/ScaleType';
import { OptionType } from '../types/OptionType';

describe('Scales', () => {
  test('checks nextPitch for the next pitch interval', () => {
    const pitch = nextPitch(1, 2);
    expect(pitch).toEqual(3);
  });
  test('checks nextPitch for a repeating pitch', () => {
    const pitch1 = nextPitch(11, 5);
    const pitch2 = nextPitch(11, 1);
    expect(pitch1).toEqual(4);
    expect(pitch2).toEqual(0);
  });
  test('checks integers to PitchClass with a sample', () => {
    const testValue: PitchClass = {
      integerNotation: 10,
      aliases: ['A♯', 'B♭'],
    };
    const test = integersToPitchClasses([10]);
    expect(test[0]).toEqual(testValue);
  });
  test('checks create scale notes with a small set of intervals', () => {
    const testIntervals = [1, 2, 2, 0, 2, 3, 5];
    const expectedPitches: PitchClass[] = [
      {
        integerNotation: 0,
        aliases: ['C', 'B♯'],
      },
      {
        integerNotation: 1,
        aliases: ['C♯', 'D♭'],
      },
      {
        integerNotation: 3,

        aliases: ['D♯', 'E♭'],
      },
      {
        integerNotation: 5,
        aliases: ['F'],
      },
      {
        integerNotation: 5,
        aliases: ['F'],
      },
      {
        integerNotation: 7,
        aliases: ['G'],
      },
      {
        integerNotation: 10,
        aliases: ['A♯', 'B♭'],
      },
      {
        integerNotation: 3,
        aliases: ['D♯', 'E♭'],
      },
    ];
    const testScale: PitchClass[] = createScaleNotes(testIntervals, 0);
    expect(testScale).toEqual(expectedPitches);
  });
  test('it creates C#,B♭m,F,and G#m scales using createAllScales', () => {
    const major: ScaleType = AllScaleTypes[0];
    const minor: ScaleType = AllScaleTypes[1];
    // C♯, D♯, E♯, F♯, G♯, A♯, B♯, C#
    const CSharpMajor: Scale = {
      displayName: 'C♯ Major',
      id: 1,
      notes: [
        {
          integerNotation: 1,
          aliases: ['C♯', 'D♭'],
        },
        {
          integerNotation: 3,
          aliases: ['D♯', 'E♭'],
        },
        {
          integerNotation: 5,
          aliases: ['F'],
        },
        {
          integerNotation: 6,
          aliases: ['F♯', 'G♭'],
        },
        {
          integerNotation: 8,
          aliases: ['G♯', 'A♭'],
        },
        {
          integerNotation: 10,
          aliases: ['A♯', 'B♭'],
        },
        {
          integerNotation: 0,
          aliases: ['C', 'B♯'],
        },
        {
          integerNotation: 1,
          aliases: ['C♯', 'D♭'],
        },
      ],
      scaleType: major,
    };
    // Bb C Db Eb F Gb Ab Bb
    const BFlatMinor: Scale = {
      displayName: 'A♯ Natural Minor',
      id: 22,
      notes: [
        {
          integerNotation: 10,
          aliases: ['A♯', 'B♭'],
        },
        {
          integerNotation: 0,
          aliases: ['C', 'B♯'],
        },
        {
          integerNotation: 1,
          aliases: ['C♯', 'D♭'],
        },
        {
          integerNotation: 3,
          aliases: ['D♯', 'E♭'],
        },
        {
          integerNotation: 5,
          aliases: ['F'],
        },
        {
          integerNotation: 6,
          aliases: ['F♯', 'G♭'],
        },
        {
          integerNotation: 8,
          aliases: ['G♯', 'A♭'],
        },
        {
          integerNotation: 10,
          aliases: ['A♯', 'B♭'],
        },
      ],
      scaleType: minor,
    };
    //F, G, A, B-flat, C, D, E, F
    const FMajor: Scale = {
      displayName: 'F Major',
      id: 5,
      notes: [
        {
          integerNotation: 5,
          aliases: ['F'],
        },
        {
          integerNotation: 7,
          aliases: ['G'],
        },
        {
          integerNotation: 9,
          aliases: ['A'],
        },
        {
          integerNotation: 10,
          aliases: ['A♯', 'B♭'],
        },
        {
          integerNotation: 0,
          aliases: ['C', 'B♯'],
        },
        {
          integerNotation: 2,
          aliases: ['D'],
        },
        {
          integerNotation: 4,
          aliases: ['E', 'F♭'],
        },
        {
          integerNotation: 5,
          aliases: ['F'],
        },
      ],
      scaleType: major,
    };
    //G# A# B C# D# E F# G#
    const GSharpMinor: Scale = {
      displayName: 'G♯ Natural Minor',
      id: 20,
      notes: [
        {
          integerNotation: 8,
          aliases: ['G♯', 'A♭'],
        },
        {
          integerNotation: 10,
          aliases: ['A♯', 'B♭'],
        },
        {
          integerNotation: 11,
          aliases: ['B'],
        },
        {
          integerNotation: 1,
          aliases: ['C♯', 'D♭'],
        },
        {
          integerNotation: 3,
          aliases: ['D♯', 'E♭'],
        },
        {
          integerNotation: 4,
          aliases: ['E', 'F♭'],
        },
        {
          integerNotation: 6,
          aliases: ['F♯', 'G♭'],
        },
        {
          integerNotation: 8,
          aliases: ['G♯', 'A♭'],
        },
      ],
      scaleType: minor,
    };
    const testScales = createAllScales();
    expect(testScales[1]).toEqual(CSharpMajor);
    expect(testScales[20]).toEqual(GSharpMinor);
    expect(testScales[5]).toEqual(FMajor);
    expect(testScales[22]).toEqual(BFlatMinor);
  });
  test('spot checks the selections', () => {
    const testScales = createAllScales();
    const testSelections = createScaleSelections(testScales);
    const test: OptionType = {
      optionLabel: 'G♯ Natural Minor',
      optionValue: 20,
    };
    expect(test).toEqual(testSelections[20]);
  });
});
