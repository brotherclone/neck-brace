import { AllScaleTypes } from './ScaleInvervals';
import { Pitches } from './Pitches';
import { Scale } from '../types/Scale';
import { ScaleType } from '../types/ScaleType';
import { PitchClass } from '../types/PitchClass';
import { OptionType } from '../types/OptionType';

export function nextPitch(previous: number, interval: number): number {
  const totalPitches: number = Pitches.length - 1;
  let next: number = previous + interval;
  if (next > totalPitches) {
    next = next - 1 - totalPitches;
  }
  return next;
}

export function integersToPitchClasses(integers: number[]): PitchClass[] {
  const pitchClasses: PitchClass[] = [];
  for (let i = 0; i < integers.length; i++) {
    const aPitch = Pitches[integers[i]];
    pitchClasses.push(aPitch);
  }
  return pitchClasses;
}

export function createScaleNotes(
  intervals: number[],
  rootNotePitchInteger: number
): PitchClass[] {
  const scaleIntegers: number[] = [rootNotePitchInteger];
  for (let i = 0; i < intervals.length; i++) {
    const previousPitch = scaleIntegers[i];
    scaleIntegers.push(nextPitch(previousPitch, intervals[i]));
  }

  return integersToPitchClasses(scaleIntegers);
}

export function createScale(
  rootNote: number,
  scaleType: ScaleType,
  displayName: string,
  id: number
): Scale {
  const scaleNotes: PitchClass[] = createScaleNotes(
    scaleType.intervals,
    rootNote
  );
  return {
    scaleType: scaleType,
    displayName: displayName,
    notes: scaleNotes,
    id: id,
  };
}

export function createAllScales(): Scale[] {
  let keyTracker = 0;
  const scales: Scale[] = [];
  for (let t = 0; t < AllScaleTypes.length; t++) {
    for (let p = 0; p < Pitches.length; p++) {
      const scaleName =
        Pitches[p].aliases[0] + ' ' + AllScaleTypes[t].scaleName;
      const aScale = createScale(
        Pitches[p].integerNotation,
        AllScaleTypes[t],
        scaleName,
        keyTracker
      );
      scales.push(aScale);
      keyTracker++;
    }
  }
  return scales;
}

// export function createScaleSelections(scales: Scale[]): OptionType[] {
//   const scaleOptions: OptionType[] = [];
//   for (let s = 0; s < scales.length; s++) {
//     const anOption: OptionType = {
//       optionLabel: scales[s].displayName,
//       optionValue: scales[s].id,
//     };
//     scaleOptions.push(anOption);
//   }
//   return scaleOptions;
// }

export function createScaleSelectionNotes(): OptionType[] {
  const scaleNotes: OptionType[] = [];
  for (let p = 0; p < Pitches.length; p++) {
    const anOption: OptionType = {
      optionValue: Pitches[p].integerNotation,
      optionLabel: Pitches[p].aliases[0],
    };
    scaleNotes.push(anOption);
  }
  return scaleNotes;
}

export function createScaleSelectionModes(): OptionType[] {
  const scaleModes: OptionType[] = [];
  for (let m = 0; m < AllScaleTypes.length; m++) {
    const anOption: OptionType = {
      optionLabel: AllScaleTypes[m].scaleName,
      optionValue: m,
    };
    scaleModes.push(anOption);
  }
  return scaleModes;
}

const allScales = createAllScales();
export const AllScales = allScales;
export const AllScaleNoteSelections = createScaleSelectionNotes();
export const AllScaleModeSelections = createScaleSelectionModes();
