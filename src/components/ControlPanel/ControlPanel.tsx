import * as React from 'react';
import ControlToggle from '../ControlToggle/ControlToggle';
import Selector from '../Selector/Selector';
import './ControlPanel.module.scss';
import { OptionType } from '../../types/OptionType';

interface ControlPanelProperties {
  showPanel: boolean;
  hidePanel(): void;
  showScale: boolean;
  checkScaleHandle(): void;
  unCheckScaleHandle(): void;
  showOctave: boolean;
  checkOctaveHandle(): void;
  unCheckOctaveHandle(): void;
  currentInstrumentIndex: number;
  selectInstrumentOptions: OptionType[];
  handleInstrumentSelection(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const ControlPanel: React.FC<ControlPanelProperties> = ({
  showPanel,
  hidePanel,
  showScale,
  checkScaleHandle,
  unCheckScaleHandle,
  showOctave,
  checkOctaveHandle,
  unCheckOctaveHandle,
  currentInstrumentIndex,
  selectInstrumentOptions,
  handleInstrumentSelection,
}) => {
  return (
    <>
      {showPanel && (
        <div className={'control-panel-container'}>
          <h2>Neck Brace</h2>
          <ControlToggle
            name={'showScale'}
            label={'Show Scale'}
            checked={showScale}
            checkHandle={checkScaleHandle}
            unCheckHandle={unCheckScaleHandle}
          />
          <ControlToggle
            name={'showOctave'}
            label={'Show Octave Number'}
            checked={showOctave}
            checkHandle={checkOctaveHandle}
            unCheckHandle={unCheckOctaveHandle}
          />
          <Selector
            label={'Change Instrument'}
            name={'instrumentSelector'}
            currentValue={currentInstrumentIndex}
            options={selectInstrumentOptions}
            onChange={handleInstrumentSelection}
          />
          <button onClick={hidePanel} className={'btn'}>
            Close Panel
          </button>
        </div>
      )}
    </>
  );
};

export default ControlPanel;
