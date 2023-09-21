import * as React from 'react';
import { Scale } from '../../types/Scale';
import KeyBoardKey from '../KeyboardKey/KeyBoardKey';
import { KeyBoardInstrument } from '../../models/KeyBoardInstrument';

interface KeyboardProperties {
  scale: Scale;
  keyBoardInstrument: KeyBoardInstrument;
}

const Keyboard: React.FC<KeyboardProperties> = ({
  scale,
  keyBoardInstrument,
}) => {
  React.useEffect(() => {
    keyBoardInstrument.setScale(scale.notes);
  }, [scale, keyBoardInstrument]);
  if (!keyBoardInstrument.keys || keyBoardInstrument.keys.length === 0) {
    keyBoardInstrument.buildKeys();
    keyBoardInstrument.setScale(scale.notes);
  }
  return (
    <>
      <div>
        {keyBoardInstrument.keys?.map((k, index) => {
          return <KeyBoardKey keyInfo={k} key={index} scale={scale} />;
        })}
      </div>
    </>
  );
};

export default Keyboard;
