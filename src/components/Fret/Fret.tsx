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
  const [fretContainer, setFretContainer] = React.useState('fret-container');
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
    let fretContainerClass: string;
    if (isMini) {
      fretContainerClass = 'mini-fret-container';
    } else {
      fretContainerClass = 'fret-container';
    }
    if (fretInfo.hidden) {
      fretContainerClass += '-hidden';
    }
    setFretContainer(fretContainerClass);
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
  }, [
    fretInfo.hidden,
    isMini,
    fretInfo.scaleInfo,
    fretInfo.fretNumber,
    scale.notes,
  ]);

  return (
    <div className={fretContainer}>
      <div className={fretDisplay}>
        <div className={'fret-label'} aria-label={fretInfo.fretName}>
          {displayLabel()}
        </div>
      </div>
    </div>
  );
};

export default Fret;
