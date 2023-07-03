import * as React from 'react';
import './Fret.module.scss';
import { NoteRecommendation } from '../../models/NoteRecommendation';

interface FretProperties {
  note: NoteRecommendation;
}
const Fret: React.FC<FretProperties> = () => {
  return <span>hi</span>;
};

export default Fret;
