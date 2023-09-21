import React from 'react';
import { KeyInfo, KeyBoardKeyColor } from '../../models/KeyInfo';
import { PitchToScaleRelationship } from '../../constants/PitchToScaleRelationship';
import { Scale } from '../../types/Scale';

interface KeyBoardKeyProperties {
  scale: Scale;
  keyInfo: KeyInfo;
}

const KeyBoardKey: React.FC<KeyBoardKeyProperties> = ({ scale, keyInfo }) => {
  const [keyDisplay, setKeyDisplay] = React.useState('');
  React.useEffect(() => {
    let className = 'keyboard-key';
    if (keyInfo.keyColor === KeyBoardKeyColor.White) {
      className += ' white';
    } else {
      className += ' black';
    }
    if (keyInfo.scaleInfo === PitchToScaleRelationship.Tonic) {
      className += ' tonic';
    } else if (keyInfo.scaleInfo === PitchToScaleRelationship.Chromatic) {
      className += ' chromatic';
    }
    setKeyDisplay(className);
  }, [keyInfo, scale]);
  return (
    <div className={'keyboard-keys-octave-group'}>
      <div className={keyDisplay} />
    </div>
  );
};

export default KeyBoardKey;
