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
import {
  AllMainInstruments,
  AllInstrumentSelections,
} from './constants/Instruments';
import './index.scss';
import ScaleSelector from './components/ScaleSelector/ScaleSelector';
import { AllScaleTypes } from './constants/ScaleInvervals';
import Keyboard from './components/Keyboard/Keyboard';
import referenceOneOctaveKeyboard from './constants/KeyBoards';

const App = () => {
  const [currentInstrumentIndex, setCurrentInstrumentIndex] = React.useState(0);
  const [currentInstrument, setCurrentInstrument] = React.useState(
    AllMainInstruments[currentInstrumentIndex]
  );
  const [scaleIndex, setScaleIndex] = React.useState(0);
  const [currentScale, setCurrentScale] = React.useState(AllScales[scaleIndex]);
  const [currentRootNoteIndex, setCurrentRootNoteIndex] = React.useState(0);
  const [currentModeIndex, setCurrentModeIndex] = React.useState(0);
  const [isScaleShowing, checkScale, uncheckScale] = useToggleState(false);
  const [isOctaveShowing, checkOctave, uncheckOctave] = useToggleState(true);
  const [isPanelShowing, showPanel, hidePanel] = useToggleState(false);

  const handleNoteSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setCurrentRootNoteIndex(event.target.value as unknown as number);
  };

  const handleModeSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setCurrentModeIndex(event.target.value as unknown as number);
  };

  const handleInstrumentSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    setCurrentInstrumentIndex(event.target.value as unknown as number);
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
    setCurrentInstrument(AllMainInstruments[currentInstrumentIndex]);
  }, [
    currentModeIndex,
    currentRootNoteIndex,
    currentScale,
    scaleIndex,
    isPanelShowing,
    currentInstrumentIndex,
    currentInstrument,
  ]);

  return (
    <div className={'three-column-wrapper'}>
      <div className={'mini-brace-container'}>
        <Neck
          tuning={currentInstrument.stringTuning}
          fretCount={currentInstrument.fretStepCount}
          neckStrings={[]}
          scale={currentScale}
          showOctave={isOctaveShowing}
          isMini={true}
          newMarkers={
            currentInstrument.neckMarkers ? currentInstrument.neckMarkers : []
          }
        />
      </div>
      <div className={'neck-brace-container'}>
        <div
          className={`slide-out-container ${isPanelShowing ? 'extended' : ''}`}
        >
          <ControlPanel
            showPanel={isPanelShowing}
            hidePanel={hidePanel}
            showScale={isScaleShowing}
            checkScaleHandle={checkScale}
            unCheckScaleHandle={uncheckScale}
            showOctave={isOctaveShowing}
            checkOctaveHandle={checkOctave}
            unCheckOctaveHandle={uncheckOctave}
            handleInstrumentSelection={handleInstrumentSelection}
            currentInstrumentIndex={currentInstrumentIndex}
            selectInstrumentOptions={AllInstrumentSelections}
          />
        </div>
        <div
          className={`neck-brace-controls-container ${
            isScaleShowing ? '' : 'no-scale-display'
          }`}
        >
          <TogglePanelButton
            buttonState={isPanelShowing}
            turnOn={showPanel}
            turnOff={hidePanel}
            label={'Show Controls'}
            name={'showPanelButton'}
          />
          <ScaleSelector
            modeOptions={AllScaleModeSelections}
            noteOptions={AllScaleNoteSelections}
            currentModeIndex={currentModeIndex}
            currentRootNoteIndex={currentRootNoteIndex}
            handleModeSelection={handleModeSelection}
            handleNoteSelection={handleNoteSelection}
          />
        </div>
        <ScaleDisplay
          scale={currentScale}
          isShowing={isScaleShowing}
          currentInstrumentName={
            AllMainInstruments[currentInstrumentIndex].displayName
          }
        />
        <Neck
          tuning={currentInstrument.stringTuning}
          fretCount={currentInstrument.fretStepCount}
          neckStrings={[]}
          scale={currentScale}
          showOctave={isOctaveShowing}
          isMini={false}
          newMarkers={
            currentInstrument.neckMarkers ? currentInstrument.neckMarkers : []
          }
        />
      </div>
      <div className={'piano-brace-container'}>
        <Keyboard
          scale={currentScale}
          keyBoardInstrument={referenceOneOctaveKeyboard}
        />
      </div>
    </div>
  );
};

export default App;
