import * as React from 'react';
import './Fret.module.scss';
import { FretInfo } from '../../models/FretInfo';
import { ScaleInfo } from '../../constants/ScaleInfo';

interface FretProperties {
  fretInfo: FretInfo;
}
const Fret: React.FC<FretProperties> = ({ fretInfo }) => {
  let fretDisplay = 'fret-label';
  switch (fretInfo.scaleInfo) {
    case ScaleInfo.Chromatic:
      fretDisplay += ' chromatic';
      break;
    case ScaleInfo.Tonic:
      fretDisplay += ' tonic';
      break;
    default:
      fretDisplay += ' default';
  }
  return (
    <div className={'fret-container'}>
      <div
        className={fretDisplay}
      >{`${fretInfo.pitchClass.aliases[0]}, ${fretInfo.octave}`}</div>
    </div>
  );
};

export default Fret;
