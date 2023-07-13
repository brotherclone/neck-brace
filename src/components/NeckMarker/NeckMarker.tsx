import * as React from 'react';
import './Neckmarker.module.scss';

interface NeckMarkerProperties {
  marks: number;
}
const NeckMarker: React.FC<NeckMarkerProperties> = ({ marks }) => {
  return (
    <div className={'fret-markers'}>
      {[...Array(marks)].map((m, index) => {
        return (
          <div key={index} className={'fret-marker'}>
            &nbsp;
          </div>
        );
      })}
    </div>
  );
};

export default NeckMarker;
