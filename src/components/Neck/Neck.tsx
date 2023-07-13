import * as React from 'react';
import './Neck.module.scss';
import { StringInfo } from '../../models/StringInfo';
import { FretInfo } from '../../models/FretInfo';
import String from '../String/String';
import { Scale } from '../../types/Scale';
import { NeckMarkerType } from '../../types/NeckMarkerType';
import NeckMarker from '../NeckMarker/NeckMarker';

interface NeckProperties {
  tuning: FretInfo[];
  neckStrings: StringInfo[];
  fretCount: number;
  scale: Scale;
  showOctave: boolean;
  showNoteName: boolean;
  newMarkers: NeckMarkerType[];
}

const Neck: React.FC<NeckProperties> = ({
  tuning,
  fretCount,
  neckStrings,
  scale,
  showOctave,
  showNoteName,
  newMarkers,
}) => {
  React.useEffect(() => {
    neckStrings.forEach((string) => {
      string.setScale(scale.notes);
    });
  }, [scale, neckStrings]);
  if (neckStrings.length === 0) {
    tuning.forEach((item) => {
      const aStringInfoHolder = new StringInfo(
        fretCount,
        item,
        item.pitchClass.aliases[0]
      );
      aStringInfoHolder.buildString();
      aStringInfoHolder.setScale(scale.notes);
      neckStrings.push(aStringInfoHolder);
    });
  }
  return (
    <div className={'neck-container'}>
      <div className={'neck-background'}>
        {newMarkers?.map((m, index) => {
          return <NeckMarker marks={m.marks} key={index} />;
        })}
      </div>
      <div className={'neck-strings'}>
        {neckStrings?.map((s, index) => {
          return (
            <String
              stringInfo={s}
              stringName={s.name + ' string'}
              key={index}
              scale={scale}
              showOctave={showOctave}
              showNoteName={showNoteName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Neck;
