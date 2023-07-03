import React from 'react';
import ReactDOM from 'react-dom';
import Neck from './components/Neck/Neck';
import { standardTuningGuitar } from './models/GuitarStrings';
import { StandardGuitarTotalFrets } from './constants/Constants';

import './index.scss';

ReactDOM.render(
  <div>
    <Neck tuning={standardTuningGuitar} fretCount={StandardGuitarTotalFrets} />
  </div>,
  document.getElementById('app-root')
);
