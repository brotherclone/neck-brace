import React from 'react';
import './index.scss';
import { AllScales, AllScaleSelections } from './constants/Scales';
import { StandardGuitarTuning } from './constants/GuitarTunings';
import { StandardGuitarFretCount } from './constants/GuitarFrets';
import Neck from './components/Neck/Neck';
import ScaleSelector from './components/ScaleSelector/ScaleSelector';
const App = () => {
  return (
    <div>
      <ScaleSelector
        label={'Select Scale'}
        currentValue={0}
        options={AllScaleSelections}
      />
      <Neck
        tuning={StandardGuitarTuning}
        fretCount={StandardGuitarFretCount}
        neckStrings={[]}
        scale={AllScales[0]}
      />
    </div>
  );
};

export default App;
