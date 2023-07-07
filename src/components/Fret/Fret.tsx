import * as React from 'react';
import './Fret.module.scss';
import { FretInfo } from '../../models/FretInfo';
import { PitchToScaleRelationship } from '../../constants/PitchToScaleRelationship';
import { Scale } from '../../types/Scale';

interface FretProperties {
  fretInfo: FretInfo;
  scale: Scale;
}

const Fret: React.FC<FretProperties> = ({ fretInfo, scale }) => {
  const [fretDisplay, setFretDisplay] = React.useState('fret-label-container');
  React.useEffect(() => {
    if (fretInfo.fretNumber === 0) {
      setFretDisplay('fret-label-container-open');
      if (fretInfo.scaleInfo === PitchToScaleRelationship.NotSet) {
        setFretDisplay('fret-label-container-open unset');
      } else if (fretInfo.scaleInfo === PitchToScaleRelationship.Tonic) {
        setFretDisplay('fret-label-container-open tonic');
      } else if (fretInfo.scaleInfo === PitchToScaleRelationship.Chromatic) {
        setFretDisplay('fret-label-container-open chromatic');
      }
    } else {
      setFretDisplay('fret-label-container');
      if (fretInfo.scaleInfo === PitchToScaleRelationship.NotSet) {
        setFretDisplay('fret-label-container unset');
      } else if (fretInfo.scaleInfo === PitchToScaleRelationship.Tonic) {
        setFretDisplay('fret-label-container tonic');
      } else if (fretInfo.scaleInfo === PitchToScaleRelationship.Chromatic) {
        setFretDisplay('fret-label-container chromatic');
      }
    }
  }, [fretInfo.scaleInfo, fretInfo.fretNumber, scale.notes]);

  return (
    <div className={'fret-container'}>
      <div className={fretDisplay}>
        <div className={'fret-label'} aria-label={fretInfo.fretName}>
          {`${fretInfo.pitchClass.aliases[0]}, ${fretInfo.octave}`}
        </div>
      </div>
    </div>
  );
};

export default Fret;
