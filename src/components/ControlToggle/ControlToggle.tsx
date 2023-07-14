import * as React from 'react';
import Toggle from 'react-toggle';
import './ControlToggle.module.scss';

interface ControlToggleProperties {
  name: string;
  label: string;
  checked: boolean;
  checkHandle(): void;
  unCheckHandle(): void;
}

const ControlToggle: React.FC<ControlToggleProperties> = ({
  name,
  label,
  checked,
  checkHandle,
  unCheckHandle,
}) => {
  const doCheck = () => {
    if (checked) {
      unCheckHandle();
    } else {
      checkHandle();
    }
  };
  return (
    <div className={'toggle-container'}>
      <Toggle id={name} checked={checked} onChange={doCheck} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default ControlToggle;
