import * as React from 'react';
import { OptionType } from '../../types/OptionType';
import './ScaleSelector.module.scss';

interface ScaleSelectorProperties {
  label: string;
  currentValue: number;
  options: OptionType[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const ScaleSelector: React.FC<ScaleSelectorProperties> = ({
  label,
  currentValue,
  options,
  onChange,
}) => {
  return (
    <>
      <label>
        {label}
        <select value={currentValue} onChange={onChange}>
          {options.map((option, index) => (
            <option value={option.optionValue} key={index}>
              {option.optionLabel}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default ScaleSelector;
