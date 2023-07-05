import * as React from 'react';
import './Fret.module.scss';
import { FretInfo } from '../../models/FretInfo';

interface FretProperties {
  fretInfo: FretInfo;
}
const Fret: React.FC<FretProperties> = ({ fretInfo }) => {
  return (
    <div className={'fret-container'}>
      <div className={'fret-label'}>{fretInfo.pitchClass.aliases[0]}</div>
    </div>
  );
};

export default Fret;
