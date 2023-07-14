import { Instrument } from '../interfaces/Instrument';
import { InstrumentOrientation, PlayMode } from '../constants/PlayMode';
import { FretInfo } from './FretInfo';
import { NeckMarkerType } from '../types/NeckMarkerType';

export class StringedInstrument implements Instrument {
  polyphonic = true;
  displayName: string;
  playModes: PlayMode[];
  fretStepCount: number;
  stringTuning: FretInfo[];
  instrumentOrientation: InstrumentOrientation;
  neckMarkers: NeckMarkerType[];
  constructor(
    displayName: string,
    playModes: PlayMode[],
    fretStepCount: number,
    stringTuning: FretInfo[],
    instrumentOrientation: InstrumentOrientation,
    neckMarkers: NeckMarkerType[]
  ) {
    this.displayName = displayName;
    this.playModes = playModes;
    this.fretStepCount = fretStepCount;
    this.stringTuning = stringTuning;
    this.instrumentOrientation = instrumentOrientation;
    this.neckMarkers = neckMarkers;
  }
  changeInstrumentOrientation() {
    if (this.instrumentOrientation === InstrumentOrientation.Right) {
      this.instrumentOrientation = InstrumentOrientation.Left;
    } else {
      this.instrumentOrientation = InstrumentOrientation.Right;
    }
  }
}
