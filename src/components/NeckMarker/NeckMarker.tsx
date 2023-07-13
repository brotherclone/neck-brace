import * as React from 'react';
import './Neckmarker.module.scss';

interface NeckMarkerProperties {
  marks: number;
}
const NeckMarker: React.FC<NeckMarkerProperties> = ({ marks }) => {
  return (
    <>
      <div className={'neck-marker-collection'}>
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
