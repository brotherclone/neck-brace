import * as React from 'react';
import './ScaleDisplay.module.scss';
import { Scale } from '../../types/Scale';

interface ScaleDisplayProperties {
  scale: Scale;
  isShowing: boolean;
  currentInstrumentName: string;
}

const ScaleDisplay: React.FC<ScaleDisplayProperties> = ({
  scale,
  isShowing,
  currentInstrumentName,
}) => {
  return (
    <>
      {isShowing && (
        <div className={'scale-display-container'}>
          <div className={'current-instrument-name'}>
            {`${currentInstrumentName} - `}
          </div>
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
