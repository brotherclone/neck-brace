import * as React from 'react';
import { OptionType } from '../../types/OptionType';
import './ScaleSelector.module.scss';

interface ScaleSelectorProperties {
  label: string;
  currentValue: number;
  options: OptionType[];
}

const ScaleSelector: React.FC<ScaleSelectorProperties> = ({
  label,
  currentValue,
  options,
}) => {
  return (
    <>
      <label>
        {label}
        <select value={currentValue}>
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
