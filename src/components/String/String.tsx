import * as React from 'react';
import './String.module.scss';
import { StringInfo } from '../../models/StringInfo';
import Fret from '../Fret/Fret';

interface StringProperties {
  stringInfo: StringInfo;
  stringName: string;
}

const String: React.FC<StringProperties> = ({ stringInfo, stringName }) => {
  const [currentFrets, SetCurrentFrets] = React.useState(stringInfo.frets);
  React.useEffect(() => {
    SetCurrentFrets(stringInfo.frets);
  }, [stringInfo]);
  return (
    <div className={'string-container'}>
      <div className={'string-container-inner'}>
        <div className={'string-name'}>{stringName}</div>
        {currentFrets.map((fret, index) => {
          return <Fret key={index} fretInfo={fret} />;
        })}
      </div>
    </div>
  );
};

export default String;
