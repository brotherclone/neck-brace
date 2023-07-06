import * as React from 'react';
import './Fret.module.scss';
import { FretInfo } from '../../models/FretInfo';
import { PitchToScaleRelationship } from '../../constants/PitchToScaleRelationship';

interface FretProperties {
  fretInfo: FretInfo;
}
const Fret: React.FC<FretProperties> = ({ fretInfo }) => {
  const [fretDisplay, SetFretDisplay] = React.useState('fret-label-container');
  React.useEffect(() => {
    switch (fretInfo.scaleInfo) {
      case PitchToScaleRelationship.Chromatic:
        SetFretDisplay('fret-label-container chromatic');
        break;
      case PitchToScaleRelationship.Tonic:
        SetFretDisplay('fret-label-container tonic');
        break;
      default:
        SetFretDisplay('fret-label-container');
    }
  }, [fretInfo]);

  return (
    <div className={'fret-container'}>
      <div className={fretDisplay}>
        <div
          className={'fret-label'}
        >{`${fretInfo.pitchClass.aliases[0]}, ${fretInfo.octave}`}</div>
      </div>
    </div>
  );
};

export default Fret;
