import * as React from 'react';
import './Neck.module.scss';
import { StringInfo } from '../../models/StringInfo';
import { FretInfo } from '../../models/FretInfo';
import String from '../String/String';

interface NeckProperties {
  tuning: FretInfo[];
  neckStrings: StringInfo[];
  fretCount: number;
}

const Neck: React.FC<NeckProperties> = ({ tuning, fretCount, neckStrings }) => {
  if (neckStrings.length === 0) {
    tuning.forEach((item) => {
      const aStringInfoHolder = new StringInfo(
        fretCount,
        item,
        item.pitchClass.aliases[0]
      );
      aStringInfoHolder.buildString();
      neckStrings.push(aStringInfoHolder);
    });
  }
  return (
    <div className={'neck-container'}>
      <div className={'neck-strings'}>
        {neckStrings?.map((s, index) => {
          return (
            <String
              stringInfo={s}
              stringName={s.name + ' string'}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Neck;
