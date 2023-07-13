import * as React from 'react';
import './TogglePanelButton.modules.scss';

interface TogglePanelButtonProperties {
  buttonState: boolean;
  turnOn(): void;
  turnOff(): void;
  label: string;
  name: string;
}

const TogglePanelButton: React.FC<TogglePanelButtonProperties> = ({
  buttonState,
  turnOn,
  turnOff,
  label,
  name,
}) => {
  const buttonHandle = () => {
    if (buttonState) {
      turnOff();
    } else {
      turnOn();
    }
  };

  return (
    <>
      <button id={name} onClick={buttonHandle}>
        {label}
      </button>
    </>
  );
};

export default TogglePanelButton;
