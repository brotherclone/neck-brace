import * as React from 'react';
import './String.module.scss';
import { StringNotes } from '../../constants/Constants';

interface StringProperties {
  notes: StringNotes;
}

const String: React.FC<StringProperties> = ({ notes }) => {
  console.log(notes);
  return <></>;
};

export default String;
