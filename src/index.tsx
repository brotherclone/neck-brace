import React from 'react';
import ReactDOM from 'react-dom';
import Neck from './components/Neck/Neck';
import { StandardGuitarTuning } from './constants/GuitarTunings';
import { StandardGuitarFretCount } from './constants/GuitarFrets';
import { AllScales } from './constants/Scales';
import './index.scss';

ReactDOM.render(
  <div>
    <Neck
      tuning={StandardGuitarTuning}
      fretCount={StandardGuitarFretCount}
      neckStrings={[]}
      scale={AllScales[0]}
    />
  </div>,
  document.getElementById('app-root')
);
