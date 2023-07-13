import React from 'react';
import useToggleState from './hooks/useToggleState';
import Neck from './components/Neck/Neck';
import ScaleSelector from './components/ScaleSelector/ScaleSelector';
import ScaleDisplay from './components/ScaleDisplay/ScaleDisplay';
import ControlPanel from './components/ControlPanel/ControlPanel';
import TogglePanelButton from './components/TogglePanelButton/TogglePanelButton';
import { AllScales, AllScaleSelections } from './constants/Scales';
import { StandardGuitar } from './constants/Guitars';
import './index.scss';

const App = () => {
  const [scaleIndex, SetScaleIndex] = React.useState(0);
  const [currentScale, SetCurrentScale] = React.useState(AllScales[scaleIndex]);
  const [currentSelection, SetCurrentSelection] = React.useState(scaleIndex);
  const [isScaleShowing, checkScale, uncheckScale] = useToggleState(false);
  const [isOctaveShowing, checkOctave, uncheckOctave] = useToggleState(true);
  const [isPanelShowing, showPanel, hidePanel] = useToggleState(false);
  const [isNoteNameShowing, checkNoteName, uncheckNoteName] =
    useToggleState(true);
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
      <TogglePanelButton
        buttonState={isPanelShowing}
        turnOn={showPanel}
        turnOff={hidePanel}
        label={'Show Controls'}
        name={'showPanelButton'}
      />
      <ControlPanel
        showPanel={isPanelShowing}
        showScale={isScaleShowing}
        checkScaleHandle={checkScale}
        unCheckScaleHandle={uncheckScale}
        showOctave={isOctaveShowing}
        checkOctaveHandle={checkOctave}
        unCheckOctaveHandle={uncheckOctave}
        showNoteName={isNoteNameShowing}
        checkNoteNameHandle={checkNoteName}
        unCheckNoteNameHandle={uncheckNoteName}
      />
      <ScaleSelector
        label={'Select Scale'}
        currentValue={scaleIndex}
        options={AllScaleSelections}
        onChange={handleScaleSelection}
      />
      <ScaleDisplay scale={currentScale} hidden={isScaleShowing} />
      <Neck
        tuning={StandardGuitar.stringTuning}
        fretCount={StandardGuitar.fretStepCount}
        neckStrings={[]}
        scale={currentScale}
        showOctave={isOctaveShowing}
        showNoteName={isNoteNameShowing}
      />
    </div>
  );
};

export default App;
