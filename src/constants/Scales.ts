import { Major } from './ScaleInvervals';
import { Minor } from './ScaleInvervals';
import { Pitches } from './Pitches';

function nextPitch(previous: number, interval: number): number {
  if (previous + interval < Pitches.length) {
    return previous + interval;
  } else {
    return previous + interval - Pitches.length;
  }
}

function createScale(
  intervals: number[],
  rootNotePitchClass: number
): number[] {
  const scale: number[] = [rootNotePitchClass];
  for (let i = 0; i < intervals.length; i++) {
    const previousPitch = scale[i];
    scale.push(nextPitch(previousPitch, intervals[i]));
  }
  return scale;
}

function makeMajorScales() {
  const scales: number[][] = [];
  for (let p = 0; p < Pitches.length; p++) {
    scales.push(createScale(Major, Pitches[p].integerNotation));
  }
  return scales;
}

function makeMinorScales() {
  const scales: number[][] = [];
  for (let p = 0; p < Pitches.length; p++) {
    scales.push(createScale(Minor, Pitches[p].integerNotation));
  }
  return scales;
}

export const MajorScales = makeMajorScales();
export const MinorScales = makeMinorScales();
