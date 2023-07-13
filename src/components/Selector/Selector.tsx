import * as React from 'react';
import { OptionType } from '../../types/OptionType';
import './Selector.module.scss';

interface ScaleSelectorProperties {
  label: string;
  name: string;
  currentValue: number;
  options: OptionType[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const Selector: React.FC<ScaleSelectorProperties> = ({
  label,
  currentValue,
  options,
  onChange,
  name,
}) => {
  return (
    <div className={'selector-container'}>
      <label htmlFor={name}>{label}</label>
      <select value={currentValue} onChange={onChange} id={name}>
        {options.map((option, index) => (
          <option value={option.optionValue} key={index}>
            {option.optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
