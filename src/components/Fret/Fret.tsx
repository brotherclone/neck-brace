import * as React from 'react';
import './Fret.module.scss';
import { FretInfo } from '../../models/FretInfo';
import { PitchToScaleRelationship } from '../../constants/PitchToScaleRelationship';

interface FretProperties {
  fretInfo: FretInfo;
}
const Fret: React.FC<FretProperties> = ({ fretInfo }) => {
  const [fretDisplay, SetFretDisplay] = React.useState('fret-label');
  React.useEffect(() => {
    switch (fretInfo.scaleInfo) {
      case PitchToScaleRelationship.Chromatic:
        SetFretDisplay('fret-label chromatic');
        break;
      case PitchToScaleRelationship.Tonic:
        SetFretDisplay('fret-label tonic');
        break;
      default:
        SetFretDisplay('fret-label');
    }
  }, [fretInfo]);

  return (
    <div className={'fret-container'}>
      <div
        className={fretDisplay}
      >{`${fretInfo.pitchClass.aliases[0]}, ${fretInfo.octave}`}</div>
    </div>
  );
};

export default Fret;
