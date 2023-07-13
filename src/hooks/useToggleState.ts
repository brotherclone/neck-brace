import * as React from 'react';

type checked = boolean;
type check = () => void;
type uncheck = () => void;

export type useToggleStateHandlers = [checked, check, uncheck];

const useToggleState = (initiallyChecked = false): useToggleStateHandlers => {
  const [isChecked, setIsChecked] = React.useState(initiallyChecked);
  const check = React.useCallback(() => {
    setIsChecked(true);
  }, [setIsChecked]);
  const uncheck = React.useCallback(() => {
    setIsChecked(false);
  }, [setIsChecked]);
  return [isChecked, check, uncheck];
};

export default useToggleState;
