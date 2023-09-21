import { StandardGuitar, OpenGTunedStandardGuitar } from './Guitars';
import { StandardBassGuitar } from './BassGuitars';
import { StringedInstrument } from '../models/StringedInstrument';
import { OptionType } from '../types/OptionType';

export const AllMainInstruments: StringedInstrument[] = [
  StandardGuitar,
  OpenGTunedStandardGuitar,
  StandardBassGuitar,
];

function createInstrumentOptions(
  instruments: StringedInstrument[]
): OptionType[] {
  const options: OptionType[] = [];
  for (let i = 0; i < instruments.length; i++) {
    const anOption: OptionType = {
      optionLabel: instruments[i].displayName,
      optionValue: i,
    };
    options.push(anOption);
  }
  return options;
}

export const AllInstrumentSelections: OptionType[] =
  createInstrumentOptions(AllMainInstruments);
