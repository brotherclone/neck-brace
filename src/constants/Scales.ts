import { AllScaleTypes } from './ScaleInvervals';
import { Pitches } from './Pitches';
import { Scale } from '../types/Scale';
import { ScaleType } from '../types/ScaleType';
import { PitchClass } from '../types/PitchClass';
import { OptionType } from '../types/OptionType';

function nextPitch(previous: number, interval: number): number {
  if (previous + interval < Pitches.length) {
    return previous + interval;
  } else {
    return previous + interval - Pitches.length;
  }
}

function integersToPitchClasses(integers: number[]): PitchClass[] {
  const pitchClasses: PitchClass[] = [];
  for (let i = 0; i < integers.length; i++) {
    const aPitch = Pitches[integers[i]];
    pitchClasses.push(aPitch);
  }
  return pitchClasses;
}

function createScaleNotes(
  intervals: number[],
  rootNotePitchClass: number
): PitchClass[] {
  const scaleIntegers: number[] = [rootNotePitchClass];
  for (let i = 0; i < intervals.length; i++) {
    const previousPitch = scaleIntegers[i];
    scaleIntegers.push(nextPitch(previousPitch, intervals[i]));
  }

  return integersToPitchClasses(scaleIntegers);
}

function createScale(
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

function createAllScales(): Scale[] {
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

function createScaleSelections(scales: Scale[]): OptionType[] {
  const scaleOptions: OptionType[] = [];
  for (let s = 0; s < scales.length; s++) {
    const anOption: OptionType = {
      optionLabel: scales[s].displayName,
      optionValue: scales[s].id,
    };
    scaleOptions.push(anOption);
  }

  return scaleOptions;
}

const allScales = createAllScales();
export const AllScales = allScales;
export const AllScaleSelections = createScaleSelections(allScales);
