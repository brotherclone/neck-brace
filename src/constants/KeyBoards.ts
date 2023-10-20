import { KeyBoardInstrument } from '../models/KeyBoardInstrument';
import { Pitches } from './Pitches';

const referenceOneOctaveKeyboard = new KeyBoardInstrument(
  'One Octave Keyboard',
  Pitches[0],
  2
);

export default referenceOneOctaveKeyboard;
