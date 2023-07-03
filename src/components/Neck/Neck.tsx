import * as React from 'react';
import './Neck.module.scss';
import { Note } from '../../models/Note';
import String from '../String/String';
import { useRef, useEffect } from 'react';
import { NeckNotes, StringNotes, FretNote } from '../../constants/Constants';

interface NeckProperties {
  tuning: [Note, number][];
  fretCount: number;
  neckNotes?: NeckNotes;
}

const Neck: React.FC<NeckProperties> = ({ tuning, fretCount, neckNotes }) => {
  const fretBoard = useRef(neckNotes ? neckNotes : []);
  function nextNote(currentNote: FretNote): FretNote {
    if (currentNote[0] + 1 > Note.length) {
      return [Note.A, currentNote[1] + 1] as FretNote;
    } else {
      try {
        const n = Note[currentNote[0] + 1];
        return [n, currentNote[1]] as FretNote;
      } catch (err) {
        console.log('ERROR', err);
      }
    }
  }

  useEffect(() => {
    const t: NeckNotes = { strings: [] };
    const p = populateString([Note.F, 0] as FretNote);
    t.strings.push(p);
    fretBoard.current = t;
    function populateString(startingNote: FretNote): StringNotes {
      console.log(tuning);
      console.log(fretCount);
      const test: StringNotes = { string: [] };
      test.string = [startingNote, startingNote];
      console.log(nextNote(startingNote));
      return test;
    }
  });

  return (
    <>
      <String />
    </>
  );
};

export default Neck;
