import { PitchClass } from './PitchClass';
import { ScaleType } from './ScaleType';

export type Scale = {
  scaleType: ScaleType;
  notes: PitchClass[];
  displayName: string;
  id: number;
};
