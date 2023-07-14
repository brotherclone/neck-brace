import * as React from 'react';
import ControlToggle from '../ControlToggle/ControlToggle';
import './ControlPanel.module.scss';

interface ControlPanelProperties {
  showPanel: boolean;
  hidePanel(): void;
  showScale: boolean;
  checkScaleHandle(): void;
  unCheckScaleHandle(): void;
  showOctave: boolean;
  checkOctaveHandle(): void;
  unCheckOctaveHandle(): void;
  showNoteName: boolean;
  checkNoteNameHandle(): void;
  unCheckNoteNameHandle(): void;
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
  showNoteName,
  checkNoteNameHandle,
  unCheckNoteNameHandle,
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
            name={'showNote'}
            label={'Show Note Name'}
            checked={showNoteName}
            checkHandle={checkNoteNameHandle}
            unCheckHandle={unCheckNoteNameHandle}
          />
          <ControlToggle
            name={'showOctave'}
            label={'Show Octave Number'}
            checked={showOctave}
            checkHandle={checkOctaveHandle}
            unCheckHandle={unCheckOctaveHandle}
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
