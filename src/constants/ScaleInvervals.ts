import { ScaleType } from '../types/ScaleType';

export const AllScaleTypes: ScaleType[] = [
  {
    scaleName: 'Major',
    intervals: [2, 2, 1, 2, 2, 2, 1],
  },
  {
    scaleName: 'Natural Minor',
    intervals: [2, 1, 2, 2, 1, 2, 2],
  },
  {
    scaleName: 'Phrygian',
    intervals: [1, 2, 2, 2, 1, 2, 2],
  },
  {
    scaleName: 'Phrygian dominant',
    intervals: [1, 3, 1, 2, 1, 2, 2],
  },
  {
    scaleName: 'Ukrainian Dorian',
    intervals: [2, 1, 3, 1, 2, 1, 2],
  },
];
