import * as React from 'react';
import './ScaleDisplay.module.scss';
import { Scale } from '../../types/Scale';

interface ScaleDisplayProperties {
  scale: Scale;
  hidden: boolean;
}

const ScaleDisplay: React.FC<ScaleDisplayProperties> = ({ scale, hidden }) => {
  return (
    <>
      {!hidden && (
        <div className={'scale-display-container'}>
          {scale.notes.map((note, index) => {
            return (
              <div className={'scale-display-note'} key={index}>
                {note.aliases[0]}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ScaleDisplay;
