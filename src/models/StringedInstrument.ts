import { Instrument } from '../interfaces/Instrument';
import { InstrumentOrientation, PlayMode } from '../constants/PlayMode';
import { FretInfo } from './FretInfo';

export class StringedInstrument implements Instrument {
  polyphonic = true;
  displayName: string;
  playModes: PlayMode[];
  fretStepCount: number;
  stringTuning: FretInfo[];
  instrumentOrientation?: InstrumentOrientation;
  constructor(
    displayName: string,
    playModes: PlayMode[],
    fretStepCount: number,
    stringTuning: FretInfo[],
    instrumentOrientation?: InstrumentOrientation
  ) {
    this.displayName = displayName;
    this.playModes = playModes;
    this.fretStepCount = fretStepCount;
    this.stringTuning = stringTuning;
    this.instrumentOrientation = instrumentOrientation
      ? instrumentOrientation
      : InstrumentOrientation.Right;
  }
  changeInstrumentOrientation() {
    if (this.instrumentOrientation === InstrumentOrientation.Right) {
      this.instrumentOrientation = InstrumentOrientation.Left;
    } else {
      this.instrumentOrientation = InstrumentOrientation.Right;
    }
  }
}
