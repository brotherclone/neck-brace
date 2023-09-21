import * as React from 'react';
import './Neckmarker.module.scss';

interface NeckMarkerProperties {
  marks: number;
  isMini: boolean;
}
const NeckMarker: React.FC<NeckMarkerProperties> = ({ marks, isMini }) => {
  return (
    <>
      <div className={isMini ? 'mini-neck-marker-collection':'neck-marker-collection'}>
        {[...Array(marks)].map((m, index) => {
          return (
            <div key={index} className={'neck-marker'}>
              &nbsp;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NeckMarker;
