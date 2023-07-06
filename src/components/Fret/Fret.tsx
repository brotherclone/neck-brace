import * as React from 'react';
import './Fret.module.scss';
import { FretInfo } from '../../models/FretInfo';
import { PitchToScaleRelationship } from '../../constants/PitchToScaleRelationship';

interface FretProperties {
  fretInfo: FretInfo;
}
const Fret: React.FC<FretProperties> = ({ fretInfo }) => {
  let fretDisplay = 'fret-label';
  switch (fretInfo.scaleInfo) {
    case PitchToScaleRelationship.Chromatic:
      fretDisplay += ' chromatic';
      break;
    case PitchToScaleRelationship.Tonic:
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
