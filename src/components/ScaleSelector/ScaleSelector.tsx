import * as React from 'react';
import './ScaleSelector.module.scss';
import Selector from '../Selector/Selector';
import { OptionType } from '../../types/OptionType';

interface ScaleSelectorProperties {
  noteOptions: OptionType[];
  modeOptions: OptionType[];
  currentRootNoteIndex: number;
  currentModeIndex: number;
  handleNoteSelection(event: React.ChangeEvent<HTMLSelectElement>): void;
  handleModeSelection(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const ScaleSelector: React.FC<ScaleSelectorProperties> = ({
  modeOptions,
  noteOptions,
  currentModeIndex,
  currentRootNoteIndex,
  handleModeSelection,
  handleNoteSelection,
}) => {
  return (
    <div className={'scale-selector-container'}>
      <Selector
        label={'Root Note'}
        name={'rootNote'}
        currentValue={currentRootNoteIndex}
        options={noteOptions}
        onChange={handleNoteSelection}
      />
      <Selector
        label={'Mode'}
        name={'mode'}
        currentValue={currentModeIndex}
        options={modeOptions}
        onChange={handleModeSelection}
      />
    </div>
  );
};

export default ScaleSelector;
