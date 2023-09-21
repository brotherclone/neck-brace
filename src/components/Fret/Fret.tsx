import * as React from 'react';
import './Fret.module.scss';
import { FretInfo } from '../../models/FretInfo';
import { PitchToScaleRelationship } from '../../constants/PitchToScaleRelationship';
import { Scale } from '../../types/Scale';

interface FretProperties {
  fretInfo: FretInfo;
  scale: Scale;
  showOctave: boolean;
  isMini: boolean;
}

const Fret: React.FC<FretProperties> = ({
  fretInfo,
  scale,
  showOctave,
  isMini,
}) => {
  const [fretDisplay, setFretDisplay] = React.useState('fret-label-container');
  function displayLabel() {
    let label: string;
    if (showOctave && !isMini) {
      label = `${fretInfo.pitchClass.aliases[0]}, ${fretInfo.octave}`;
    } else if (!showOctave && !isMini) {
      label = `${fretInfo.pitchClass.aliases[0]}`;
    } else {
      label = '';
    }
    return <>{label}</>;
  }
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
    <div className={isMini ? 'mini-fret-container' : 'fret-container'}>
      <div className={fretDisplay}>
        <div className={'fret-label'} aria-label={fretInfo.fretName}>
          {displayLabel()}
        </div>
      </div>
    </div>
  );
};

export default Fret;
