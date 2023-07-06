import React from 'react';
import './index.scss';
import { AllScales, AllScaleSelections } from './constants/Scales';
import { StandardGuitarTuning } from './constants/GuitarTunings';
import { StandardGuitarFretCount } from './constants/GuitarFrets';
import Neck from './components/Neck/Neck';
import ScaleSelector from './components/ScaleSelector/ScaleSelector';

const App = () => {
  const [scaleIndex, SetScaleIndex] = React.useState(0);
  const [currentScale, SetCurrentScale] = React.useState(AllScales[scaleIndex]);
  const handleScaleSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    SetScaleIndex(event.target.value as unknown as number);
    SetCurrentScale(AllScales[scaleIndex]);
  };
  return (
    <div>
      <ScaleSelector
        label={'Select Scale'}
        currentValue={scaleIndex}
        options={AllScaleSelections}
        onChange={handleScaleSelection}
      />
      <Neck
        tuning={StandardGuitarTuning}
        fretCount={StandardGuitarFretCount}
        neckStrings={[]}
        scale={currentScale}
      />
    </div>
  );
};

export default App;
