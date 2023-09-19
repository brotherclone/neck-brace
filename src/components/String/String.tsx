import * as React from 'react';
import './String.module.scss';
import { StringInfo } from '../../models/StringInfo';
import Fret from '../Fret/Fret';
import { Scale } from '../../types/Scale';

interface StringProperties {
  stringInfo: StringInfo;
  stringName: string;
  scale: Scale;
  showOctave: boolean;
  isMini: boolean;
}

const String: React.FC<StringProperties> = ({
  stringInfo,
  stringName,
  scale,
  showOctave,
                                              isMini,
}) => {
  return (
    <div className={isMini?'string-container-mini' : 'string-container'}>
      <div className={'string-container-inner'} aria-description={stringName}>
        {stringInfo.frets.map((f, index) => {
          f.stringName = stringName;
          return (
            <Fret
              key={index}
              fretInfo={f}
              scale={scale}
              showOctave={showOctave}
              isMini={isMini}
            />
          );
        })}
      </div>
    </div>
  );
};

export default String;
