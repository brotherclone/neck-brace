export enum Hand {
  Primary,
  Secondary,
}
export enum PolyPhonicPlayMode {
  All,
  Some,
  One,
}
export enum InstrumentOrientation {
  Left,
  Right,
}
export type PlayMode = {
  hand: Hand;
  displayName: string;
  polyPhonicPlayMode?: PolyPhonicPlayMode;
};
