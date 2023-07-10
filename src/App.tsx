import React from 'react';
import Neck from './components/Neck/Neck';
import ScaleSelector from './components/ScaleSelector/ScaleSelector';
import ScaleDisplay from './components/ScaleDisplay/ScaleDisplay';
import { AllScales, AllScaleSelections } from './constants/Scales';
import { StandardGuitar } from './constants/Guitars';
import './index.scss';

const App = () => {
  const [scaleIndex, SetScaleIndex] = React.useState(0);
  const [currentScale, SetCurrentScale] = React.useState(AllScales[scaleIndex]);
  const [currentSelection, SetCurrentSelection] = React.useState(scaleIndex);

  const handleScaleSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    SetCurrentSelection(event.target.value as unknown as number);
  };

  React.useEffect(() => {
    SetScaleIndex(currentSelection);
    SetCurrentScale(AllScales[currentSelection]);
  }, [currentSelection]);

  return (
    <div className={'neck-brace-container'}>
      <ScaleSelector
        label={'Select Scale'}
        currentValue={scaleIndex}
        options={AllScaleSelections}
        onChange={handleScaleSelection}
      />
      <ScaleDisplay scale={currentScale} />
      <Neck
        tuning={StandardGuitar.stringTuning}
        fretCount={StandardGuitar.fretStepCount}
        neckStrings={[]}
        scale={currentScale}
      />
    </div>
  );
};

export default App;
