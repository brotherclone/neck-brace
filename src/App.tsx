import React from 'react';
import useToggleState from './hooks/useToggleState';
import Neck from './components/Neck/Neck';
import ScaleDisplay from './components/ScaleDisplay/ScaleDisplay';
import ControlPanel from './components/ControlPanel/ControlPanel';
import TogglePanelButton from './components/TogglePanelButton/TogglePanelButton';
import {
  AllScales,
  AllScaleModeSelections,
  AllScaleNoteSelections,
} from './constants/Scales';
import { StandardGuitar } from './constants/Guitars';
import './index.scss';
import ScaleSelector from './components/ScaleSelector/ScaleSelector';
import { AllScaleTypes } from './constants/ScaleInvervals';

const App = () => {
  const [scaleIndex, setScaleIndex] = React.useState(0);
  const [currentScale, setCurrentScale] = React.useState(AllScales[scaleIndex]);
  const [currentRootNoteIndex, setCurrentRootNoteIndex] = React.useState(0);
  const [currentModeIndex, setCurrentModeIndex] = React.useState(0);
  const [isScaleShowing, checkScale, uncheckScale] = useToggleState(false);
  const [isOctaveShowing, checkOctave, uncheckOctave] = useToggleState(true);
  const [isPanelShowing, showPanel, hidePanel] = useToggleState(false);
  const [isNoteNameShowing, checkNoteName, uncheckNoteName] =
    useToggleState(true);

  const handleNoteSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setCurrentRootNoteIndex(event.target.value as unknown as number);
  };

  const handleModeSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setCurrentModeIndex(event.target.value as unknown as number);
  };

  React.useEffect(() => {
    const findScale = AllScales.filter(
      (scale) =>
        scale.notes[0].integerNotation ==
          (currentRootNoteIndex as unknown as number) &&
        scale.scaleType.scaleName == AllScaleTypes[currentModeIndex].scaleName
    );
    AllScales.map((scale, index) => {
      if (findScale.includes(scale)) {
        setScaleIndex(index);
        setCurrentScale(AllScales[scaleIndex]);
      }
    });
  }, [currentModeIndex, currentRootNoteIndex, currentScale, scaleIndex]);

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
        modeOptions={AllScaleModeSelections}
        noteOptions={AllScaleNoteSelections}
        currentModeIndex={currentModeIndex}
        currentRootNoteIndex={currentRootNoteIndex}
        handleModeSelection={handleModeSelection}
        handleNoteSelection={handleNoteSelection}
      />
      <ScaleDisplay scale={currentScale} hidden={isScaleShowing} />
      <Neck
        tuning={StandardGuitar.stringTuning}
        fretCount={StandardGuitar.fretStepCount}
        neckStrings={[]}
        scale={currentScale}
        showOctave={isOctaveShowing}
        showNoteName={isNoteNameShowing}
        newMarkers={
          StandardGuitar.neckMarkers ? StandardGuitar.neckMarkers : []
        }
      />
    </div>
  );
};

export default App;
