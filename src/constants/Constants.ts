import { Note } from '../models/Note';
import { NoteRecommendation } from '../models/NoteRecommendation';
export const StandardGuitarTotalFrets = 22;
export interface FretNote {
  note: Note;
  octave: number;
  name: string;
  recommendation: NoteRecommendation;
  stringName: string;
  stringRootNote: [Note, number];
}
export interface StringNotes {
  string: FretNote[];
}
export interface NeckNotes {
  strings: StringNotes[];
}
